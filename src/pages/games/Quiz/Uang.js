import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  '1 ribu',
  '2 ribu',
  '5 ribu',
  '10 ribu',
  '20 ribu',
  '50 ribu',
  '100 ribu'
];

const questions = [
  {
    image: '/images/gameassets/Uang/1ribu.webp',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '1 ribu',
  },
  {
    image: '/images/gameassets/Uang/2ribu.png',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '2 ribu',
  },
  {
    image: '/images/gameassets/Uang/5ribu.webp',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '5 ribu',
  },
  {
    image: '/images/gameassets/Uang/10ribu.jpg',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '10 ribu',
  },
  {
    image: '/images/gameassets/Uang/20ribu.webp',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '20 ribu',
  },
  {
    image: '/images/gameassets/Uang/50ribu.jpg',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '50 ribu',
  },
  {
    image: '/images/gameassets/Uang/100ribu.jpg',
    question: 'Gambar uang di samping bernilai ...',
    correctAnswer: '100 ribu',
  },
];

const Uang = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Uang;
