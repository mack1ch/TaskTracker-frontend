"use client";

import React, { useEffect } from "react";
import { notification } from "antd"; // Предполагается, что ваш тип привычки находится в файле types.ts
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/shared/db/db.model";
import { IHabit } from "@/shared/interface/habit";

export const Notifications: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const habits: IHabit[] | undefined = useLiveQuery(() => db.habits.toArray());
  const getCurrentDate = async (): Promise<Date | undefined> => {
    const lastDateEntry = await db.date.orderBy(":id").last();
    return lastDateEntry;
  };
  const currentDate: Date | undefined = useLiveQuery(getCurrentDate);
  useEffect(() => {
    if (habits && currentDate) {
      habits.forEach((habit) => {
        if (shouldSendNotification(habit, currentDate)) {
          sendNotification(habit);
        }
      });
    }
  }, [habits, currentDate]);

  const shouldSendNotification = (
    habit: IHabit,
    currentDate: Date
  ): boolean => {
    if (!habit.notification || habit.isCompleted) {
      return false;
    }

    const habitStartDate = habit.addDate ? new Date(habit.addDate) : new Date(); // Преобразуем дату начала привычки в объект Date
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor(
      (currentDate.getTime() - habitStartDate.getTime()) / millisecondsInDay
    );

    switch (habit.period) {
      case "daily":
        return daysPassed % 1 === 0;
      case "weekly":
        return daysPassed % 7 === 0;
      case "monthly":
        return daysPassed % 30 === 0;
      default:
        return false;
    }
  };
  const sendNotification = (habit: IHabit) => {
    api.info({
      message: `${habit.title}`,
      description: "Напоминаем, что нужно выполнить привычку",
    });
  };

  return <>{contextHolder}</>;
};
