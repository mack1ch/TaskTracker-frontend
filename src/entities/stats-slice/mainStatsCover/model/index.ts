import { IHabit } from "@/shared/interface/habit";

export function countCompletedHabits(objects?: IHabit[]): number {
  if (!objects) return 0;
  let count = 0;
  for (const obj of objects) {
    if (obj.isCompleted) {
      count++;
    }
  }
  return count;
}
