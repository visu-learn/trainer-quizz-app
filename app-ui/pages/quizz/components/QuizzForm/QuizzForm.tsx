import { Button } from "@heroui/button";
import { useCallback, useMemo, useState } from "react";

import { QuestionData } from "../../types";
import { QuestionForm } from "../QuestionForm/QuestionForm";

interface Props {
  quizzId: string;
  questions: QuestionData[];
}

export const QuizzForm: React.FC<Props> = ({ quizzId, questions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState<{ [id: string]: string[] }>({});

  const onAnswer = useCallback(
    (questionId: string) => (answerId: string) => {
      setAnswers((prev) => {
        let newVal: string[] = [];

        if (questionId in prev) {
          const oldValues = prev[questionId];

          if (oldValues.includes(answerId)) {
            newVal = oldValues.filter((ans) => ans != answerId);
          } else {
            newVal = [...oldValues, answerId];
          }

          return { ...prev, [questionId]: newVal };
        }

        return { ...prev, [questionId]: [answerId] };
      });
    },
    []
  );

  const questionForms = useMemo(() => {
    return questions.map((question) => {
      return (
        <QuestionForm
          key={question.id}
          answers={answers}
          data={question}
          onAnswer={onAnswer(question.id)}
        />
      );
    });
  }, [answers, questions, onAnswer]);

  const handleSubmit = useCallback(() => {
    localStorage.setItem(quizzId, JSON.stringify(answers));
  }, [answers]);

  return (
    <section className="max-w-4xl mx-auto px-6  space-y-8">
      {questionForms.at(currentPage)}
      <div className="flex justify-between items-center mt-8">
        <Button
          className="text-white"
          color="primary"
          disabled={currentPage === 0}
          size="md"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          className="text-white"
          color="primary"
          disabled={currentPage >= questions.length - 1}
          size="md"
          variant="flat"
          onPress={() =>
            setCurrentPage((prev) =>
              prev < questions.length - 1 ? prev + 1 : prev
            )
          }
        >
          Next
        </Button>
        {currentPage == questions.length - 1 && (
          <Button color="success" onPress={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </section>
  );
};
