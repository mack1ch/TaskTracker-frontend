"use client";

import { RecommendsView } from "@/features/recommend-slice/recommendsView";
import { PageHeader } from "@/shared/headers/pageHeader";
import { PageLayout } from "@/shared/layout/pageLayout";

export default function MainPage() {
  return (
    <>
      <PageLayout>
        <PageHeader title="Рекомендации" />
        <RecommendsView />
      </PageLayout>
    </>
  );
}
