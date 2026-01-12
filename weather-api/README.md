# Weather API

A backend service built with Node.js and Express that fetches weather data from the Visual Crossing Weather API and caches information using Redis to optimize performance and reduce API calls.

## Features

- Fetches real-time weather data for any city.
- **Redis Caching**: Caches weather data for 10 minutes to reduce redundant API requests.
- **Error Handling**: Graceful error handling for invalid cities or API issues.
- **ES Modules**: Modern JavaScript syntax.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Redis](https://redis.io/) (Installed and running locally on port 6379)
- [Visual Crossing API Key](https://www.visualcrossing.com/weather-api)

## Setup

1.  **Clone the repository** (if not already done):

    ```bash
    git clone https://github.com/Derajatul/roadmap-sh--project-backend.git
    cd roadmap-sh--project-backend/weather-api
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the `weather-api` directory and add your API key:

    ```env
    WEATHER_API_KEY=your_visual_crossing_api_key_here
    ```

4.  **Run the application**:
    ```bash
    npm start
    ```

## Usage

Send a GET request to the `/weather` endpoint with a `city` query parameter:

**Example Request:**

```
GET http://localhost:3000/weather?city=jakarta
```

**Example Response:**

```json
{
  "queryCost": 1,
  "latitude": -6.21462,
  "longitude": 106.845,
  "resolvedAddress": "Jakarta, Indonesia",
  "address": "jakarta",
  "timezone": "Asia/Jakarta",
  "tzoffset": 7,
  "days": [...]
}
```

## Roadmap.sh Project

This project is part of the [Weather API](https://roadmap.sh/projects/weather-api-project) challenge on roadmap.sh.
