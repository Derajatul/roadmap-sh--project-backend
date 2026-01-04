#!/usr/bin/env node
import { Command } from "commander";
import dotenv from "dotenv";
dotenv.config();

const program = new Command();

const fetchMovie = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

program
  .option("-t, --type <text>", "Type of search")
  .action((query, options) => {
    if (query.type === "popular") {
      fetchMovie(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
      );
    } else if (query.type === "playing") {
      fetchMovie(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
      );
    } else if (query.type === "top") {
      fetchMovie(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
      );
    } else if (query.type === "upcoming") {
      fetchMovie(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`
      );
    } else {
      console.log("Invalid type");
    }
  });

program.parse();
