import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gamesList from '../gamesList';
import styles from './Home.module.css';

const Home = () => {
    const [filter, setFilter] = useState({ level: '', type: '', subject: '' });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    // Filter and group games by subject and level
    const filteredGames = gamesList.filter(game =>
        (filter.level === '' || game.level === filter.level) &&
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
                    Level:
                    <select name="level" value={filter.level} onChange={handleFilterChange} className={styles.select}>
                        <option value="">All</option>
                        <option value="Fase A">Fase A</option>
                        <option value="Fase B">Fase B</option>
                        <option value="Fase C">Fase C</option>
                        <option value="Fase D">Fase D</option>
                        <option value="Fase E">Fase E</option>
                        <option value="Fase F">Fase F</option>
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
