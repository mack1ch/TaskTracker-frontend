import { TPeriod } from "@/shared/interface/habit";

export const periodParsing = (regularity: TPeriod | undefined) => {
  switch (regularity) {
    case "daily": {
      return "Нужно выполнить сегодня";
    }
    case "weekly": {
      return "Нужно выполнить за неделю";
    }
    case "monthly": {
      return "Нужно выполнить за месяц";
    }
    default: {
      return "Да оно само выполнится";
    }
  }
};
