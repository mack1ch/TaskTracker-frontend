"use client";

import { ReactNode } from "react";

import { Layout, Menu } from "antd";
import styles from "./ui.module.scss";
import Image from "next/image";
import ProductLogo from "../../../../../public/icons/productLogo.svg";
import Link from "next/link";
import { DHeaderItems } from "../data";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

const { Content, Sider } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Layout style={{ minHeight: "100%" }}>
        <Sider theme="light" breakpoint="lg" collapsedWidth="0">
          <Link href="/" className={styles.productLogo}>
            <Image src={ProductLogo} width={42} height={42} alt="Planner" />
            <span className={styles.logo}>Planner</span>
          </Link>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={DHeaderItems}
          />
        </Sider>
        <Layout>
          <Content style={{ padding: "24px 32px" }}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
