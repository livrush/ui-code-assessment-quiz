import * as React from 'react';
import { THandleQuestionSubmit, TQuestion } from '../types';
import { Multiple } from './Multiple';
import { Text } from './Text';
import {
  normalizeBooleanQuestion,
  normalizeMultipleQuestion,
  normalizeTextQuestion,
} from '../../utils';

export const Question = ({ content, handleNext }: {
  content: TQuestion,
  handleNext: THandleQuestionSubmit,
}) => {
  let questionComponent = null;
  switch(content.type) {
    case 'multiple':
      questionComponent = (<Multiple {...normalizeMultipleQuestion(content)} handleNext={handleNext} />);
      break;
    case 'boolean':
      questionComponent = (<Multiple {...normalizeBooleanQuestion(content)} handleNext={handleNext} />);
      break;
    case 'text':
      questionComponent = (<Text {...normalizeTextQuestion(content)} handleNext={handleNext} />);
      break;
    default:
      questionComponent = null;
  }

  return (
    <div className="question">
      {questionComponent}
    </div>
  );
};
