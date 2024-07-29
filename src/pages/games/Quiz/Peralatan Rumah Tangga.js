import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Meja',
  'Kursi',
  'Lemari',
  'Tempat Tidur',
  'Kompor',
  'Kulkas',
  'Mesin Cuci',
  'Setrika',
  'Sapu',
  'Lampu'
];

const questions = [
  {
    image: '/images/gameassets/peralatan/Meja.webp',
    question: 'Peralatan rumah tangga yang digunakan untuk menulis atau makan disebut ...',
    correctAnswer: 'Meja',
  },
  {
    image: '/images/gameassets/peralatan/Kursi.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk duduk disebut ...',
    correctAnswer: 'Kursi',
  },
  {
    image: '/images/gameassets/peralatan/Lemari.webp',
    question: 'Peralatan rumah tangga yang digunakan untuk menyimpan pakaian disebut ...',
    correctAnswer: 'Lemari',
  },
  {
    image: '/images/gameassets/peralatan/TempatTidur.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk tidur disebut ...',
    correctAnswer: 'Tempat Tidur',
  },
  {
    image: '/images/gameassets/peralatan/Kompor.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk memasak disebut ...',
    correctAnswer: 'Kompor',
  },
  {
    image: '/images/gameassets/peralatan/Kulkas.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk mendinginkan makanan disebut ...',
    correctAnswer: 'Kulkas',
  },
  {
    image: '/images/gameassets/peralatan/MesinCuci.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk mencuci pakaian disebut ...',
    correctAnswer: 'Mesin Cuci',
  },
  {
    image: '/images/gameassets/peralatan/Setrika.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk merapikan pakaian disebut ...',
    correctAnswer: 'Setrika',
  },
  {
    image: '/images/gameassets/peralatan/Sapu.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk membersihkan lantai disebut ...',
    correctAnswer: 'Sapu',
  },
  {
    image: '/images/gameassets/peralatan/Lampu.jpg',
    question: 'Peralatan rumah tangga yang digunakan untuk menerangi ruangan disebut ...',
    correctAnswer: 'Lampu',
  },
];

const PeralatanRumahTangga = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default PeralatanRumahTangga;
