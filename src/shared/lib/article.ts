import { TCategory } from "@/shared/interface/habit";
import Edu from "../../../public/icons/habitCategory/edu.svg";
import Health from "../../../public/icons/habitCategory/health.svg";
import SelfDev from "../../../public/icons/habitCategory/selfDev.svg";
import Physical from "../../../public/icons/habitCategory/physical.svg";
import Language from "../../../public/icons/habitCategory/language.svg";
import Calmness from "../../../public/icons/habitCategory/calmness.svg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
export const articleBgColor = (category?: TCategory) => {
  switch (category) {
    case "Здоровье": {
      return "#4E7BF9";
    }
    case "Образование": {
      return "#5ACC71";
    }
    case "Саморазвитие": {
      return "#7FC911";
    }
    case "Финансовая грамотность": {
      return "#00BEA2";
    }
    case "Физическая активность": {
      return "#D10075";
    }
    case "Языки": {
      return "#FF5A49";
    }
    default: {
      return "#fff";
    }
  }
};

export const articleIcon = (category?: TCategory) => {
  switch (category) {
    case "Здоровье": {
      return Health as StaticImport;
    }
    case "Образование": {
      return Edu as StaticImport;
    }
    case "Саморазвитие": {
      return SelfDev as StaticImport;
    }
    case "Финансовая грамотность": {
      return Calmness as StaticImport;
    }
    case "Физическая активность": {
      return Physical as StaticImport;
    }
    case "Языки": {
      return Language as StaticImport;
    }
    default: {
      return Edu as StaticImport;
    }
  }
};
