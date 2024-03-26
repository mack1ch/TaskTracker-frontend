import {
  UploadOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined,
  FireOutlined,
  UserOutlined,
  BarChartOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { ReactNode } from "react";

function getWordByNumber(number: number): ReactNode | string {
  const numberToWordMap = {
    1: "Привычки",
    2: <Link href="/habit/recommend">Рекомендации</Link>,
    3: <Link href="/profile">Профиль</Link>,
    4: <Link href="/stats">Статистика</Link>,
    5: <Link href="/dev">Разработчикам</Link>,
  };
  return (
    numberToWordMap[number as keyof typeof numberToWordMap] || "Индекс неверный"
  );
}

export const DHeaderItems = [
  UnorderedListOutlined,
  FireOutlined,
  UserOutlined,
  BarChartOutlined,
  AndroidOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: getWordByNumber(index + 1),
  children: index + 1 === 1 && [
    {
      key: (index + 1) * 4 + Math.random(),
      label: <Link href="/">Мои привычки</Link>,
    },
    {
      key: (index + 1) * 4 + Math.random(),
      label: <Link href="/habit/create">Создать привычку</Link>,
    },
  ],
}));
