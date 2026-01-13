#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

const DURATIONS = {
  day: 1,
  week: 7,
  month: 30,
  year: 365,
};

function getDateBefore(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split("T")[0];
}

async function fetchTrendingRepos({ duration, limit }) {
  if (!DURATIONS[duration]) {
    throw new Error(
      `Invalid duration. Use: ${Object.keys(DURATIONS).join(", ")}`
    );
  }

  const date = getDateBefore(DURATIONS[duration]);
  const query = `created:>${date}`;
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=${limit}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();
  return data.items;
}

function printRepos(repos) {
  repos.forEach((repo, i) => {
    console.log(`
${i + 1}. ${repo.full_name}
⭐ Stars     : ${repo.stargazers_count}
🧠 Language  : ${repo.language ?? "N/A"}
📝 Desc      : ${repo.description ?? "-"}
🔗 URL       : ${repo.html_url}
`);
  });
}

program
  .name("trending-repos")
  .description("CLI tool to display GitHub trending repositories")
  .option("-d, --duration <type>", "day | week | month | year", "week")
  .option("-l, --limit <number>", "number of repositories", "10")
  .action(async (options) => {
    try {
      const repos = await fetchTrendingRepos({
        duration: options.duration,
        limit: Number(options.limit),
      });

      if (!repos.length) {
        console.log("No repositories found.");
        return;
      }

      printRepos(repos);
    } catch (err) {
      console.error("❌ Error:", err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
