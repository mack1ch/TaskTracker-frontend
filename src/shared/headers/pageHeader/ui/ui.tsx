"use client";

import Image from "next/image";
import styles from "./ui.module.scss";
import ArrowLeft from "../../../../../public/icons/arrowLeft.svg";
import { Button } from "antd";
import Link from "next/link";
import { ReactNode } from "react";

export const PageHeader = ({
  title,
  onBack,
  rightButton,
}: {
  title?: string;
  onBack?: () => void;
  rightButton?: ReactNode;
}) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.section}>
          {onBack && (
            <Image
              style={{ cursor: "pointer" }}
              src={ArrowLeft}
              width={24}
              onClick={onBack}
              height={24}
              alt="GoBack"
            />
          )}
          <h1 className={styles.h1}>{title}</h1>
        </section>
        <section>{rightButton}</section>
      </header>
    </>
  );
};
