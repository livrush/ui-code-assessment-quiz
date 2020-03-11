import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import { buttonStyle, answerContainerStyle, multipleAnswerStyle, radioStyle } from '../style';

export const Multiple = ({ content, handleNext }: {
  content: TQuestion,
  handleNext: THandleQuestionSubmit,
}) => {
  const answers: string[] = [content.correct_answer].concat(content.incorrect_answers);
  const [selectedAnswer, updateSelectedAnswer] = React.useState('');

  return (
    <div className="question-multiple">
      <h2 dangerouslySetInnerHTML={{ __html: content.question }}></h2>
      <div className="multiple-answer-container" style={answerContainerStyle}>
        {
          answers.map((answer) => (
            <div className="multiple-answer" style={multipleAnswerStyle} key={answer}>
              <input
                checked={answer === selectedAnswer}
                name={answer}
                onChange={() => updateSelectedAnswer(answer)}
                type="radio"
                style={radioStyle}
                value={answer}
              />
              <label htmlFor={answer} dangerouslySetInnerHTML={{__html: answer}}></label>
            </div>
          ))
        }
      </div>
      <button style={buttonStyle} onClick={() => handleNext(selectedAnswer, content.correct_answer)}>Next</button>
    </div>
  );
}