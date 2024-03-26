import { IHabit } from "@/shared/interface/habit";

export const isFormValid = (inputValues: IHabit): boolean => {
  return Boolean(
    inputValues.category &&
      inputValues.addDate &&
      inputValues.title &&
      inputValues.period
  );
};
