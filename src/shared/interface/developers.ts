import { IHabit, IHabitAction } from "./habit";

export interface IDataToUpload {
  // данные о самих привычках
  habits: IHabit[];
  id: number;
  // данные о выполнении
  actions: IHabitAction[];
}
