import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Mandi',
  'Mencuci Tangan',
  'Sikat Gigi',
  'Gunting Kuku',
  'Makan',
  'Olahraga',
  'Tidur',
  'Minum Air',
  'Keramas',
  'Membersihkan Telinga'
];

const questions = [
  {
    image: '/images/gameassets/merawat_tubuh/Mandi.jpeg',
    question: 'Membersihkan tubuh disebut ...',
    correctAnswer: 'Mandi',
  },
  {
    image: '/images/gameassets/merawat_tubuh/MencuciTangan.jpg',
    question: 'Membersihkan tangan dari kuman disebut ...',
    correctAnswer: 'Mencuci Tangan',
  },
  {
    image: '/images/gameassets/merawat_tubuh/SikatGigi.jpg',
    question: 'Membersihkan gigi disebut ...',
    correctAnswer: 'Sikat Gigi',
  },
  {
    image: '/images/gameassets/merawat_tubuh/GuntingKuku.webp',
    question: 'Memotong kuku yang panjang disebut ...',
    correctAnswer: 'Gunting Kuku',
  },
  {
    image: '/images/gameassets/merawat_tubuh/Makan.webp',
    question: 'Mengonsumsi makanan disebut ...',
    correctAnswer: 'Makan',
  },
  {
    image: '/images/gameassets/merawat_tubuh/Olahraga.jpg',
    question: 'Aktivitas fisik untuk menjaga kebugaran tubuh disebut ...',
    correctAnswer: 'Olahraga',
  },
  {
    image: '/images/gameassets/merawat_tubuh/Tidur.jpg',
    question: 'Istirahat yang cukup dengan cara berbaring disebut ...',
    correctAnswer: 'Tidur',
  },
  {
    image: '/images/gameassets/merawat_tubuh/MinumAir.jpg',
    question: 'Mengonsumsi air untuk menjaga tubuh tetap terhidrasi disebut ...',
    correctAnswer: 'Minum Air',
  },
  {
    image: '/images/gameassets/merawat_tubuh/MembersihkanTelinga.jpg',
    question: 'Membersihkan kotoran dari telinga disebut ...',
    correctAnswer: 'Membersihkan Telinga',
  },
];

const MerawatTubuh = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default MerawatTubuh;
