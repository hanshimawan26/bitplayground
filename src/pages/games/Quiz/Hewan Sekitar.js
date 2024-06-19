import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Anjing',
  'Kucing',
  'Tikus',
  'Cacing',
  'Kadal',
  'Kodok',
  'Burung',
  'Ikan',
  'Kupu-Kupu',
  'Semut'
];

const questions = [
  {
    image: '/images/gameassets/Hewan Sekitar/Anjing.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Anjing',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Kucing.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kucing',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Tikus.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Tikus',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Cacing.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Cacing',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Kadal.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kadal',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Kodok.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kodok',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Burung.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Burung',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Ikan.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Ikan',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Kupu-Kupu.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kupu-Kupu',
  },
  {
    image: '/images/gameassets/Hewan Sekitar/Semut.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Semut',
  },
];

const HewanSekitar = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default HewanSekitar;
