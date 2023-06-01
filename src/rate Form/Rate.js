import React, { useState } from 'react';
import './App.css';

const Rate = () => {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      setResults('Please provide a comment explaining why the experience was poor.');
      return;
    }
    const result = {
      score: score,
      comment: comment,
    };
    setResults([...results, result]);
    setScore('10');
    setComment('');
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
            <textarea onChange={handleChangeArea} value={comment}></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      {results.length > 0 && (
        <table className="ResultTable">
          <thead>
            <tr>
              <th>Comment</th>
              <th>Result</th>
              <th>Star</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.comment}</td>
                <td>Form submitted</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Rate;
