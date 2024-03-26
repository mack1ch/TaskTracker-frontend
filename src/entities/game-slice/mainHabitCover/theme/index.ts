import { ProgressProps, ThemeConfig } from "antd";

export const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

export const progressTheme: ThemeConfig = {
  components: {
    Progress: {
      colorText: "#fff",
    },
  },
};
