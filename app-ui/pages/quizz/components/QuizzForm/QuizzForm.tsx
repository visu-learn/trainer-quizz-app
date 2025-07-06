import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Code } from "@heroui/code";
import { QuestionData } from "../../types";
import { QuestionForm } from "../QuestionForm/QuestionForm";

interface Props {
  questions: QuestionData[];
}

export const QuizzForm: React.FC<Props> = ({ questions }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">🧠 Question</h2>
        <p className="mt-2 text-gray-600">Quizz - Subject: </p>
      </div>
      <div>
        {questions.map((quest) => {
          return <QuestionForm key={quest.id} data={quest} />;
        })}
      </div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </section>
  );
};
