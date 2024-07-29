import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Kubus',
  'Balok',
  'Bola',
  'Kerucut',
  'Silinder',
  'Piramida',
];

const questions = [
  {
    image: '/images/gameassets/bentuk3d/Kubus.jpg',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Kubus',
  },
  {
    image: '/images/gameassets/bentuk3d/Balok.webp',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Balok',
  },
  {
    image: '/images/gameassets/bentuk3d/Bola.webp',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Bola',
  },
  {
    image: '/images/gameassets/bentuk3d/Kerucut.jpg',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Kerucut',
  },
  {
    image: '/images/gameassets/bentuk3d/Silinder.webp',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Silinder',
  },
  {
    image: '/images/gameassets/bentuk3d/Piramida.webp',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Piramida',
  },
];

const Bentuk3D = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Bentuk3D;
