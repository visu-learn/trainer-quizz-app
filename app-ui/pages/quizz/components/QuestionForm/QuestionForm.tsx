import { Code } from "@heroui/code";
import { QuestionData } from "../../types";
import { Checkbox } from "@heroui/checkbox";

interface Props {
  data: QuestionData;
}
export const QuestionForm: React.FC<Props> = ({ data }) => {
  const { id, description, possibilities, ...props } = data;

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">🧠 Question</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium text-gray-800">
            Choose the Correct answer
          </h3>

          <div>
            {possibilities.map((possibility) => {
              const { id, description } = possibility;

              return (
                <div key={id} className="flex flex-col gap-2">
                  <p>{description}</p>
                  <Checkbox isSelected={true}>{description}</Checkbox>
                  <p className="text-default-500">Improve UI</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* if to write code */}
        <Code>
          <div>Write your code here</div>
        </Code>
      </section>
    </>
  );
};
