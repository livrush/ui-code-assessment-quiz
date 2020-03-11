import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import { answerContainerStyle, buttonStyle, inputStyle } from '../style';

export const Text = ({ content, handleNext }: {
  content: TQuestion,
  handleNext: THandleQuestionSubmit,
}) => {
  const answers: string[] = [content.correct_answer].concat(content.incorrect_answers);
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');

  return (
    <div className="question-text">
      <h2 dangerouslySetInnerHTML={{ __html: content.question }}></h2>
      <div className="text-answer-container" style={answerContainerStyle}>
        <input className="text-answer-input" style={inputStyle} type="text" name="" />
      </div>
      <button style={buttonStyle} onClick={() => handleNext(selectedAnswer, content.correct_answer)}>Next</button>
    </div>
  );
}