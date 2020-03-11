import * as React from 'react';
import {
  buttonStyle,
  summaryStat,
  summaryStatContainer,
  summaryStatSpan,
} from '../style';

export const Summary = ({ correct, wrong, handleRestart }: {
  correct: number, wrong: number, handleRestart: (() => void)
}) => {
  const answered: number = correct + wrong;
  const score: number = Math.round(correct / answered * 100) || 0;

  return (
    <div className="summary">
      <h1>SUMMARY</h1>
      <div className="summary-stat-container" style={summaryStatContainer}>
        <p className="summary-stat" style={summaryStat}>
          Correct: <span style={summaryStatSpan}>{correct}</span>
        </p>
        <p className="summary-stat" style={summaryStat}>
          Wrong: <span style={summaryStatSpan}>{wrong}</span>
        </p>
        <p className="summary-stat" style={summaryStat}>
          Questions answered: <span style={summaryStatSpan}>{answered}</span>
        </p>
        <p className="summary-stat" style={summaryStat}>
          Final Score: <span style={summaryStatSpan}>{score}%</span>
        </p>
      </div>
      <button onClick={handleRestart} style={buttonStyle}>Restart Quiz</button>
    </div>
  );
};
