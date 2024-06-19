import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gamesList from '../gamesList';
import styles from './Home.module.css';

const Home = () => {
    const [filter, setFilter] = useState({ fase: '', type: '', subject: '' });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    // Filter and group games by subject and fase
    const filteredGames = gamesList.filter(game =>
        (filter.fase === '' || game.fase === filter.fase) &&
        (filter.type === '' || game.type === filter.type) &&
        (filter.subject === '' || game.subject === filter.subject)
    );

    const categories = filteredGames.reduce((acc, game) => {
        if (!acc[game.category]) {
            acc[game.category] = [];
        }
        acc[game.category].push(game);
        return acc;
    }, {});

    return (
        <div className={styles.home}>
            <div className={styles.filters}>
                <label className={styles.label}>
                    Fase:
                    <select name="fase" value={filter.fase} onChange={handleFilterChange} className={styles.select}>
                        <option value="">All</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                </label>
                <label className={styles.label}>
                    Type:
                    <select name="type" value={filter.type} onChange={handleFilterChange} className={styles.select}>
                        <option value="">All</option>
                        <option value="game">Game</option>
                        <option value="video">Video</option>
                        <option value="book">Book</option>
                        <option value="poster">Poster</option>
                        <option value="infographic">Infographic</option>
                    </select>
                </label>
                <label className={styles.label}>
                    Subject:
                    <select name="subject" value={filter.subject} onChange={handleFilterChange} className={styles.select}>
                        <option value="">All</option>
                        <option value="Logic Games">Logic Games</option>
                        <option value="Games for Learning">Games for Learning</option>
                    </select>
                </label>
            </div>

            {Object.keys(categories).map((category) => (
                <div key={category} className={styles.category}>
                    <h2>{category}</h2>
                    <ul>
                        {categories[category].map((game, gameIndex) => (
                            <li key={gameIndex}>
                                <Link to={game.path} state={{ title: game.name }} className={styles['app-button']}>
                                    <img src={game.icon} alt={`${game.name} icon`} className={styles.icon} />
                                    <span className={styles['app-name']}>{game.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Home;
