// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
};

const SUBJECTS: Data[] = [
  {
    id: "java-primitives",
    name: "Java Primitives",
  },
  {
    id: "java-error-handling",
    name: "Java Error Handling",
  },
  {
    id: "java-concurrency",
    name: "Java Concurrency",
  },
];

export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(SUBJECTS);
}
