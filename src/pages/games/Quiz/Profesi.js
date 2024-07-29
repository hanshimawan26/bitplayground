import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Dokter',
  'Guru',
  'Polisi',
  'Petani',
  'Nelayan',
  'Insinyur',
  'Pengacara',
  'Pilot',
  'Perawat',
  'Pemadam Kebakaran'
];

const questions = [
  {
    image: '/images/gameassets/profesi/Dokter.jpg',
    question: 'Orang yang merawat dan menyembuhkan orang sakit disebut ...',
    correctAnswer: 'Dokter',
  },
  {
    image: '/images/gameassets/profesi/Guru.webp',
    question: 'Orang yang mengajar di sekolah disebut ...',
    correctAnswer: 'Guru',
  },
  {
    image: '/images/gameassets/profesi/Polisi.jpeg',
    question: 'Orang yang menjaga keamanan dan ketertiban masyarakat disebut ...',
    correctAnswer: 'Polisi',
  },
  {
    image: '/images/gameassets/profesi/Petani.jpg',
    question: 'Orang yang bercocok tanam di sawah atau ladang disebut ...',
    correctAnswer: 'Petani',
  },
  {
    image: '/images/gameassets/profesi/Nelayan.png',
    question: 'Orang yang menangkap ikan di laut atau sungai disebut ...',
    correctAnswer: 'Nelayan',
  },
  {
    image: '/images/gameassets/profesi/Insinyur.jpg',
    question: 'Orang yang merancang dan membangun gedung disebut ...',
    correctAnswer: 'Insinyur',
  },
  {
    image: '/images/gameassets/profesi/Pilot.webp',
    question: 'Orang yang menerbangkan pesawat disebut ...',
    correctAnswer: 'Pilot',
  },
  {
    image: '/images/gameassets/profesi/PemadamKebakaran.webp',
    question: 'Orang yang memadamkan api saat kebakaran disebut ...',
    correctAnswer: 'Pemadam Kebakaran',
  },
];

const Profesi = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default Profesi;
