import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppLayout } from "@/shared/layout/appLayout";
import { StrictMode } from "react";
import { Notifications } from "@/entities/notifications-slice/notifications";
import { ServiceWorker } from "@/shared/serviceworker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskTracker",
  description: "TaskTracker",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AntdRegistry>
          <StrictMode>
            <ServiceWorker />
            <AppLayout>
              <Notifications />
              {children}
            </AppLayout>
          </StrictMode>
        </AntdRegistry>
      </body>
    </html>
  );
}
