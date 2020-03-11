import * as React from 'react';
import { buttonStyle } from '../style';

export const Summary = ({ correct, wrong, handleRestart }: {
  correct: number, wrong: number, handleRestart: (() => void)
}) => {
  const answered: number = correct + wrong;
  const score: number = Math.round(correct / answered * 100) || 0;

  return (
    <div className="summary">
      <h1>SUMMARY</h1>
      <p>Correct: <span style={{fontWeight: 'bold'}}>{correct}</span></p>
      <p>Wrong: <span style={{fontWeight: 'bold'}}>{wrong}</span></p>
      <p>Questions answered: <span style={{fontWeight: 'bold'}}>{answered}</span></p>
      <p>Final Score: <span style={{fontWeight: 'bold'}}>{score}%</span></p>
      <button onClick={handleRestart} style={buttonStyle}>Restart Quiz</button>
    </div>
  );
};
