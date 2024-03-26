import { ReactNode } from "react";
import styles from "./ui.module.scss";
export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.pageLayout}>{children}</section>
    </>
  );
};
