#!/usr/bin/env node
import { Command } from "commander";
import dotenv from "dotenv";
dotenv.config();

const program = new Command();

const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
};

const fetchPlayingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
};

const fetchTopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
};

const fetchUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
};

program
  .option("-t, --type <text>", "Type of search")
  .action((query, options) => {
    if (query.type === "popular") {
      fetchPopularMovies();
    } else if (query.type === "playing") {
      fetchPlayingMovies();
    } else if (query.type === "top") {
      fetchTopRatedMovies();
    } else if (query.type === "upcoming") {
      fetchUpcomingMovies();
    } else {
      console.log("Invalid type");
    }
  });

program.parse();
