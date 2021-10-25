import React from 'react';

const ValidationError = ({ messages, message }) => {
  return (
    <div className="validation--errors">
      <h3>Validation Errors</h3>
      <ul>{messages && messages.map((message, i) => <li key={i}>{message}</li>)}</ul>
      <ul>{message && <li>{message}</li>}</ul>
    </div>
  );
};
export default ValidationError;
