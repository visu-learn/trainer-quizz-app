import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { QuizzForm } from "./components/QuizzForm/QuizzForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QuestionData } from "./types";

export default function QuizzPage() {
  const router = useRouter();
  const [data, setData] = useState<QuestionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subjectId = router.query?.subjectId as String;

    if (!subjectId) {
      return;
    }
    fetch(`/api/subject/${subjectId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>MyQuickQuizz</h1>
        </div>
      </section>
      <section>
        {isLoading ? (
          <></>
        ) : (
          <>
            {data ? (
              <>
                <QuizzForm questions={data} />
              </>
            ) : (
              <>No Data</>
            )}
          </>
        )}
      </section>
    </DefaultLayout>
  );
}
