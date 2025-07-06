import { Button } from "@heroui/button";
import { useCallback, useMemo, useState } from "react";

import { QuestionData } from "../../types";
import { QuestionForm } from "../QuestionForm/QuestionForm";

interface Props {
  questions: QuestionData[];
}

export const QuizzForm: React.FC<Props> = ({ questions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState<{ [id: string]: string[] }>({});

  const currentQuestion = useMemo(() => {
    if (currentPage < 0 || currentPage >= questions.length) {
      return questions[0];
    }

    return questions[currentPage];
  }, [currentPage, questions]);

  const onAnswer = useCallback(
    (questionId: string) => (answerIds: string[]) => {
      setAnswers((prev) => ({ ...prev, [questionId]: answerIds }));
    },
    []
  );

  return (
    <section className="max-w-4xl mx-auto px-6  space-y-8">
      <QuestionForm data={currentQuestion} />

      <div className="flex justify-between items-center mt-8">
        <Button
          color="primary"
          size="md"
          variant="flat"
          className="text-white"
          disabled={currentPage === 0}
          onPress={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          color="primary"
          size="md"
          variant="flat"
          disabled={currentPage >= questions.length - 1}
          className="text-white"
          onPress={() =>
            setCurrentPage((prev) =>
              prev < questions.length - 1 ? prev + 1 : prev
            )
          }
        >
          Next
        </Button>
      </div>
    </section>
  );
};
