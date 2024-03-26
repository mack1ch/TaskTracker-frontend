import { IHabit } from "@/shared/interface/habit";
import styles from "./ui.module.scss";
import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import { habitArticle } from "../theme";
import { articleBgColor, articleIcon } from "@/shared/lib/article";
import { useCallback } from "react";
import { db } from "@/shared/db/db.model";
export const RecommendHabitArticle = ({ habit }: { habit?: IHabit }) => {
  const addHabit = useCallback(async () => {
    await db.habits.add({
      title: habit?.title!,
      category: habit?.category!,
      isCompleted: habit?.isCompleted!,
      notification: habit?.notification!,
      period: habit?.period,
      addDate: new Date(),
    });
    await db.recommendations.delete(habit?.id!);
  }, [habit]);
  if (!habit) return null;

  return (
    <>
      <ConfigProvider theme={habitArticle}>
        <article
          style={{ backgroundColor: articleBgColor(habit.category) }}
          className={styles.habit}
          key={habit.id}
        >
          <div className={styles.category}>
            <Image
              src={articleIcon(habit.category)}
              width={28}
              height={28}
              alt={habit.category || ""}
            />
            <h5 className={styles.categoryText}>{habit.category}</h5>
          </div>
          <h4 className={styles.habitName}>{habit.title}</h4>

          <span className={styles.completed}>
            <Button onClick={addHabit} type="primary">
              Добавить
            </Button>
          </span>
        </article>
      </ConfigProvider>
    </>
  );
};
