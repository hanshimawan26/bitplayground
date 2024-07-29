import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Lingkaran',
  'Persegi',
  'Segitiga',
  'Persegi Panjang',
  'Oval',
  'Bintang',
  'Layang-layang',
];

const questions = [
  {
    image: '/images/gameassets/bentuk2d/Lingkaran.svg',
    question: 'Bentuk yang bulat disebut ...',
    correctAnswer: 'Lingkaran',
  },
  {
    image: '/images/gameassets/bentuk2d/Persegi.svg',
    question: 'Bentuk dengan empat sisi yang sama panjang disebut ...',
    correctAnswer: 'Persegi',
  },
  {
    image: '/images/gameassets/bentuk2d/Segitiga.svg',
    question: 'Bentuk dengan tiga sisi disebut ...',
    correctAnswer: 'Segitiga',
  },
  {
    image: '/images/gameassets/bentuk2d/PersegiPanjang.svg',
    question: 'Bentuk dengan dua pasang sisi yang sama panjang disebut ...',
    correctAnswer: 'Persegi Panjang',
  },
  {
    image: '/images/gameassets/bentuk2d/Oval.svg',
    question: 'Bentuk yang seperti telur disebut ...',
    correctAnswer: 'Oval',
  },
  {
    image: '/images/gameassets/bentuk2d/Bintang.svg',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Bintang',
  },
  {
    image: '/images/gameassets/bentuk2d/Layang-layang.svg',
    question: 'Bentuk di samping disebut ...',
    correctAnswer: 'Layang-layang',
  },
];

const Bentuk2D = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Bentuk2D;
