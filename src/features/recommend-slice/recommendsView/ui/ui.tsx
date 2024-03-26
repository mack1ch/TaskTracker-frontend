import { InitialHabits } from "@/shared/lib/initialRecommends";
import { DRecommends } from "../data";
import styles from "./ui.module.scss";
import { RecommendHabitArticle } from "@/entities/recommend-slice/recommendHabitArticle";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/shared/db/db.model";

export const RecommendsView = () => {
  const recommends = useLiveQuery(() => db.recommendations.toArray());
  const categorySet = new Set(recommends?.map((habit) => habit.category));
  const category = Array.from(categorySet);
  return (
    <>
      <InitialHabits habits={DRecommends} />
      {category.map((category) => (
        <div className={styles.habitsList} key={category}>
          <h2 className={styles.regularity}>{category}</h2>
          <ul className={styles.habits}>
            {recommends
              ?.filter((habit) => habit.category === category)
              .map((habit) => (
                <RecommendHabitArticle key={habit.id} habit={habit} />
              ))}
          </ul>
        </div>
      ))}
    </>
  );
};
