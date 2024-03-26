"use client";

import { db } from "@/shared/db/db.model";
import { IDataToUpload } from "@/shared/interface/developers";
import { IHabit } from "@/shared/interface/habit";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";

const { Dragger } = Upload;

export const ImportData = () => {
  const [file, setFile] = useState<UploadFile>();

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    const selectedFile = newFileList[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = event.target?.result as string;
          const parsedData = JSON.parse(jsonData) as IDataToUpload;
          if (!parsedData) return;
          else {
            const updatedHabits: IHabit[] = parsedData.habits.map(
              (habit, index) => ({
                ...habit,
                isCompleted: false,
                notification: false,
              })
            );
            db.developers.bulkAdd(parsedData.actions);
            db.habits.bulkAdd(updatedHabits);
          }
        } catch (error) {
          message.error("Ошибка при чтении файла JSON");
          console.error(error);
        }
      };
      reader.readAsText(selectedFile.originFileObj!);
    }
  };

  return (
    <>
      <Dragger accept=".json" onChange={handleChange}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Кликните или перетащите для загрузки файлов
        </p>
        <p className="ant-upload-hint">
          Учтите, что вам необходимо загрузить JSON файл
        </p>
      </Dragger>
    </>
  );
};
