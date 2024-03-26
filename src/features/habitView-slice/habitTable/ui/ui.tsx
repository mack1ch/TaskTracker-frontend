"use client";

import { useLiveQuery } from "dexie-react-hooks";
import styles from "./ui.module.scss";
import { db } from "../../../../shared/db/db.model";
import { CountingHabitArticle } from "@/entities/habitView-slice/habitArticle";
import { periodParsing } from "../model";

export const HabitTable = () => {
  const habits = useLiveQuery(() => db.habits.toArray());
  const periodSet = new Set(habits?.map((habit) => habit.period));
  const period = Array.from(periodSet);
  
  return (
    <>
      {period.map((period) => (
        <div className={styles.habitsList} key={period}>
          <h2 className={styles.regularity}>
            {periodParsing(period || undefined)}
          </h2>
          <ul className={styles.habits}>
            {habits &&
              habits
                .filter((habit) => habit.period === period)
                .map((habit) => (
                  <CountingHabitArticle key={habit.id} habit={habit} />
                ))}
          </ul>
        </div>
      ))}
    </>
  );
};
