import React from 'react';
import StudyTemplate from './StudyTemplate/StudyTemplate';

const options = [
  'Anjing',
  'Kucing',
  'Tikus',
  'Cacing',
  'Kadal',
  'Kodok',
  'Burung',
  'Ikan',
  'Kupu-Kupu',
  'Semut'
];

const questions = [
  {
    image: 'https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg',
    question: 'Hewan yang dikenal sebagai sahabat manusia dan sering dijadikan peliharaan. Bisa menggonggong.',
    correctAnswer: 'Anjing',
  },
  {
    image: 'https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg',
    question: 'Hewan peliharaan yang suka menangkap tikus dan sering terdengar mengeong.',
    correctAnswer: 'Kucing',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg',
    question: 'Hewan kecil yang sering ditemukan di rumah dan suka menggerogoti makanan.',
    correctAnswer: 'Tikus',
  },
  {
    image: 'https://images.theconversation.com/files/368787/original/file-20201111-15-1jhwpuu.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip',
    question: 'Hewan kecil yang hidup di tanah dan membantu menyuburkan tanah.',
    correctAnswer: 'Cacing',
  },
  {
    image: 'https://tunashijau.id/wp-content/uploads/2023/03/kadal.jpeg',
    question: 'Hewan yang memiliki kulit bersisik dan sering ditemukan di dinding atau pohon.',
    correctAnswer: 'Kadal',
  },
  {
    image: 'https://blog.kliknclean.com/wp-content/uploads/1-34.jpg',
    question: 'Hewan yang bisa melompat dan hidup di air serta darat. Sering terdengar berbunyi "kruk kruk".',
    correctAnswer: 'Kodok',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ehE7HkEII7DY5-rMyNbioI53EdzvbzFEXA&s',
    question: 'Hewan yang bisa terbang dan sering berkicau di pagi hari.',
    correctAnswer: 'Burung',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg/640px-Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg',
    question: 'Hewan yang hidup di air dan memiliki sirip serta insang.',
    correctAnswer: 'Ikan',
  },
  {
    image: 'https://i.natgeofe.com/k/9acd2bad-fb0e-43a8-935d-ec0aefc60c2f/monarch-butterfly-grass_3x2.jpg',
    question: 'Hewan yang memiliki sayap berwarna-warni dan sering terbang dari bunga ke bunga.',
    correctAnswer: 'Kupu-Kupu',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywNu4rKLPuJ8PLE4JlRw2kni1hce7Flvxhw&s',
    question: 'Hewan kecil yang hidup berkelompok dan sering ditemukan di tanah atau rumah mencari makanan.',
    correctAnswer: 'Semut',
  },
];

const HewanSekitar = () => {
  return (
    <StudyTemplate questions={questions} options={options} />
  );
};

export default HewanSekitar;
