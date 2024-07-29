import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Rumah Sakit',
  'Sekolah',
  'Perpustakaan',
  'Pasar',
  'Taman',
  'Kantor Pos',
  'Stasiun Kereta',
  'Bandara',
  'Museum',
  'Masjid'
];

const questions = [
  {
    image: '/images/gameassets/fasilitas/hospital.jpg',
    question: 'Tempat untuk berobat disebut ...',
    correctAnswer: 'Rumah Sakit',
  },
  {
    image: '/images/gameassets/fasilitas/sekolah.webp',
    question: 'Tempat untuk belajar disebut ...',
    correctAnswer: 'Sekolah',
  },
  {
    image: '/images/gameassets/fasilitas/library.jpg',
    question: 'Tempat untuk meminjam dan membaca buku disebut ...',
    correctAnswer: 'Perpustakaan',
  },
  {
    image: '/images/gameassets/fasilitas/pasar.png',
    question: 'Tempat untuk membeli dan menjual barang disebut ...',
    correctAnswer: 'Pasar',
  },
  {
    image: '/images/gameassets/fasilitas/taman.webp',
    question: 'Tempat untuk bersantai dan bermain di luar ruangan disebut ...',
    correctAnswer: 'Taman',
  },
  {
    image: '/images/gameassets/fasilitas/stasiun.jpg',
    question: 'Tempat untuk naik dan turun kereta disebut ...',
    correctAnswer: 'Stasiun Kereta',
  },
  {
    image: '/images/gameassets/fasilitas/bandara.jpg',
    question: 'Tempat untuk naik dan turun pesawat disebut ...',
    correctAnswer: 'Bandara',
  },
  {
    image: '/images/gameassets/fasilitas/museum.png',
    question: 'Tempat untuk melihat benda bersejarah disebut ...',
    correctAnswer: 'Museum',
  },
  {
    image: '/images/gameassets/fasilitas/masjid.jpeg',
    question: 'Tempat untuk beribadah umat Muslim disebut ...',
    correctAnswer: 'Masjid',
  },
  {
    image: '/images/gameassets/fasilitas/gereja.jpg',
    question: 'Tempat untuk beribadah umat Kristen dan Katolik disebut ...',
    correctAnswer: 'Gereja',
  },
  {
    image: '/images/gameassets/fasilitas/vihara.webp',
    question: 'Tempat untuk beribadah umat Budha disebut ...',
    correctAnswer: 'Vihara',
  },
  {
    image: '/images/gameassets/fasilitas/pura.jpg',
    question: 'Tempat untuk beribadah umat Hindu disebut ...',
    correctAnswer: 'Pura',
  },
];

const FasilitasUmum = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default FasilitasUmum;
