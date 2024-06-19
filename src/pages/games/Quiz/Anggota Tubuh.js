import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Kepala',
  'Tangan',
  'Kaki',
  'Mata',
  'Hidung',
  'Mulut',
  'Telinga',
  'Rambut',
  'Leher',
  'Perut'
];

const questions = [
  {
    image: '/images/gameassets/Anggota Tubuh/Tangan.jpg',
    question: 'Bagian tubuh yang digunakan untuk memegang dan mengangkat benda.',
    correctAnswer: 'Tangan',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Kaki.jpg',
    question: 'Bagian tubuh yang digunakan untuk berjalan dan berlari.',
    correctAnswer: 'Kaki',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Mata.jpg',
    question: 'Bagian tubuh yang digunakan untuk melihat.',
    correctAnswer: 'Mata',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Hidung.jpg',
    question: 'Bagian tubuh yang digunakan untuk mencium bau.',
    correctAnswer: 'Hidung',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Mulut.jpg',
    question: 'Bagian tubuh yang digunakan untuk makan dan berbicara.',
    correctAnswer: 'Mulut',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Telinga.jpg',
    question: 'Bagian tubuh yang digunakan untuk mendengar suara.',
    correctAnswer: 'Telinga',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Rambut.jpg',
    question: 'Bagian tubuh yang tumbuh di atas kepala dan bisa dihias.',
    correctAnswer: 'Rambut',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Leher.jpg',
    question: 'Bagian tubuh yang menghubungkan kepala dengan badan.',
    correctAnswer: 'Leher',
  },
  {
    image: '/images/gameassets/Anggota Tubuh/Perut.jpg',
    question: 'Bagian tubuh yang digunakan untuk mencerna makanan.',
    correctAnswer: 'Perut',
  },
];

const BagianTubuh = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default BagianTubuh;
