import React from 'react';
import QuizTemplate from './QuizTemplate/QuizTemplate';

const options = [
  'Akar',
  'Batang',
  'Daun',
  'Bunga',
  'Buah',
  'Biji',
  'Tunas',
  'Kulit',
  'Duri',
  'Akar Serabut'
];

const questions = [
  {
    image: 'https://t3.ftcdn.net/jpg/04/20/83/38/360_F_420833889_C9PItmfpLjcrNTJdOjMcvE6K6bfdjJel.jpg',
    question: 'Bagian tumbuhan yang berada di bawah tanah dan menyerap air serta nutrisi.',
    correctAnswer: 'Akar',
  },
  {
    image: 'https://images.pexels.com/photos/2287952/pexels-photo-2287952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    question: 'Bagian tumbuhan yang menopang daun, bunga, dan buah.',
    correctAnswer: 'Batang',
  },
  {
    image: 'https://t4.ftcdn.net/jpg/00/37/42/89/360_F_37428956_qHvAy9EIzMqAh15rYR31ZQevyzFGbBuH.jpg',
    question: 'Bagian tumbuhan yang berfungsi untuk fotosintesis dan berwarna hijau.',
    correctAnswer: 'Daun',
  },
  {
    image: 'https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg',
    question: 'Bagian tumbuhan yang indah dan sering kali berfungsi untuk reproduksi.',
    correctAnswer: 'Bunga',
  },
  {
    image: 'https://cdn.britannica.com/86/75886-050-B481C97E/Apricots.jpg',
    question: 'Bagian tumbuhan yang berfungsi untuk menyimpan biji dan sering kali bisa dimakan.',
    correctAnswer: 'Buah',
  },
  {
    image: 'https://www.dictio.id/uploads/db3342/original/3X/7/7/774b21bc8432d7379db3e44d94f3ef4c27a7d960.jpeg',
    question: 'Bagian tumbuhan yang berfungsi untuk berkembang biak dan tumbuh menjadi tumbuhan baru.',
    correctAnswer: 'Biji',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Cucumber_leaf.jpg',
    question: 'Bagian tumbuhan muda yang baru tumbuh dari biji atau batang.',
    correctAnswer: 'Tunas',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2014/03/05/18/54/thorn-280316_1280.jpg',
    question: 'Bagian tumbuhan yang tajam dan digunakan untuk melindungi diri dari herbivora.',
    correctAnswer: 'Duri',
  },
];

const BagianTumbuhan = () => {
  return (
    <QuizTemplate questions={questions} options={options} />
  );
};

export default BagianTumbuhan;
