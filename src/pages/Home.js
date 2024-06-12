import React from 'react';
import { Link } from 'react-router-dom';
import gamesList from '../gamesList';
import styles from './Home.module.css';

const Home = () => {
    // Group games by category
    const categories = gamesList.reduce((acc, game) => {
        if (!acc[game.category]) {
            acc[game.category] = [];
        }
        acc[game.category].push(game);
        return acc;
    }, {});

    return (
        <div className={styles.home}>
            <div className={`${styles.category} beach`}>
                <h2>Matematika</h2>
                <ul>
                    {categories['Matematika'] && categories['Matematika'].map((game, gameIndex) => (
                        <li key={gameIndex}>
                            <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                <span className={styles['app-name']}> {game.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.category} sea`}>
                <h2>Bahasa</h2>
                <ul>
                    {categories['Bahasa'] && categories['Bahasa'].map((game, gameIndex) => (
                        <li key={gameIndex}>
                            <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                <span className={styles['app-name']}> {game.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.category} arctic`}>
                <h2>Logika</h2>
                <ul>
                    {categories['Logika'] && categories['Logika'].map((game, gameIndex) => (
                        <li key={gameIndex}>
                            <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                <span className={styles['app-name']}> {game.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.category} safari`}>
                <h2>IPA</h2>
                <ul>
                    {categories['IPA'] && categories['IPA'].map((game, gameIndex) => (
                        <li key={gameIndex}>
                            <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                <span className={styles['app-name']}> {game.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.category} carnival`}>
                <h2>IPS</h2>
                <ul>
                    {categories['IPS'] && categories['IPS'].map((game, gameIndex) => (
                        <li key={gameIndex}>
                            <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                <span className={styles['app-name']}> {game.name} </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
