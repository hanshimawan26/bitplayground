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
    image: 'https://cdn.siasat.com/wp-content/uploads/2023/04/Poonch-8-660x495.png',
    question: 'Hewan karnivora yang memiliki belang di tubuhnya dan dikenal sebagai raja hutan.',
    correctAnswer: 'Harimau',
  },
  {
    image: 'https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png',
    question: 'Hewan besar dengan belalai panjang yang hidup di hutan dan savana.',
    correctAnswer: 'Gajah',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Komodo_dragon_with_tongue.jpg',
    question: 'Kadal raksasa yang hanya ditemukan di beberapa pulau di Indonesia seperti Komodo dan Rinca.',
    correctAnswer: 'Komodo',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/800px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG',
    question: 'Kera besar yang hidup di hutan Kalimantan dan Sumatra, dikenal karena kecerdasannya.',
    correctAnswer: 'Orangutan',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/White_Rhino_at_Working_with_Wildlife.jpg',
    question: 'Hewan besar yang memiliki cula di hidungnya dan hidup di hutan-hutan.',
    correctAnswer: 'Badak',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg/800px-Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg',
    question: 'Hewan karnivora dengan bintik-bintik di tubuhnya yang hidup di hutan Asia.',
    correctAnswer: 'Macan Tutul',
  },
  {
    image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1600673417/isidauparfs32gaobgtk.jpg',
    question: 'Hewan besar yang mirip sapi namun liar dan hidup di hutan-hutan Asia Tenggara.',
    correctAnswer: 'Banteng',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/White-tailed_deer.jpg/640px-White-tailed_deer.jpg',
    question: 'Hewan herbivora dengan tanduk yang bercabang, sering ditemukan di hutan-hutan Indonesia.',
    correctAnswer: 'Rusa',
  },
  {
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/134/2023/09/17/17-Sep-2023-Akurat-Kaltim-Beruang-Madu-3933820725.png',
    question: 'Jenis beruang terkecil yang ditemukan di hutan-hutan Asia Tenggara dan dikenal karena lidahnya yang panjang.',
    correctAnswer: 'Beruang Madu',
  },
  {
    image: 'https://news.tamansafari.com/Newsportalv22ok/upload/423_3_elangjawa.jpg',
    question: 'Burung pemangsa yang endemik di Pulau Jawa dan menjadi simbol negara Indonesia.',
    correctAnswer: 'Elang Jawa',
  },
];

const HewanLiar = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default HewanLiar;
