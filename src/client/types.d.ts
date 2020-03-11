export type TQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type TAppState = {
  correct: number;
  wrong: number;
  questions: TQuestion[];
  currentQuestion: TQuestion;
  completedQuestions: Array<TQuestion?>;
}

export type THandleQuestionSubmit = ((answer: string, correctAnswer: string) => void)
