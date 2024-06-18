import React from 'react';
import QuizTemplate from './QuizTemplate/QuizTemplate';

const options = [
  'Kepala',
  'Tangan',
  'Kaki',
  'Mata',
  'Hidung',
  'Mulut',
  'Telinga',
  'Rambut',
  'Leher',
  'Perut'
];

const questions = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Human-Hands-Front-Back.jpg/640px-Human-Hands-Front-Back.jpg',
    question: 'Bagian tubuh yang digunakan untuk memegang dan mengangkat benda.',
    correctAnswer: 'Tangan',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foot_on_white_background.jpg/640px-Foot_on_white_background.jpg',
    question: 'Bagian tubuh yang digunakan untuk berjalan dan berlari.',
    correctAnswer: 'Kaki',
  },
  {
    image: 'https://images.ctfassets.net/u4vv676b8z52/6i74ZmDHzHRjllxOwi3NkG/f80718c70ef09afcaaad98cba1b29ad4/brown-eyes.png?fm=jpg&q=80',
    question: 'Bagian tubuh yang digunakan untuk melihat.',
    correctAnswer: 'Mata',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/5HYdrDsenbowySwd8WnARf-1200-80.jpg',
    question: 'Bagian tubuh yang digunakan untuk mencium bau.',
    correctAnswer: 'Hidung',
  },
  {
    image: 'https://www.bearcreekfamilydentistry.com/blog/wp-content/uploads/2023/10/AdobeStock_95489929__1698189503_66549.jpg',
    question: 'Bagian tubuh yang digunakan untuk makan dan berbicara.',
    correctAnswer: 'Mulut',
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/NvekX9tT7peSEUHRersaT8-1200-80.jpg',
    question: 'Bagian tubuh yang digunakan untuk mendengar suara.',
    correctAnswer: 'Telinga',
  },
  {
    image: 'https://i.pinimg.com/736x/12/62/f3/1262f3d80091f434d5a403c344148932.jpg',
    question: 'Bagian tubuh yang tumbuh di atas kepala dan bisa dihias.',
    correctAnswer: 'Rambut',
  },
  {
    image: 'https://www.californiaskininstitute.com/wp-content/uploads/2018/11/Turkey-Neck-Article-SMALL.png',
    question: 'Bagian tubuh yang menghubungkan kepala dengan badan.',
    correctAnswer: 'Leher',
  },
  {
    image: 'https://asset.kompas.com/crops/7e-dDq-Z6RI2roHNt8i5UZciEHg=/170x0:901x487/750x500/data/photo/2023/12/31/6591024d5d793.jpg',
    question: 'Bagian tubuh yang digunakan untuk mencerna makanan.',
    correctAnswer: 'Perut',
  },
];

const BagianTubuh = () => {
  return (
    <QuizTemplate questions={questions} options={options} />
  );
};

export default BagianTubuh;
