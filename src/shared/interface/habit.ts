export type TCategory =
  | "Здоровье"
  | "Образование"
  | "Финансовая грамотность"
  | "Физическая активность"
  | "Саморазвитие"
  | "Языки";
export type TPeriod = "daily" | "weekly" | "monthly";

export interface IHabit {
  id?: number | null;
  title: string;
  category?: TCategory;
  notification: boolean;
  period?: TPeriod;

  /**
   * 	Целевое значение для привычек
   */
  targetValue?: number;

  /**
   * 	Текущее значение целевого действия для привычек === value
   */
  currentValue?: number;

  /**
   * 	 В днях
   */
  duration?: number;

  isCompleted: boolean;

  /**
   * 	 Дата, начиная с которой Вася трекает эту привычку
   */
  addDate?: Date;
}

export interface IHabitAction {
  /**
   * 	id привычки, чтобы связать с объектами Habit
   */
  id: number;

  /**
   * 	Дата и время, когда это действие отмечено как выполненное
   */
  date: Date;

  /**
   * 	Необязательное поле – значение для численных привычек,
   */
  value?: number;
}
