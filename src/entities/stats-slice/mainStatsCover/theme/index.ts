import { ProgressProps, ThemeConfig } from "antd";

export const mainStatsCoverTheme: ThemeConfig = {
  components: {
    Statistic: {
      colorText: "#fff",
      colorTextHeading: "#fff",
      colorTextDescription: "#fff",
    },
    Progress: {
      circleTextColor: "#fff",
    },
  },
};

export const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};
