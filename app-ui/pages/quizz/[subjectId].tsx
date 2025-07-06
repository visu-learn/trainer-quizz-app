import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { QuizzForm } from "./components/QuizzForm/QuizzForm";

export default function QuizzPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>MyQuickQuizz</h1>
        </div>
      </section>
      <section>
        <QuizzForm />
      </section>
    </DefaultLayout>
  );
}
