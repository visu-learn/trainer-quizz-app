import { Code } from "@heroui/code";
import { QuestionData } from "../../types";
import { Checkbox } from "@heroui/checkbox";
import { Card, CardBody } from "@heroui/card";
import { useCallback, useEffect } from "react";

interface Props {
  data: QuestionData;
  answers: { [id: string]: string[] };
  onAnswer: (answerId: string) => void;
}
export const QuestionForm: React.FC<Props> = ({ data, answers, onAnswer }) => {
  const { id, description, possibilities, ...props } = data;

  const isSelected = useCallback(
    (possibilityId: string) => {
      if (data.id in answers) {
        return answers[data.id].includes(possibilityId);
      }

      return false;
    },
    [answers]
  );

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleChooseAnswer = useCallback(
    (id: string) => () => {
      console.log(answers + "click " + id + " " + data.id);
      onAnswer(id);
    },
    [answers]
  );

  return (
    <>
      <section className="space-y-8">
        <div className="bg-gray-100 text-white  rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">🧠 Question</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-medium text-gray-800">
            Choose the Correct Answer
          </h3>
          <div className="flex-row items-center gap-7">
            {possibilities.map((possibility) => (
              <Card key={possibility.id} className="mb-2">
                <CardBody>
                  <div className="flex flex-col gap-2">
                    <Checkbox
                      isSelected={isSelected(possibility.id)}
                      onChange={handleChooseAnswer(possibility.id)}
                    >
                      If title
                    </Checkbox>
                    <p className="text-default-500">
                      {possibility.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
