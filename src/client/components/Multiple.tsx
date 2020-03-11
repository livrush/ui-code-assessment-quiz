import * as React from 'react';
import { TQuestion } from '../App';

export const Multiple = ({ content }: { content: TQuestion }) => {
  const answers = [content.correct_answer].concat(content.incorrect_answers);
  return (
    <div className="question-multiple">
      <h2>{content.question}</h2>
      {
        answers.map((answer, index) => (
          <div className="check" key={answer.slice(0, 5)}>
            <input type="radio"/>
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </div>
        ))
      }
      <button>Next</button>
    </div>
  );
}