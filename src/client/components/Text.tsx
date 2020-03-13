import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import {
  answerContainerStyle,
  buttonStyle,
  h1Style,
  inputStyle
} from '../style';

export const Text = ({ content, handleNext }: {
  content: TQuestion,
  handleNext: THandleQuestionSubmit,
}) => {
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');

  return (
    <div className="question-text">
      <h1 style={h1Style} dangerouslySetInnerHTML={{ __html: content.question }}></h1>
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
      <button
        style={buttonStyle}
        onClick={() => {
          handleNext(selectedAnswer, content.correct_answer);
          updateSelectedAnswer('');
        }}
      >
        Next
      </button>
    </div>
  );
};
