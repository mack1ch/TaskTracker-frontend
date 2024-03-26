import { MainStatsCover } from "@/entities/stats-slice/mainStatsCover";
import { PageHeader } from "@/shared/headers/pageHeader";
import { PageLayout } from "@/shared/layout/pageLayout";

export default function MainPage() {
  return (
    <>
      <PageLayout>
        <PageHeader title="Статистика" />
        <MainStatsCover />
      </PageLayout>
    </>
  );
}
