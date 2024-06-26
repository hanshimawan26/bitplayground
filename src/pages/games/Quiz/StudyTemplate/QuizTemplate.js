import React, { useState, useEffect } from 'react';
import styles from './QuizTemplate.module.css';
import { NavLink } from 'react-router-dom';

// Import sound files
import dingSound from './ding.mp3';
import wrongSound from './wrong.mp3';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const GameTemplate = ({ questions, options }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  const correctSound = new Audio(dingSound);
  const wrongSoundEffect = new Audio(wrongSound);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    let availableQuestions = questions.filter(
      question => !askedQuestions.includes(question)
    );

    if (availableQuestions.length === 0) {
      setShowButtons(true);
      return;
    }

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    const incorrectOptions = options.filter(opt => opt !== randomQuestion.correctAnswer);
    const selectedIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);
    const allOptions = shuffleArray([randomQuestion.correctAnswer, ...selectedIncorrectOptions]);

    setCurrentQuestion(randomQuestion);
    setShuffledOptions(allOptions);
    setBgColor('');
    setResult('');
    setAskedQuestions(prevAskedQuestions => [...prevAskedQuestions, randomQuestion]);
    setShowButtons(false);
  };

  const handleOptionClick = (option) => {
    if (option === currentQuestion.correctAnswer) {
      setBgColor('#E4F0C9');
      setResult('Betul!');
      correctSound.play();
      setTimeout(loadNewQuestion, 1000);
    } else {
      setBgColor('#FFD3C9');
      setResult('Coba lagi!');
      wrongSoundEffect.play();
      setTimeout(() => setBgColor(''), 1000);
    }
  };

  const handleRestart = () => {
    setAskedQuestions([]);
    setShowButtons(false);
    loadNewQuestion();
  };

  if (!currentQuestion && !showButtons) return null;

  const optionColors = ['#E4F0C9', '#FFF7CF', '#FFD3C9', '#BAC3FF']; // Add more colors if needed

  return (
    <div className={styles.gameContainer} style={{ backgroundColor: bgColor }}>
      {currentQuestion && (
        <>
          <div className={styles.imageContainer}>
            <img src={currentQuestion.image} alt="Question" />
          </div>
          <div className={styles.questionOptionContainer}>
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
            <div className={styles.resultContainer}>
              <p>{result}</p>
            </div>
          </div>
        </>
      )}
      {showButtons && (
        <div className={styles.buttonContainer}>
          <span className={styles.menuTitle}>Permainan Selesai</span>
          <div className={styles.menuButtons}>
            <button onClick={handleRestart} className={styles.button}>
              Coba Ulang
            </button>
            <NavLink to="/" className={styles.button}>
              Kembali ke Beranda
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameTemplate;
