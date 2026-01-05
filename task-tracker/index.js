#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs/promises";

const program = new Command();

program
  .command("add <task>")
  .description("Add a task")
  .action(async (task) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      const id = Date.now();
      await fs.writeFile(
        "tasks.json",
        JSON.stringify([
          ...data,
          {
            id,
            description: task,
            status: "todo",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      );

      console.log(`Task added successfully (ID: ${id})`);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("update <id> <task>")
  .description("Update a task")
  .action(async (id, task) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }
    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      const updatedData = data.find((item) => item.id === Number(id));
      updatedData.description = task;
      updatedData.updatedAt = new Date();
      await fs.writeFile("tasks.json", JSON.stringify(data, null, 2));
      console.log(`Task updated successfully (ID: ${id})`);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("delete <id>")
  .description("delete a task")
  .action(async (id) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      const deletedData = data.filter((item) => item.id !== Number(id));
      await fs.writeFile("tasks.json", JSON.stringify(deletedData, null, 2));
      console.log(`Task deleted successfully (ID: ${id})`);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("mark-in-progress <id>")
  .description("Mark a task as in progress")
  .action(async (id) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      const updatedData = data.find((item) => item.id === Number(id));
      updatedData.status = "in-progress";
      updatedData.updatedAt = new Date();
      await fs.writeFile("tasks.json", JSON.stringify(data, null, 2));
      console.log(`Task marked as in progress successfully (ID: ${id})`);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("mark-done <id>")
  .description("Mark a task as done")
  .action(async (id) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      const updatedData = data.find((item) => item.id === Number(id));
      updatedData.status = "done";
      updatedData.updatedAt = new Date();
      await fs.writeFile("tasks.json", JSON.stringify(data, null, 2));
      console.log(`Task marked as done successfully (ID: ${id})`);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("list-tasks")
  .description("List all tasks")
  .action(async () => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      console.log(data);
    } catch {
      console.log("Task not found");
    }
  });

program
  .command("list <status>")
  .description("List all tasks")
  .action(async (status) => {
    try {
      await fs.access("tasks.json");
    } catch {
      await fs.writeFile("tasks.json", "[]");
    }

    try {
      const data = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
      console.log(data.filter((item) => item.status === status));
    } catch {
      console.log("Task not found");
    }
  });

program.parse(process.argv);
