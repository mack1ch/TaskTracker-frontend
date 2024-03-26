"use client";

import { ConfigProvider, Progress, Space, Statistic } from "antd";
import styles from "./ui.module.scss";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/shared/db/db.model";
import { mainStatsCoverTheme, twoColors } from "../theme";
import { countCompletedHabits } from "../model";

export const MainStatsCover = () => {
  const habits = useLiveQuery(() => db.habits.toArray());
  const completedHabits = countCompletedHabits(habits!);
  const completedHabitPercent = Math.round(
    (completedHabits / habits?.length!) * 100
  );
  return (
    <>
      <ConfigProvider theme={mainStatsCoverTheme}>
        <section className={styles.cover}>
          <Space direction="vertical">
            <Statistic title="Всего привычек" value={habits?.length} />
            <Statistic title="Выполненных привычек" value={completedHabits} />
          </Space>
          <Space>
            <p className={styles.aim}>Цель выполнена на</p>
            <Progress
              strokeColor={twoColors}
              type="circle"
              percent={completedHabitPercent}
            />
          </Space>
        </section>
      </ConfigProvider>
    </>
  );
};
