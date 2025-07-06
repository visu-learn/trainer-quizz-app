// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
  description: string;
};

const SUBJECTS: Data[] = [
  {
    id: "1",
    name: "JavaScript",
    description:
      "Test your knowledge of JavaScript syntax, functions, and frameworks.",
  },
  {
    id: "2",
    name: "Python",
    description:
      "Questions on Python language features, libraries, and data structures.",
  },
  {
    id: "3",
    name: "Java",
    description:
      "Quiz your skills on Java basics, object-oriented programming, and Java APIs.",
  },
  {
    id: "4",
    name: "C++",
    description:
      "Explore topics like pointers, memory management, and object-oriented principles in C++.",
  },
  {
    id: "5",
    name: "Ruby",
    description:
      "Test your knowledge of Ruby's syntax, Rails framework, and gems.",
  },
  {
    id: "6",
    name: "HTML & CSS",
    description:
      "Questions on web markup, styling, responsive design, and layout techniques.",
  },
  {
    id: "7",
    name: "SQL",
    description:
      "Test your knowledge of database queries, normalization, and optimization.",
  },
  {
    id: "8",
    name: "React",
    description:
      "Questions on building modern web applications with React, hooks, and state management.",
  },
  {
    id: "9",
    name: "Algorithms & Data Structures",
    description:
      "Evaluate your understanding of sorting algorithms, trees, graphs, and more.",
  },
  {
    id: "10",
    name: "DevOps",
    description:
      "Quiz your knowledge of automation, continuous integration, and deployment pipelines.",
  },
];

export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(SUBJECTS);
}
