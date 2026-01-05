#!/usr/bin/env node
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Pakai: github-activity <command>");
  process.exit(0);
}
const username = args[0];

const getEvents = async () => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`
  );
  const data = await response.json();
  data.map((event) => {
    if (event.type === "PushEvent") {
      console.log(`Pushed to ${event.repo.name}`);
    } else if (event.type === "CreateEvent") {
      console.log(`Created ${event.payload.ref_type} ${event.payload.ref}`);
    } else if (event.type === "DeleteEvent") {
      console.log(`Deleted ${event.payload.ref_type} ${event.payload.ref}`);
    } else {
      console.log("Another event");
    }
  });
};

getEvents();
