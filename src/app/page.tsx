import { MainHabitCover } from "@/entities/game-slice/mainHabitCover";
import { HabitTable } from "@/features/habitView-slice/habitTable";
import { PageHeader } from "@/shared/headers/pageHeader";
import { PageLayout } from "@/shared/layout/pageLayout";

export default function MainPage() {
  return (
    <>
      <PageLayout>
        <MainHabitCover />
        <PageHeader title="Мои привычки" />
        <HabitTable />
      </PageLayout>
    </>
  );
}
