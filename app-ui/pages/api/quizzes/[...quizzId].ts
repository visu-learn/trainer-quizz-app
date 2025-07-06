import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  id: string[];
  subject: string;
  questions: QuestionData[];
};

export type QuestionData = {
  id: string;
  type: string;
  category: string;
  description: string;
  possibilities: {
    id: string;
    description: string;
    isCorrect: boolean;
  }[];
  answers: string[];
  explanation?: string;
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | null>
) {
  const { quizzId } = req.query;

  console.log(req.query);

  if (quizzId) {
    var _res = require("./data/1.json") as ResponseData;

    res.status(200).json(_res);
  }
  res.status(400).json(null);
}
