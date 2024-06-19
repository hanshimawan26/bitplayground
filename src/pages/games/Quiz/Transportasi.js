import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Bus',
  'Truk',
  'Mobil',
  'Sepeda Motor',
  'Kereta',
  'Becak',
  'Kapal',
  'Perahu',
  'Pesawat',
  'Helikopter'
];

const questions = [
  {
    image: '/images/gameassets/transportasi/Bus.jpg',
    question: 'Kendaraan besar yang dapat mengangkut banyak orang disebut ...',
    correctAnswer: 'Bus',
  },
  {
    image: '/images/gameassets/transportasi/Truk.jpg',
    question: 'Kendaraan besar yang dapat mengangkut banyak barang disebut ...',
    correctAnswer: 'Truk',
  },
  {
    image: '/images/gameassets/transportasi/Mobil.jpg',
    question: 'Kendaraan pribadi yang dapat membawa beberapa orang sekaligus disebut ...',
    correctAnswer: 'Mobil',
  },
  {
    image: '/images/gameassets/transportasi/Sepeda Motor.jpg',
    question: 'Kendaraan roda dua yang mudah dikendarai disebut ...',
    correctAnswer: 'Sepeda Motor',
  },
  {
    image: '/images/gameassets/transportasi/Kereta.jpg',
    question: 'Rangkaian gerbong untuk bepergian jarak jauh disebut ...',
    correctAnswer: 'Kereta',
  },
  {
    image: '/images/gameassets/transportasi/Becak.jpg',
    question: 'Kendaraan roda tiga dengan kursi penumpang di belakang disebut ...',
    correctAnswer: 'Becak',
  },
  {
    image: '/images/gameassets/transportasi/Kapal.jpg',
    question: 'Kendaraan besar yang mengapung di atas air disebut ...',
    correctAnswer: 'Kapal',
  },
  {
    image: '/images/gameassets/transportasi/Perahu.jpg',
    question: 'Kendaraan kecil yang mengapung di atas air disebut ...',
    correctAnswer: 'Perahu',
  },
  {
    image: '/images/gameassets/transportasi/Pesawat.jpg',
    question: 'Kendaraan yang terbang di udara disebut ...',
    correctAnswer: 'Pesawat',
  },
  {
    image: '/images/gameassets/transportasi/Helikopter.jpg',
    question: 'Kendaraan yang dapat mendarat dan lepas landas secara vertikal disebut ...',
    correctAnswer: 'Helikopter',
  },
];

const Transportasi = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Transportasi;
