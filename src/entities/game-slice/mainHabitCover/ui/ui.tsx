"use client";

import Image from "next/image";
import styles from "./ui.module.scss";
import CoverAsset from "../../../../../public/assets/coverIlluctration.png";
import { ConfigProvider, Progress } from "antd";
import { progressTheme } from "../theme";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/shared/db/db.model";
import { calculateCompletionPercentage } from "../model";
export const MainHabitCover = () => {
  const { width, height } = useWindowSize();
  const habits = useLiveQuery(() => db.habits.toArray());
  const progressPercent = calculateCompletionPercentage(habits!);
  return (
    <>
      <ConfigProvider theme={progressTheme}>
        <section className={styles.cover}>
          <div className={styles.textWrap}>
            <h2 className={styles.h2}>Привет</h2>
            <div className={styles.progressWrap}>
              <p className={styles.p}>
                {progressPercent > 0
                  ? "Ты на шаг ближе к цели!"
                  : "Давай начнем саморазвиваться вместе!"}
              </p>
              <Progress
                percent={progressPercent}
                status="active"
                size={width > 600 ? [300, 20] : [200, 16]}
                strokeColor={{ from: "#FFDC93	", to: "#FFD06B" }}
              />
            </div>
          </div>
          <Image src={CoverAsset} width={185} height={166} alt="Cover" />
        </section>
      </ConfigProvider>
    </>
  );
};
