import { IHabit } from "@/shared/interface/habit";

export function calculateCompletionPercentage(habits?: IHabit[]): number {
  if (habits?.length === 0 || !habits) return 0;

  const completedCount: number = habits.filter(
    (habit) => habit.isCompleted
  ).length;
  const totalCount: number = habits.length;

  return Math.round((completedCount / totalCount) * 100);
}
