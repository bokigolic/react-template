import React, { useState } from 'react';
import './App.css';

const Rate = () => {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      setResult('Please provide a comment explaining why the experience was poor.');
      return;
    }
    setResult(`Form submitted.<br />Comment: ${comment}<br />Score: ${score}`);
    console.log('Form submitted');
    console.log('Score:', score);
  };

  const handleChangeArea = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score} &#9733;</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Comment: </label>
            <textarea onChange={handleChangeArea}></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <div className="Result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
};

export default Rate;
