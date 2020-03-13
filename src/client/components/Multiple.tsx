import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import {
  answerContainerStyle,
  buttonStyle,
  errorMessage,
  h1Style,
  multipleAnswerStyle,
  radioStyle
} from '../style';

export const Multiple = ({ question, answers, correct_answer, handleNext }: {
  question: string,
  answers: string[],
  correct_answer: string,
  handleNext: THandleQuestionSubmit,
}) => {
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');
  const [showValidationError, updateShowValidationError] = React.useState(false);

  return (
    <div className="question-multiple">
      <h1 style={h1Style} dangerouslySetInnerHTML={{ __html: question }}></h1>
      <div className="multiple-answer-container" style={answerContainerStyle}>
        {
          answers.map((answer) => (
            <div className="multiple-answer" style={multipleAnswerStyle} key={answer}>
              <input
                checked={answer === selectedAnswer}
                name={answer}
                onChange={() => updateSelectedAnswer(answer)}
                style={radioStyle}
                type="radio"
                value={answer}
              />
              <label htmlFor={answer} dangerouslySetInnerHTML={{__html: answer}}></label>
            </div>
          ))
        }
      </div>
      {
        showValidationError ?
          (<p className="error-message" style={errorMessage}>Please select an answer</p>) :
        null
      }
      <button
        style={buttonStyle}
        onClick={() => {
          if (selectedAnswer) {
            handleNext(selectedAnswer, correct_answer);
            updateShowValidationError(false);
            updateSelectedAnswer('');
          } else {
            updateShowValidationError(true);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}