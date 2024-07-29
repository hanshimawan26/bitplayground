import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Apel',
  'Pisang',
  'Jeruk',
  'Mangga',
  'Anggur',
  'Semangka',
  'Strawberi',
  'Melon',
  'Nanas',
  'Pepaya'
];

const questions = [
  {
    image: '/images/gameassets/buah/Apel.webp',
    question: 'Buah berwarna merah yang sering dimakan segar disebut ...',
    correctAnswer: 'Apel',
  },
  {
    image: '/images/gameassets/buah/Pisang.jpg',
    question: 'Buah berwarna kuning yang berbentuk melengkung disebut ...',
    correctAnswer: 'Pisang',
  },
  {
    image: '/images/gameassets/buah/Jeruk.jpg',
    question: 'Buah berwarna oranye yang kaya akan vitamin C disebut ...',
    correctAnswer: 'Jeruk',
  },
  {
    image: '/images/gameassets/buah/Mangga.jpg',
    question: 'Buah berwarna hijau atau kuning yang manis disebut ...',
    correctAnswer: 'Mangga',
  },
  {
    image: '/images/gameassets/buah/Anggur.jpg',
    question: 'Buah kecil-kecil yang tumbuh bergerombol disebut ...',
    correctAnswer: 'Anggur',
  },
  {
    image: '/images/gameassets/buah/Semangka.png',
    question: 'Buah besar berwarna hijau di luar dan merah di dalam disebut ...',
    correctAnswer: 'Semangka',
  },
  {
    image: '/images/gameassets/buah/Strawberi.webp',
    question: 'Buah kecil berwarna merah dengan bintik-bintik di kulitnya disebut ...',
    correctAnswer: 'Strawberi',
  },
  {
    image: '/images/gameassets/buah/Melon.jpeg',
    question: 'Buah besar berwarna hijau atau kuning yang manis dan segar disebut ...',
    correctAnswer: 'Melon',
  },
  {
    image: '/images/gameassets/buah/Nanas.jpeg',
    question: 'Buah berkulit kasar dengan daun berduri di atasnya disebut ...',
    correctAnswer: 'Nanas',
  },
  {
    image: '/images/gameassets/buah/Pepaya.jpg',
    question: 'Buah berwarna oranye di dalam dan hijau di luar disebut ...',
    correctAnswer: 'Pepaya',
  },
];

const Buah = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Buah;
