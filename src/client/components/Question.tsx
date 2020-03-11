import * as React from 'react';
import { TQuestion } from '../App';
import { Multiple } from './Multiple';

export const Question = ({ content }: { content: TQuestion }) => {
  let questionComponent = null;
  switch(content.type) {
    case 'multiple':
      questionComponent = (<Multiple content={content} />);
      break;
    case 'boolean':
      questionComponent = (<Multiple content={content} />);
      break;
    case 'text':
      questionComponent = (<Multiple content={content} />);
      break;
    default:
      questionComponent = null;
  }
  return (
    <div className="question">
      {questionComponent}
    </div>
  )}
;
