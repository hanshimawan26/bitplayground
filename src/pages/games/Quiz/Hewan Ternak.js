import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Sapi',
  'Kambing',
  'Ayam',
  'Bebek',
  'Kuda',
  'Babi',
  'Domba',
  'Kelinci',
  'Angsa'
];

const questions = [
  {
    image: '/images/gameassets/Hewan Ternak/Sapi.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Sapi',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Kambing.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kambing',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Ayam.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Ayam',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Bebek.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Bebek',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Kuda.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kuda',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Babi.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Babi',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Domba.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Domba',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Kelinci.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Kelinci',
  },
  {
    image: '/images/gameassets/Hewan Ternak/Angsa.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Angsa',
  }
];

const HewanTernak = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default HewanTernak;
