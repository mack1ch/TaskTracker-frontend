"use client";

import { PageHeader } from "@/shared/headers/pageHeader";
import { PageLayout } from "@/shared/layout/pageLayout";
import { CreateHabitForm } from "@/widgets /createHabbt-slice/createHabitForm";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  return (
    <>
      <PageLayout>
        <PageHeader title="Создать привычку" />
        <CreateHabitForm />
      </PageLayout>
    </>
  );
}
