import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faMoneyBill, faSmile, faCar, faBicycle, faShip, faPlane, faRocket, faTree, faCloud, faSun, faMoon, faStar, faFish, faDog, faCat, faHeart, faLeaf, faAppleAlt, faAnchor, faBell, faBook, faCrown, faDice, faFeather, faGift, faGem, faGlobe, faGuitar, faHeadphones, faIceCream, faKey, faLaptop, faLightbulb, faMagic, faMusic, faPaintBrush, faPaperPlane, faPizzaSlice, faRobot, faSnowflake, faSpa, faTrophy, faUmbrella, faUtensils, faWineGlass, faWrench } from '@fortawesome/free-solid-svg-icons';

const icons = [
  faCode, faHome, faMoneyBill, faSmile, faCar, faBicycle, faShip, faPlane, faRocket, faTree, faCloud, faSun, faMoon, faStar, faFish, faDog, faCat, faHeart, faLeaf, faAppleAlt, faAnchor, faBell, faBook, faCrown, faDice, faFeather, faGift, faGem, faGlobe, faGuitar, faHeadphones, faIceCream, faKey, faLaptop, faLightbulb, faMagic, faMusic, faPaintBrush, faPaperPlane, faPizzaSlice, faRobot, faSnowflake, faSpa, faTrophy, faUmbrella, faUtensils, faWineGlass, faWrench,
];

function SpotItGame() {
  const [gameIcons, setGameIcons] = useState(shuffleIcons());
  const [feedbackStyles, setFeedbackStyles] = useState({});
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const handleIconClick = (index, icon) => {
    if (icon.correct) {
      const newFeedbackStyles = { ...feedbackStyles };
      gameIcons.forEach((ic, idx) => {
        if (ic.icon === icon.icon) {
          newFeedbackStyles[idx] = { borderColor: '#77DD77', backgroundColor: '#77DD77' };
        }
      });
      setFeedbackStyles(newFeedbackStyles);
      setCorrectAttempts(correctAttempts + 1);
      setTimeout(() => {
        setFeedbackStyles({});
        setGameIcons(shuffleIcons());
      }, 1000);
    } else {
      const newFeedbackStyles = { ...feedbackStyles, [index]: { borderColor: 'red', backgroundColor: 'red' } };
      setFeedbackStyles(newFeedbackStyles);
      setWrongAttempts(wrongAttempts + 1);
      setTimeout(() => {
        setFeedbackStyles({});
      }, 1000);
    }
  };

  return (
    <div style={styles.container} className='beach'>
      <div style={styles.content}>
        <div style={styles.gameGrid}>
          {gameIcons.map((icon, index) => (
            <div
              key={index}
              style={{ ...styles.gameCell, ...feedbackStyles[index] }}
              onClick={() => handleIconClick(index, icon)}
            >
              <FontAwesomeIcon icon={icon.icon} size="3x" />
            </div>
          ))}
        </div>
        <div style={styles.info}>
          <div>Score: {correctAttempts}</div>
        </div>
      </div>
    </div>
  );
}

function shuffleIcons() {
  const chosenIcon = getRandomIcon();
  const otherIconsSet = new Set();
  while (otherIconsSet.size < 14) { // number of items-1 for 4x4 grid
    const randomIcon = getRandomIcon();
    if (randomIcon !== chosenIcon) {
      otherIconsSet.add(randomIcon);
    }
  }
  const otherIcons = Array.from(otherIconsSet);
  otherIcons.push(chosenIcon);
  otherIcons.push(chosenIcon);

  // Shuffle the array to get 16 icons total
  const shuffledIcons = [];
  while (otherIcons.length > 0) {
    const randomIndex = Math.floor(Math.random() * otherIcons.length);
    shuffledIcons.push(otherIcons.splice(randomIndex, 1)[0]);
  }

  return shuffledIcons.map(icon => ({ icon, correct: icon === chosenIcon }));
}

function getRandomIcon() {
  return icons[Math.floor(Math.random() * icons.length)];
}

const styles = {
  container: {
    width: '100%',
    margin: '0',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '0 1rem',
    height: '100%'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#0055ff',
    color: '#FFBD59',
    borderRadius: '1rem',
    margin: '1rem 0',
    padding: '1rem',
  },
  info: {
    fontSize: '2rem',
    marginTop: '1rem',
  },
  gameGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '10px',
  },
  gameCell: {
    backgroundColor: '#FFBD59',
    color: '#0055ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100px',
    border: '1px solid #FFBD59',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, border-color 0.2s, transform 0.1s',
  },
};

export default SpotItGame;
