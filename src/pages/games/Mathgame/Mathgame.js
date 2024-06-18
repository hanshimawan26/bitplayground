import React, { useState, useEffect } from 'react';
import styles from './Mathgame.module.css';

const MathGameTemplate = ({ mode, modeLabel }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [range, setRange] = useState('ones');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [borderColor, setBorderColor] = useState('');

  const generateNumber = (range) => {
    switch (range) {
      case 'ones':
        return Math.floor(Math.random() * 10) + 1; // avoid zero
      case 'tenths':
        return Math.floor(Math.random() * 100) + 1;
      case 'hundreds':
        return Math.floor(Math.random() * 1000) + 1;
      case 'thousands':
        return Math.floor(Math.random() * 10000) + 1;
      default:
        return 1;
    }
  };

  const generateProblem = () => {
    let num1, num2;
    if (mode === 'division') {
      num2 = generateNumber(range);
      num1 = num2 * generateNumber(range);
    } else {
      num1 = generateNumber(range);
      num2 = generateNumber(range);
    }

    setNum1(num1);
    setNum2(num2);

    switch (mode) {
      case 'addition':
        setCorrectAnswer(num1 + num2);
        break;
      case 'subtraction':
        setCorrectAnswer(num1 - num2);
        break;
      case 'multiplication':
        setCorrectAnswer(num1 * num2);
        break;
      case 'division':
        setCorrectAnswer(num1 / num2);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(answer) === correctAnswer) {
      setScore(score + 1);
      setMessage('Benar!');
      setBorderColor('lime');
    } else {
      setMessage(`Salah, jawaban yang benar adalah ${correctAnswer}`);
      setBorderColor('red');
    }
    setIsAnswered(true);
    setAnswer('');
  };

  const handleNext = (e) => {
    e.preventDefault();
    generateProblem();
    setMessage('');
    setIsAnswered(false);
    setBorderColor('');
  };

  const handleRangeChange = (e) => {
    setRange(e.target.value);
    generateProblem();
  };

  useEffect(() => {
    generateProblem();
  }, [range]);

  return (
    <div className={styles.container}>
      <h1>{modeLabel}</h1>
      <div className={styles.setting}>
        <label>
          Rentang:
          <select className={styles.select} value={range} onChange={handleRangeChange}>
            <option value="ones">Satuan</option>
            <option value="tenths">Puluhan</option>
            <option value="hundreds">Ratusan</option>
            <option value="thousands">Ribuan</option>
          </select>
        </label>
      </div>
      <div className={styles.question} style={{ borderColor: borderColor }}>
        <h2>{num1} {mode === 'addition' ? '+' : mode === 'subtraction' ? '-' : mode === 'multiplication' ? '×' : '÷'} {num2} =</h2>
        <form onSubmit={isAnswered ? handleNext : handleSubmit}>
          <input
            className={styles.input}
            type="number"
            step="any"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            disabled={isAnswered}
          />
          <button className={styles.button} type="submit">
            {isAnswered ? 'Berikut' : 'Jawab'}
          </button>
        </form>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default MathGameTemplate;
