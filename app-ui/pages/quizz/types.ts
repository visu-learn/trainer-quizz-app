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
  answers: string[]; // possiblities id
  explanation?: string;
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
};

export type QuizzData = {
  id: string;
  subject: string;
  questions: QuestionData[];
};
