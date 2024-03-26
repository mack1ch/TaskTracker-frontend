import { PageHeader } from "@/shared/headers/pageHeader";
import { PageLayout } from "@/shared/layout/pageLayout";
import { Developers } from "@/widgets /developers-slice/developers";

export default function MainPage() {
  return (
    <>
      <PageLayout>
        <PageHeader title="Меню разработчика" />
        <Developers />
      </PageLayout>
    </>
  );
}
