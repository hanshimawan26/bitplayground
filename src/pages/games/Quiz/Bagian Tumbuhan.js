import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Akar',
  'Batang',
  'Daun',
  'Bunga',
  'Buah',
  'Biji',
  'Tunas',
  'Duri'
];

const questions = [
  {
    image: '/images/gameassets/Bagian Tumbuhan/Akar.jpg',
    question: 'Bagian tumbuhan yang berada di bawah tanah dan menyerap air serta nutrisi.',
    correctAnswer: 'Akar',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Batang.jpg',
    question: 'Bagian tumbuhan yang menopang daun, bunga, dan buah.',
    correctAnswer: 'Batang',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Daun.jpg',
    question: 'Bagian tumbuhan yang berfungsi untuk fotosintesis dan berwarna hijau.',
    correctAnswer: 'Daun',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Bunga.jpg',
    question: 'Bagian tumbuhan yang indah dan sering kali berfungsi untuk reproduksi.',
    correctAnswer: 'Bunga',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Buah.jpg',
    question: 'Bagian tumbuhan yang berfungsi untuk menyimpan biji dan sering kali bisa dimakan.',
    correctAnswer: 'Buah',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Biji.jpg',
    question: 'Bagian tumbuhan yang berfungsi untuk berkembang biak dan tumbuh menjadi tumbuhan baru.',
    correctAnswer: 'Biji',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Tunas.jpg',
    question: 'Bagian tumbuhan muda yang baru tumbuh dari biji atau batang.',
    correctAnswer: 'Tunas',
  },
  {
    image: '/images/gameassets/Bagian Tumbuhan/Duri.jpg',
    question: 'Bagian tumbuhan yang tajam dan digunakan untuk melindungi diri dari herbivora.',
    correctAnswer: 'Duri',
  },
];

const BagianTumbuhan = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default BagianTumbuhan;
