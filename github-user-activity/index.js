async function fetchGithubActivity(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function displayActivity(events) {
  if (events.length === 0) {
    console.log("No activity found");
    return;
  }
  events.forEach((event) => {
    let action;
    switch (event.type) {
      case "PushEvent":
        const commitCount = event.payload.commits.length;
        action = `Pushed ${commitCount} commit${
          commitCount > 1 ? "s" : ""
        } to ${event.repo.name}`;
        break;
      case "IssuesEvent":
        action = `${event.payload.action} issue #${event.payload.issue.number} on ${event.repo.name}`;
        break;
      case "WatchEvent":
        action = `Starred ${event.repo.name}`;
        break;
      case "ForkEvent":
        action = `Forked ${event.repo.name}`;
        break;
      case "CreateEvent":
        action = `Created ${event.payload.ref_type} ${event.payload.ref} in ${event.repo.name}`;
        break;
      default:
        action = `${event.type.replace("Event", "")} ${event.repo.name}`;
        break;
    }
    console.log(`${event.created_at} - ${action}`);
  });
}

const username = process.argv[2];
if (!username) {
  console.error("Please provide a username");
  process.exit(1);
}

fetchGithubActivity(username)
  .then((events) => {
    displayActivity(events);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
