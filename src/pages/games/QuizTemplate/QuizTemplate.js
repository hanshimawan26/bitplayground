import React, { useState, useEffect } from 'react';
import styles from './QuizTemplate.module.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const GameTemplate = ({ questions, options }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const incorrectOptions = options.filter(opt => opt !== randomQuestion.correctAnswer);
    const selectedIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);
    const allOptions = shuffleArray([randomQuestion.correctAnswer, ...selectedIncorrectOptions]);

    setCurrentQuestion(randomQuestion);
    setShuffledOptions(allOptions);
    setBgColor('');
    setResult('');
  };

  const handleOptionClick = (option) => {
    if (option === currentQuestion.correctAnswer) {
      setBgColor('green');
      setResult('Correct!');
      setTimeout(loadNewQuestion, 1000);
    } else {
      setBgColor('#800000');
      setResult('Try Again!');
      setTimeout(() => setBgColor(''), 1000);
    }
  };

  if (!currentQuestion) return null;

  const optionColors = ['#D0F4DE', '#E4C1F9', '#FCF6BD', '#F2E5D3']; // Add more colors if needed

  return (
    <div className={styles.gameContainer}>
      <div className={styles.imageContainer}>
        <img src={currentQuestion.image} alt="Question" />
      </div>
      <div className={styles.questionOptionContainer} style={{ backgroundColor: bgColor }}>
        <div className={styles.questionContainer}>
          <h2>{currentQuestion.question}</h2>
        </div>
        <div className={styles.optionsContainer}>
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              style={{ backgroundColor: optionColors[index % optionColors.length] }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTemplate;
