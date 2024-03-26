"use client";

import { Input, Space } from "antd";
import { ImportData } from "@/features/developers-slice/importData";
import { db } from "@/shared/db/db.model";
import { useState } from "react";
import { parseDateString } from "@/shared/lib/date";

export const Developers = () => {
  const [dataValue, setDataValue] = useState("");
  const onChange = (value: string) => {
    db.date.add(parseDateString(value) || new Date());
    setDataValue(value);
  };
  return (
    <>
      <Space direction="vertical">
        <ImportData />
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={dataValue}
          type="date"
        />
      </Space>
    </>
  );
};
