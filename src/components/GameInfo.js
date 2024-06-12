import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React from 'react';

const GameInfo = ({ title, author, category, description }) => {
  const styles = {
    gameInfo: {
      width: '100%',
      padding: '0 0.5rem',
      color: 'white',
      borderRadius: '1rem',
      maxWidth: '900px',
    },
    gameTitle: {
      fontSize: '1.5rem',
      marginTop: '1rem',
      marginBottom: '0.5rem',
      marginRight: '1rem',
      display: 'inline-block',
    },
    gameCategory: {
      fontSize: '1rem',
      padding: '0.2rem 0.5rem',
      borderRadius: '1rem',
      backgroundColor: '#3A86FF',
      color: 'white',
      width: 'fit-content',
      marginTop: '1rem',
      marginBottom: '0.5rem',
      marginRight: '1rem',
      display: 'inline-block',
    },
    gameAuthor: {
      opacity: '0.8',
      margin: '0',
    },
  };

  return (
    <div style={styles.gameInfo}>
      <h3 style={ styles.gameTitle }>{title}</h3>
      <h3 style={styles.gameCategory}>{category}</h3>
      <h4 style={ styles.gameAuthor }>by {author}</h4>
      <p>{description}</p>
    </div>
  );
};

export default GameInfo;
