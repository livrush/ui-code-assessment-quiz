import CSS from 'csstype';

export const buttonStyle: CSS.Properties = {
  background: '#1D70DD',
  border: 'none',
  color: '#FFF',
  fontSize: '1rem',
  padding: '.5rem 1rem',
};

export const h2Style: CSS.Properties = {
  fontWeight: 400,
}

export const answerContainerStyle: CSS.Properties = {
  margin: '2rem 0',
};

export const multipleAnswerStyle: CSS.Properties = {
  display: 'flex',
  padding: '0.5rem 0',
};

export const radioStyle: CSS.Properties = {
  margin: 0,
  marginRight: '0.75rem',
};

export const inputStyle: CSS.Properties = {
  border: '#E6E6E6 1px solid',
  borderRadius: '2px',
  fontSize: '1rem',
  margin: 0,
  padding: '0.5rem',
};

export const summaryStatContainer: CSS.Properties = answerContainerStyle;

export const summaryStat: CSS.Properties = {
  marginBlockEnd: '0.5rem',
  marginBlockStart: '0.5rem',
};

export const summaryStatSpan: CSS.Properties = {
  fontWeight: 'bold',
};
