import React, { useState, useEffect } from 'react';

const animals = [
    { name: 'Gajah', description: 'Hewan darat terbesar', image: 'url_to_gajah_image' },
    { name: 'Harimau', description: 'Hewan karnivora dengan belang di tubuhnya', image: 'url_to_harimau_image' },
    { name: 'Kuda', description: 'Hewan yang sering digunakan untuk transportasi', image: 'url_to_kuda_image' },
    { name: 'Kucing', description: 'Hewan peliharaan yang lucu dan suka mengeong', image: 'url_to_kucing_image' },
    { name: 'Burung', description: 'Hewan yang dapat terbang di langit', image: 'url_to_burung_image' },
];

const TebakHewan = ({ name }) => {
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = name;
    }, [name]);

    const handleGuess = () => {
        if (guess.toLowerCase() === animals[currentAnimal].name.toLowerCase()) {
            setMessage('Tebakan Anda benar!');
            setCurrentAnimal((prev) => (prev + 1) % animals.length);
            setGuess('');
        } else {
            setMessage('Tebakan Anda salah. Coba lagi!');
        }
    };

    return (
        <div style={styles.container}>
            <h2 className='game-title'>Tebak Hewan</h2>
            <p>{animals[currentAnimal].description}</p>
            <img src={animals[currentAnimal].image} alt={animals[currentAnimal].name} style={styles.image} />
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Tebak nama hewan"
                style={styles.input}
            />
            <button onClick={handleGuess} style={styles.button}>Tebak</button>
            {message && <p>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
    },
    image: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        width: '200px',
    },
    button: {
        padding: '10px 20px',
        cursor: 'pointer',
    }
};

export default TebakHewan;
