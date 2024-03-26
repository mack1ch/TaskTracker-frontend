interface IOptions {
  value: string;
  label: string;
}

export const DCategory: IOptions[] = [
  {
    value: "Здоровье",
    label: "Здоровье",
  },
  {
    value: "Образование",
    label: "Образование",
  },
  {
    value: "Спокойствие",
    label: "Спокойствие",
  },
  {
    value: "Физическая активность",
    label: "Физическая активность",
  },
  {
    value: "Саморазвитие",
    label: "Саморазвитие",
  },
  {
    value: "Языки",
    label: "Языки",
  },
];

export const DPeriod: IOptions[] = [
  {
    value: "daily",
    label: "Ежедневно",
  },
  {
    value: "weekly",
    label: "Eженедельно",
  },
  {
    value: "monthly",
    label: "Ежемесячно",
  },
];
