import React from 'react';
import './assets/UnityLayout.css';
import GameInfo from '../components/GameInfo'

const UnityLayout = ({ src, title, author, category, description }) => {
  return (
    <div style={styles.container}>
      <div className="game-frame">
        <iframe
          src={src}
          className="webgl"
          title={title}
        ></iframe>
      </div>
      <GameInfo
        title={title}
        author={author}
        category={category}
        description={description}
      />
    </div>
  );
};

const styles ={
  container: {
      backgroundColor: 'black',
      minHeight: 'calc(100vh - 60px)',
      width: '100%',
      margin: '0',
      top: '60px',
      position: 'absolute',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '0 1rem',
  }
}

export default UnityLayout;
