import React, { useState } from 'react';
import styles from './FlashcardTemplate.module.css'; // Adjust your CSS module path as necessary

const FlashcardTemplate = ({ flashcards }) => {
  // Initialize an array of boolean states for each flashcard
  const [showAnswer, setShowAnswer] = useState(Array(flashcards.length).fill(false));

  const handleCardClick = (index) => {
    // Create a copy of showAnswer state array
    const newShowAnswer = [...showAnswer];
    // Toggle the showAnswer state for the clicked flashcard
    newShowAnswer[index] = !newShowAnswer[index];
    // Update the state with the new array
    setShowAnswer(newShowAnswer);
  };

  return (
    <div className={styles.flashcardContainer}>
      {flashcards.map((flashcard, index) => (
        <div key={index} className={styles.flashcard} onClick={() => handleCardClick(index)}>
          <img src={flashcard.image} alt={flashcard.correctAnswer} />
          {/* Conditionally render the answer based on showAnswer state */}
          {showAnswer[index] ? <p className={styles.answer}>{flashcard.correctAnswer}</p> : <p className={styles.question}>{flashcard.question}</p>}
        </div>
      ))}
    </div>
  );
};

export default FlashcardTemplate;
