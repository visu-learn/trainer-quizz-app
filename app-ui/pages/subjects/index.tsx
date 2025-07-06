import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

type Data = {
  name: string;
  id: string;
};

export default function QuizzPage() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("api/quiz-subjects")
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
          {isLoading ? (
            <p>is Loading</p>
          ) : (
            <>
              {data?.map(({ name, id }) => {
                return (
                  <Card key={id}>
                    <CardBody>
                      <p>{name}</p>
                      <Link href={`/quizz/${id}`}> gO TO</Link>
                    </CardBody>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
