import React from 'react';
import QuizTemplate from './QuizTemplate/QuizTemplate';

const options = [
  'Sapi',
  'Kambing',
  'Ayam',
  'Bebek',
  'Kuda',
  'Babi',
  'Domba',
  'Kelinci',
  'Angsa',
  'Kalkun'
];

const questions = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
    question: 'Hewan besar yang menghasilkan susu dan daging. Sering ditemukan di peternakan.',
    correctAnswer: 'Sapi',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    question: 'Hewan yang dikenal karena menghasilkan susu dan daging serta memiliki tanduk melengkung.',
    correctAnswer: 'Kambing',
  },
  {
    image: 'https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg',
    question: 'Hewan yang menghasilkan telur dan daging. Jantan dari hewan ini disebut ayam jago.',
    correctAnswer: 'Ayam',
  },
  {
    image: 'https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?crop=0.670xw:1.00xh;0.157xw,0&resize=980:*',
    question: 'Hewan yang dikenal dengan suara "wek wek" dan sering ditemukan di sawah atau kolam.',
    correctAnswer: 'Bebek',
  },
  {
    image: 'https://cdn.britannica.com/96/1296-050-4A65097D/gelding-bay-coat.jpg',
    question: 'Hewan yang digunakan untuk transportasi dan balapan. Dikenal karena kekuatannya.',
    correctAnswer: 'Kuda',
  },
  {
    image: 'https://i.natgeofe.com/k/23e409f9-4699-46f0-a645-5cc1f5040363/pig-full-body_2x1.jpg',
    question: 'Hewan yang menghasilkan daging yang disebut babi atau pork.',
    correctAnswer: 'Babi',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJbV05HAjn4mZ5rFy-2oiHnyy3odZ0UjrfA&s',
    question: 'Hewan yang dikenal karena bulunya yang tebal yang digunakan untuk membuat wol.',
    correctAnswer: 'Domba',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Oryctolagus_cuniculus_Tasmania_2_%28cropped%29.jpg/800px-Oryctolagus_cuniculus_Tasmania_2_%28cropped%29.jpg',
    question: 'Hewan kecil yang dikenal karena telinga panjangnya dan suka memakan wortel.',
    correctAnswer: 'Kelinci',
  },
  {
    image: 'https://www.birdspot.co.uk/wp-content/uploads/2017/09/mute-swans-heart.jpg',
    question: 'Hewan besar yang mirip dengan bebek namun memiliki leher yang lebih panjang.',
    correctAnswer: 'Angsa',
  }
];

const HewanTernak = () => {
  return (
    <QuizTemplate questions={questions} options={options} />
  );
};

export default HewanTernak;
