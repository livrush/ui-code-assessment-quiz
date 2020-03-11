import * as React from 'react';
import { TQuestion } from '../App';

export const Multiple = ({ content }: { content: TQuestion }) => (
  <div className="question-multiple">
    <p>
      {content.question}
    </p>
  </div>
);
