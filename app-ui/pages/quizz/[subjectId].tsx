import DefaultLayout from "@/layouts/default";
import { QuizzForm } from "./components/QuizzForm/QuizzForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QuestionData, QuizzData } from "./types";
import { Chip } from "@heroui/chip";

export default function QuizzPage() {
  const router = useRouter();
  const [data, setData] = useState<QuizzData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subjectId = router.query?.subjectId as String;

    if (!subjectId) {
      return;
    }
    fetch(`/api/quizzes/${subjectId}`)
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
          <h1 className="text-white text-lg text-bold">
            My Quick Quizz -{" "}
            <Chip color="primary">{data?.subject ?? "none"}</Chip>
          </h1>
        </div>
      </section>
      <section>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            {data ? (
              <>
                <QuizzForm quizzId={data.id} questions={data.questions} />
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
