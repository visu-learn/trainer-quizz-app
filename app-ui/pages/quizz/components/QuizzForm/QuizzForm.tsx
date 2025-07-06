import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Code } from "@heroui/code";

export const QuizzForm = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">🧠 Question</h2>
        <p className="mt-2 text-gray-600">
          Enter your question or description here.
        </p>
      </div>
      {/* Answer Options */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">
          Choose the Correct answer
        </h3>

        <div className="flex flex-col gap-2">
          <Checkbox isSelected={true}>Subscribe (controlled)</Checkbox>
          <p className="text-default-500">Selected:</p>
        </div>
        <div className="flex flex-col gap-2">
          <Checkbox isSelected={true}>Subscribe (controlled)</Checkbox>
          <p className="text-default-500">Selected:</p>
        </div>
        <div className="flex flex-col gap-2">
          <Checkbox isSelected={true}>Subscribe (controlled)</Checkbox>
          <p className="text-default-500">Selected:</p>
        </div>
        <div className="flex flex-col gap-2">
          <Checkbox isSelected={true}>Subscribe (controlled)</Checkbox>
          <p className="text-default-500">Selected:</p>
        </div>
      </div>

      {/* if to write code */}
      <Code>
        <div>Write your code here</div>
      </Code>

      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </section>
  );
};
