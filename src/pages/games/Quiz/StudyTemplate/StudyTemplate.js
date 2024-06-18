import React, { useState } from 'react';
import QuizTemplate from './QuizTemplate';
import FlashcardTemplate from './FlashcardTemplate';
import styles from './StudyTemplate.module.css'

const StudyTemplate = ({ questions, options }) => {
  const [mode, setMode] = useState('quiz'); // Default mode is quiz

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <label>Pilih Mode:</label>
        <select id="mode" value={mode} onChange={handleModeChange}>
          <option value="quiz">Quiz Mode</option>
          <option value="flashcard">Flashcard Mode</option>
        </select>
      </div>
      
      {mode === 'quiz' ? (
        <QuizTemplate questions={questions} options={options} />
      ) : (
        <FlashcardTemplate flashcards={questions} />
      )}
    </div>
  );
};

export default StudyTemplate;
