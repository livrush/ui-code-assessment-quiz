import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import {
  answerContainerStyle,
  buttonStyle,
  errorMessage,
  h1Style,
  inputStyle
} from '../style';

export const Text = ({ question, correct_answer, handleNext }: {
  question: string,
  correct_answer: string,
  handleNext: THandleQuestionSubmit,
}) => {
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');
  const [showValidationError, updateShowValidationError] = React.useState(false);

  return (
    <div className="question-text">
      <h1 style={h1Style} dangerouslySetInnerHTML={{ __html: question }}></h1>
      <div className="text-answer-container" style={answerContainerStyle}>
        <input
          className="text-answer-input"
          name="text answer"
          onChange={(e) => updateSelectedAnswer(e.currentTarget.value)}
          style={inputStyle}
          type="text"
          value={selectedAnswer}
        />
      </div>
      {
        showValidationError ?
          (<p className="error-message" style={errorMessage}>Please enter an answer</p>) :
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
};
