import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Harimau',
  'Gajah',
  'Komodo',
  'Orangutan',
  'Badak',
  'Macan Tutul',
  'Banteng',
  'Rusa',
  'Beruang Madu',
  'Elang Jawa'
];

const questions = [
  {
    image: '/images/gameassets/Hewan Liar/Harimau.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Harimau',
  },
  {
    image: '/images/gameassets/Hewan Liar/Gajah.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Gajah',
  },
  {
    image: '/images/gameassets/Hewan Liar/Komodo.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Komodo',
  },
  {
    image: '/images/gameassets/Hewan Liar/Orangutan.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Orangutan',
  },
  {
    image: '/images/gameassets/Hewan Liar/Badak.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Badak',
  },
  {
    image: '/images/gameassets/Hewan Liar/Macan Tutul.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Macan Tutul',
  },
  {
    image: '/images/gameassets/Hewan Liar/Banteng.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Banteng',
  },
  {
    image: '/images/gameassets/Hewan Liar/Rusa.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Rusa',
  },
  {
    image: '/images/gameassets/Hewan Liar/Beruang Madu.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Beruang Madu',
  },
  {
    image: '/images/gameassets/Hewan Liar/Elang Jawa.jpg',
    question: 'Hewan ini disebut ...',
    correctAnswer: 'Elang Jawa',
  },
];

const HewanLiar = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default HewanLiar;
