#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs/promises";

const program = new Command();

export const jsonToCsv = (data, options = {}) => {
  if (!Array.isArray(data) || data.length === 0) return "";

  const { columns = Object.keys(data[0]), delimiter = "," } = options;

  const escape = (value) => {
    if (value === null || value === undefined) return "";
    const str = String(value).replace(/"/g, '""');
    return `"${str}"`;
  };

  const header = columns.join(delimiter);

  const rows = data.map((item) =>
    columns.map((col) => escape(item[col])).join(delimiter)
  );

  return [header, ...rows].join("\n");
};

const checkJsonFileExists = async () => {
  try {
    await fs.access("expenses.json");
  } catch {
    await fs.writeFile("expenses.json", "[]");
  }
};

program
  .command("add")
  .description("Add an expense")
  .option("-d, --description <description>")
  .option("-p, --amount <amount>")
  .action(async (expense) => {
    await checkJsonFileExists();

    const data = JSON.parse(await fs.readFile("expenses.json", "utf-8"));
    const id = Date.now();
    await fs.writeFile(
      "expenses.json",
      JSON.stringify(
        [
          ...data,
          {
            id,
            date: new Date().toLocaleDateString(),
            description: expense.description,
            amount: expense.amount,
          },
        ],
        null,
        2
      )
    );
    console.log(`expenses added successfully (ID: ${id})`);
  });

program
  .command("list")
  .description("List all expenses")
  .action(async () => {
    const data = JSON.parse(await fs.readFile("expenses.json", "utf-8"));
    console.log(jsonToCsv(data));
  });

program
  .command("summary")
  .option("-m, --month <month>")
  .description("Summary of expenses")
  .action(async (options) => {
    const data = JSON.parse(await fs.readFile("expenses.json", "utf-8"));
    if (options.month) {
      console.log(
        data
          .filter(
            (item) =>
              item.date.split("/")[1] ===
              (options.month.length === 1 ? `0${options.month}` : options.month)
          )
          .reduce((acc, item) => acc + Number(item.amount), 0)
      );
    } else {
      console.log(data.reduce((acc, item) => acc + Number(item.amount), 0));
    }
  });

program
  .command("delete")
  .option("-i, --id <id>")
  .description("delete expenses")
  .action(async (options) => {
    const data = JSON.parse(await fs.readFile("expenses.json", "utf-8"));
    const updatedData = data.filter((item) => item.id !== Number(options.id));
    await fs.writeFile("expenses.json", JSON.stringify(updatedData, null, 2));
    console.log(`expenses deleted successfully (ID: ${options.id})`);
  });

program.parse(process.argv);
