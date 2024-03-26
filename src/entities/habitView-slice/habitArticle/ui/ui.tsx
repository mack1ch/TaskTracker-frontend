import { IHabit } from "@/shared/interface/habit";
import styles from "./ui.module.scss";
import Image from "next/image";
import { articleBgColor, articleIcon } from "@/shared/lib/article";
import { Button, ConfigProvider, Slider } from "antd";
import { habitArticle } from "../theme";
import Check from "../../../../../public/icons/check.svg";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@/shared/db/db.model";
import NotificationOff from "../../../../../public/icons/notificationOff.svg";
import NotificationOn from "../../../../../public/icons/notificationOn.svg";
import TrashBin from "../../../../../public/icons/trashBin.svg";

export const CountingHabitArticle = ({ habit }: { habit: IHabit }) => {
  const [isHabitCompleted, setCompleted] = useState(habit.isCompleted);
  const [sliderValue, setSliderValue] = useState(habit.currentValue);
  const [isNotification, setNotification] = useState(habit.notification);

  // Изменяет выполненность привычки
  const updateHabit = useCallback(async () => {
    await db.habits.update(habit, {
      isCompleted: !isHabitCompleted,
    });

    setCompleted(!isHabitCompleted);
    setSliderValue(habit.isCompleted ? habit.targetValue : 0);
  }, [habit, isHabitCompleted]);

  const deleteHabit = useCallback(async () => {
    await db.habits.delete(habit?.id!);
  }, [habit?.id]);

  // Вкл и выкл уведомлений
  const updateNotification = useCallback(async () => {
    await db.habits.update(habit, {
      notification: !isNotification,
    });
    setNotification(habit.notification);
  }, [habit, isNotification]);

  // Изменение выполненности с помощью слайдера
  useEffect(() => {
    const complete = async () => {
      if (sliderValue! < habit.targetValue!) {
        setCompleted(false);
        await db.habits.update(habit, {
          isCompleted: false,
        });
      }
      if (sliderValue === habit.targetValue && !isHabitCompleted) {
        await db.habits.update(habit, {
          isCompleted: !isHabitCompleted,
        });
      }
    };
    const changeCurrentValue = async () => {
      await db.habits.update(habit, {
        currentValue: sliderValue,
      });
    };
    changeCurrentValue();
    complete();
  }, [habit, isHabitCompleted, sliderValue]);

  const onSliderChange = (newValue: number) => {
    setSliderValue(newValue);
  };
  return (
    <>
      <ConfigProvider theme={habitArticle}>
        <article
          style={{ backgroundColor: articleBgColor(habit.category) }}
          className={styles.habit}
          key={habit.id}
        >
          <div className={styles.category}>
            <Image
              src={articleIcon(habit.category)}
              width={28}
              height={28}
              alt={habit.category || ""}
            />
            <h5 className={styles.categoryText}>{habit.category}</h5>
          </div>
          <h4 className={styles.habitName}>{habit.title}</h4>

          {habit.targetValue && (
            <div style={{ width: "100%" }}>
              <span className={styles.step}>Шаги на пути к достижению</span>
              <Slider
                onChange={onSliderChange}
                style={{ width: "90% " }}
                step={5}
                min={0}
                value={sliderValue}
                max={habit.targetValue}
                defaultValue={habit.currentValue}
              />
            </div>
          )}
          <span className={styles.completed}>
            {habit?.isCompleted ? (
              <div className={styles.buttonsWrap}>
                <span
                  title="Отменить"
                  onClick={updateHabit}
                  className={styles.completedButton}
                >
                  <Image src={Check} width={26} height={26} alt="Check" />
                </span>
                <span
                  title={
                    isNotification
                      ? "Выключить уведомления"
                      : "Включить уведомления"
                  }
                  onClick={updateNotification}
                  className={styles.iconButtons}
                >
                  <Image
                    src={isNotification ? NotificationOff : NotificationOn}
                    width={26}
                    height={26}
                    alt="notification"
                  />
                </span>
                <span
                  title="Удалить"
                  onClick={deleteHabit}
                  className={styles.iconButtons}
                >
                  <Image src={TrashBin} width={26} height={26} alt="delete" />
                </span>
              </div>
            ) : (
              <div
                style={{ flexDirection: "row" }}
                className={styles.buttonsWrap}
              >
                <Button onClick={updateHabit} type="primary">
                  Выполнить
                </Button>
                <span
                  title={
                    isNotification
                      ? "Выключить уведомления"
                      : "Включить уведомления"
                  }
                  onClick={updateNotification}
                  className={styles.iconButtons}
                >
                  <Image
                    src={isNotification ? NotificationOff : NotificationOn}
                    width={26}
                    height={26}
                    alt="notification"
                  />
                </span>
                <span
                  title="Удалить"
                  onClick={deleteHabit}
                  className={styles.iconButtons}
                >
                  <Image src={TrashBin} width={26} height={26} alt="delete" />
                </span>
              </div>
            )}
          </span>
        </article>
      </ConfigProvider>
    </>
  );
};
