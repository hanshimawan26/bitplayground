import React, { useState, useEffect } from 'react';
import './MemorySequence.css';

const MemorySequenceGame = () => {
  const [sequences, setSequences] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(0);
  const [status, setStatus] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const colors = ["red", "orange", "yellow", "light-green", "green", "cyan", "blue", "purple", "pink"];

  useEffect(() => {
    if (gameStarted && userSequence.length === sequences.length) {
      if (userSequence.every((color, index) => color === sequences[index])) {
        nextLevel();
      } else {
        gameOver();
      }
    }
  }, [userSequence]);

  const startGame = () => {
    setLevel(0);
    setSequences([]);
    setUserSequence([]);
    setStatus('');
    setGameStarted(true);
    nextLevel();
  };

  const nextLevel = () => {
    setUserSequence([]);
    setLevel((prevLevel) => {
      const newLevel = prevLevel + 1;
      setStatus(`Level ${newLevel}`);
      return newLevel;
    });
    setSequences((prevSequences) => [...prevSequences, getRandomColor()]);
  };

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const playSequence = () => {
    sequences.forEach((color, index) => {
      setTimeout(() => {
        document.getElementById(color).classList.add('active');
        setTimeout(() => document.getElementById(color).classList.remove('active'), 500);
      }, (index + 1) * 500);
    });
  };

  const handleUserClick = (color) => {
    setUserSequence((prevSequence) => [...prevSequence, color]);
    document.getElementById(color).classList.add('active');
    setTimeout(() => document.getElementById(color).classList.remove('active'), 200);
  };

  useEffect(() => {
    if (gameStarted) {
      playSequence();
    }
  }, [sequences]);

  const gameOver = () => {
    setStatus('Game Over');
    setGameStarted(false);
  };

  return (
    <div className="game-container">
      <div id="game">
        <p id="status">{status}</p>
        <div id="color-buttons">
          {colors.map((color) => (
            <div
              key={color}
              className="color-button"
              id={color}
              onClick={() => gameStarted && handleUserClick(color)}
            ></div>
          ))}
        </div>
        {!gameStarted && <button id="start-button" onClick={startGame}>Start Game</button>}
      </div>
    </div>
  );
};

export default MemorySequenceGame;
