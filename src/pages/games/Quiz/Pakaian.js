import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Baju',
  'Celana',
  'Rok',
  'Sepatu',
  'Kaos Kaki',
  'Topi',
  'Jaket',
  'Syal',
  'Sandal',
  'Sarung Tangan'
];

const questions = [
  {
    image: '/images/gameassets/pakaian/Baju.webp',
    question: 'Pakaian yang menutupi bagian atas tubuh disebut ...',
    correctAnswer: 'Baju',
  },
  {
    image: '/images/gameassets/pakaian/Celana.webp',
    question: 'Pakaian yang menutupi bagian bawah tubuh disebut ...',
    correctAnswer: 'Celana',
  },
  {
    image: '/images/gameassets/pakaian/Rok.jpg',
    question: 'Pakaian yang dikenakan oleh perempuan dan menutupi bagian bawah tubuh disebut ...',
    correctAnswer: 'Rok',
  },
  {
    image: '/images/gameassets/pakaian/Sepatu.jpg',
    question: 'Alas kaki yang sering digunakan untuk berjalan di luar disebut ...',
    correctAnswer: 'Sepatu',
  },
  {
    image: '/images/gameassets/pakaian/KaosKaki.webp',
    question: 'Pakaian yang menutupi kaki dan sering dipakai dengan sepatu disebut ...',
    correctAnswer: 'Kaos Kaki',
  },
  {
    image: '/images/gameassets/pakaian/Topi.webp',
    question: 'Pakaian yang digunakan untuk menutupi dan melindungi kepala disebut ...',
    correctAnswer: 'Topi',
  },
  {
    image: '/images/gameassets/pakaian/Jaket.jpg',
    question: 'Pakaian yang dikenakan di luar baju untuk menghangatkan tubuh disebut ...',
    correctAnswer: 'Jaket',
  },
  {
    image: '/images/gameassets/pakaian/Syal.jpg',
    question: 'Aksesori yang dikenakan di leher untuk menghangatkan disebut ...',
    correctAnswer: 'Syal',
  },
  {
    image: '/images/gameassets/pakaian/Sandal.webp',
    question: 'Alas kaki yang terbuka dan sering digunakan di dalam rumah atau pantai disebut ...',
    correctAnswer: 'Sandal',
  },
  {
    image: '/images/gameassets/pakaian/SarungTangan.webp',
    question: 'Pakaian yang menutupi tangan untuk menghangatkan atau melindungi disebut ...',
    correctAnswer: 'Sarung Tangan',
  },
];

const Pakaian = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Pakaian;