import React from 'react';
import QuizTemplate from './QuizTemplate/QuizTemplate';

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
    image: 'https://osabus.com/wp-content/uploads/2022/09/49-MAN-1024x768.jpeg',
    question: 'Kendaraan besar yang dapat mengangkut banyak orang sekaligus. Cocok untuk bepergian jarak jauh dan mengunjungi banyak tempat.',
    correctAnswer: 'Bus',
  },
  {
    image: 'https://www.sunstarmotor.id/wp-content/uploads/2020/06/Fighter-FM-65-FL.jpg',
    question: 'Kendaraan besar yang dapat mengangkut banyak barang sekaligus.',
    correctAnswer: 'Truk',
  },
  {
    image: 'https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg',
    question: 'Kendaraan pribadi yang dapat membawa beberapa orang sekaligus. Cocok untuk bepergian jarak dekat dan membawa barang bawaan.',
    correctAnswer: 'Mobil',
  },
  {
    image: 'https://www.mopeds.co.uk/images/new/57-2.jpg',
    question: 'Kendaraan roda dua yang mudah dikendarai dan irit bahan bakar. Cocok untuk bepergian di jalan yang padat dan mengantar barang.',
    correctAnswer: 'Sepeda Motor',
  },
  {
    image: 'https://awsimages.detik.net.id/community/media/visual/2022/08/26/krl-beroperasi-sampai-jam-berapa-cek-jadwal-krl-di-sini_169.png?w=1200',
    question: 'Rangkaian gerbong yang ditarik oleh lokomotif. Cocok untuk bepergian jarak jauh dengan nyaman dan menikmati pemandangan.',
    correctAnswer: 'Kereta',
  },
  {
    image: 'https://assets-a1.kompasiana.com/items/album/2020/09/06/becak-ok-5f54e7fbbb83122bf90770c2.jpg',
    question: 'Kendaraan roda tiga dengan kursi penumpang di belakang. Cocok untuk bepergian jarak pendek di kota dan menikmati suasana sekitar.',
    correctAnswer: 'Becak',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg',
    question: 'Kendaraan besar yang mengapung di atas air. Cocok untuk bepergian ke pulau-pulau dan mengangkut barang dalam jumlah besar.',
    correctAnswer: 'Kapal',
  },
  {
    image: 'https://png.pngtree.com/background/20230611/original/pngtree-wooden-boat-is-floating-on-the-water-picture-image_3126291.jpg',
    question: 'Kendaraan kecil yang mengapung di atas air. Cocok untuk bepergian di sungai, danau, dan laut dangkal.',
    correctAnswer: 'Perahu',
  },
  {
    image: 'https://img-cdn.medkomtek.com/l5U0uzOmuiMNgWTs6-PAKay-0iI=/510x395/smart/filters:quality(100):format(webp)/article/IHKgX6KNKRdis6XNpip0v/original/077253600_1483453910-6-Hal-yang-Anda-Harus-Lakukan-Ketika-Pesawat-Jatuh.jpg',
    question: 'Kendaraan yang terbang di udara. Cocok untuk bepergian jarak jauh dengan cepat dan mencapai tempat-tempat yang sulit dijangkau.',
    correctAnswer: 'Pesawat',
  },
  {
    image: 'https://mediarenditions.airbus.com/4NaezzgDeRcaAkBhZgEgiRkLPsspCFSeoSeww_7N8E4/resize?src=kpkp://airbus/38/609/609241-tmtnuq23wf.jpg&w=480&h=480&t=fit',
    question: 'Kendaraan yang dapat mendarat dan lepas landas secara vertikal. Cocok untuk bepergian ke tempat-tempat terpencil dan mengangkut barang ke tempat yang sulit dijangkau.',
    correctAnswer: 'Helikopter',
  },
];

const Transportasi = () => {
  return (
    <QuizTemplate questions={questions} options={options} />
  );
};

export default Transportasi;
