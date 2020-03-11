import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import { buttonStyle } from '../style';

export const Multiple = ({ content, handleNext }: {
  content: TQuestion,
  handleNext: THandleQuestionSubmit,
}) => {
  const answers: string[] = [content.correct_answer].concat(content.incorrect_answers);
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');

  return (
    <div className="question-multiple">
      <h2>{content.question}</h2>
      {
        answers.map((answer, index) => (
          <div className="check" key={answer}>
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
      <button style={buttonStyle} onClick={() => handleNext(selectedAnswer, content.correct_answer)}>Next</button>
    </div>
  );
}