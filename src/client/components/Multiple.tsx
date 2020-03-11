import * as React from 'react';
import { TQuestion } from '../types';

export const Multiple = ({ content }: { content: TQuestion }) => {
  const answers: string[] = [content.correct_answer].concat(content.incorrect_answers);
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');

  return (
    <div className="question-multiple">
      <h2>{content.question}</h2>
      {
        answers.map((answer, index) => (
          <div className="check" key={answer.slice(0, 5)}>
            <input
              id={`answer-${index}`}
              type="radio"
              value={answer}
              checked={answer === selectedAnswer}
              onChange={() => updateSelectedAnswer(answer)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </div>
        ))
      }
      <button>Next</button>
    </div>
  );
}