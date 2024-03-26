import { Button, DatePicker, Form, Input, message, Select, Switch } from "antd";
import styles from "./ui.module.scss";
import { IHabit } from "@/shared/interface/habit";
import { useCallback, useState } from "react";
import { db } from "../../../../shared/db/db.model";
import { DCategory, DPeriod } from "../data";
import { isFormValid } from "../model";

export const CountingHabit = () => {
  const [inputValues, setInputValues] = useState<IHabit>({
    title: "",
    category: undefined,
    period: undefined,
    id: null,
    duration: undefined,
    notification: false,
    isCompleted: false,
    addDate: undefined,
    targetValue: undefined,
  });

  const handleInputChange = (
    name: string,
    value: string | string[] | boolean
  ) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const addHabit = useCallback(async () => {
    if (isFormValid(inputValues)) {
      await db.habits.add({
        title: inputValues?.title,
        category: inputValues.category,
        period: inputValues.period || "daily",
        duration: inputValues.duration || 365,
        notification: inputValues.notification,
        isCompleted: false,
        addDate: inputValues.addDate,
        targetValue: inputValues.targetValue,
      });
      setInputValues({
        title: "",
        category: undefined,
        id: null,
        period: undefined,
        notification: false,
        duration: undefined,
        isCompleted: false,
        addDate: undefined,
        targetValue: undefined,
      });
    } else {
      message.open({
        type: "error",
        content: "Форма не заполнена",
      });
    }
  }, [inputValues]);
  return (
    <>
      <Form
        layout="vertical"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
        className={styles.form}
      >
        <span className={styles.inputLayouts}>
          <Form.Item
            label="Название привычки"
            required
            rules={[{ required: true, message: "Впишите название заявки" }]}
            style={{ width: "100%" }}
          >
            <Input
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={inputValues.title}
              placeholder="Советуем коротко"
            />
          </Form.Item>
          <Form.Item
            label="Категория"
            required
            rules={[{ required: true, message: "Впишите категорию" }]}
            style={{ width: "100%" }}
          >
            <Select
              onChange={(e) => handleInputChange("category", e)}
              showSearch
              value={inputValues.category}
              placeholder="Выберите категорию"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={DCategory}
            />
          </Form.Item>
          <Form.Item required label="Регулярность" style={{ width: "100%" }}>
            <Select
              onChange={(e) => handleInputChange("period", e)}
              showSearch
              value={inputValues.period}
              placeholder="Выберите регулярность привычки"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={DPeriod}
            />
          </Form.Item>
          <Form.Item
            label="Начало"
            required
            rules={[
              {
                required: true,
                message: "Впишите, когда вы планируйте начать трекать",
              },
            ]}
            style={{ width: "100%" }}
          >
            <DatePicker
              showTime
              style={{ width: "100%" }}
              placeholder="Начало вашей привычки"
              onChange={(_, e) => handleInputChange("addDate", e)}
            />
          </Form.Item>

          <Form.Item label="Целевое действие " style={{ width: "100%" }}>
            <Input
              onChange={(e) => handleInputChange("targetValue", e.target.value)}
              value={inputValues.targetValue}
              type="number"
              placeholder="Например, пройти 10000 шагов"
            />
          </Form.Item>

          <Form.Item label="Длительность" style={{ width: "100%" }}>
            <Input
              onChange={(e) => handleInputChange("duration", e.target.value)}
              value={inputValues.duration}
              type="number"
              placeholder="В днях"
            />
          </Form.Item>

          <Form.Item label="Показывать уведомления">
            <Switch
              value={inputValues.notification}
              onChange={(e) => handleInputChange("notification", e)}
              defaultChecked
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={addHabit} type="default" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </span>
      </Form>
    </>
  );
};
