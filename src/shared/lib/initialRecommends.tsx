"use client";

import React, { useEffect, useState } from "react";
import { db } from "../db/db.model";
import { IHabit } from "../interface/habit";

// Добавление привычек в рекомендации
export const InitialHabits = ({ habits }: { habits: IHabit[] }) => {
  const [habitsExist, setHabitsExist] = useState<boolean>(true);
  useEffect(() => {
    const checkHabits = async () => {
      const habits = await db.recommendations.toArray();
      setHabitsExist(habits.length > 0);
    };

    checkHabits();
  }, []);

  useEffect(() => {
    const addInitialHabits = async () => {
      const existingRecommendations = await db.recommendations.toArray();
      const newRecommendations = habits.filter((habit) => {
        return !existingRecommendations.some(
          (existing) => existing.title === habit.title
        );
      });

      if (newRecommendations.length > 0) {
        await db.recommendations.bulkAdd(newRecommendations);
      }
    };

    if (!habitsExist) {
      addInitialHabits();
    }
  }, [habits, habitsExist]);

  return null;
};
