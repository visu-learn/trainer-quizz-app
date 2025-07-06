import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { useEffect, useState } from "react";

type Data = {
  id: string;
  name: string;
  description: string;
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
      <section className="flex flex-col  items-center justify-center gap-6 py-8 md:py-12 ">
        <div className="text-center w-full">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            My Quick Quizz
          </h1>
          {isLoading ? (
            <p className="text-xl text-gray-500">Loading...</p>
          ) : (
            <div className="flex flex-wrap  justify-center gap-6 py-4 mx-auto  overflow-x-auto overflow-y-auto max-h-[50%]">
              {data?.map(({ id, name, description }) => (
                <div
                  key={id}
                  className="w-full sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col p-6">
                    <h2 className="text-xl font-medium text-gray-800 mb-3">
                      {name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                    <Button
                      as={Link}
                      color="primary"
                      href={`/quizz/${id}`}
                      className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition"
                    >
                      Take Quiz
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
