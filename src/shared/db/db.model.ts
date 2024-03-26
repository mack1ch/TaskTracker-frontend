import Dexie, { Table } from "dexie";
import { IHabit, IHabitAction } from "../interface/habit";

export class DB extends Dexie {
  habits!: Table<IHabit>;
  recommendations!: Table<IHabit>;
  developers!: Table<IHabitAction>;
  date!: Table<Date>;
  constructor() {
    super("habits");
    this.version(11).stores({
      habits: "++id, title, category, notification,regularity",
      recommendations: "++id, title",
      developers: "++id, habits, actions",
      date: "++id",
    });
  }
}

export const db = new DB();
