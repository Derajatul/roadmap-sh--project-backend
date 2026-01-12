import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { createClient } from "redis";

dotenv.config();

// Initialize Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

// Connect to Redis
await redisClient.connect();

const getWeather = async (city) => {
  const key = `weather:${city}`;

  // check cache
  try {
    const cached = await redisClient.get(key);
    if (cached) {
      console.log(`Cache hit for ${city}`);
      return JSON.parse(cached);
    }
  } catch (err) {
    console.error("Redis error:", err);
    // Continue fetching even if Redis fails
  }

  // request 3rd party api
  console.log(`Cache miss for ${city}. Fetching from API...`);
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.statusText}`);
  }

  const data = await response.json();

  // save cached result
  try {
    await redisClient.set(key, JSON.stringify(data), { EX: 600 });
  } catch (err) {
    console.error("Failed to save to cache:", err);
  }

  return data;
};

const app = express();

const weatherRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.get("/weather", weatherRateLimit, async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send({ error: "City parameter is required" });
  }

  try {
    const weather = await getWeather(city);
    res.send(weather);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
