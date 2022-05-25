// import React, { Component } from "react";
// import Slider from "react-slick";
// import Restaurant from '../../components/restaurant/Restaurant';
// import { elifood, blog04, blog05, blog06, casablanca, lovinghutland, morococo, ezindia, kervan, taj, chabad, petras, sultan, dubai, everest, zerovegan, greener, chezvalerie, dinerjackie, apbbang, vegetus } from './imports';
// import './foods.css';

// export default class FoodSlider extends Component {
//   render() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     rows: 2,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };

//   return (
//     <div className="containerr">
//       <Slider {...settings}>
//           <div className="halal">
//             <Restaurant imgUrl={casablanca} text="Casablanca" location="35, Sinheung-ro, Yongsan-gu, Seoul(서울시 용산구 신흥로 35)"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={lovinghutland} text="Loving Hut Land" location="17, Nonhyeon-ro 16-gil, Gangnam-gu, Seoul(서울특별시 강남구 논현로16길 17)"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={morococo} text="Morococo Cafe" location="34, Sinheung-ro, Yongsan-gu, Seoul(서울시 용산구 신흥로 34)"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={ezindia} text="Ezindia" location="3F, 20, Yonsei-ro, Seodaemun-gu, Seoul(서울시 서대문구 연세로 20 3층)"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={kervan} text="KERVAN Famille Branch" location="2F, 205, Sapyeong-daero, Seocho-gu, Seoul(서울시 서초구 사평대로 205 2층)"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={taj} text="Taj" location="2F, 73, Myeongdong-gil, Jung-gu, Seoul(서울 중구 명동길 73)"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={elifood} text="Kosher Eli Food" location="43 Hoenamu-ro 26-gil, Itaewon 2(i)-dong, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="kosher">
//           <Restaurant imgUrl={chabad} text="Chabad Korea" location="35-10, Itaewon-ro 49-gil, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="kosher">
//           <Restaurant imgUrl={petras} text="Petra" location="33 Noksapyeong-daero 40-gil, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={sultan} text="Sultan Kebab" location="126 Bogwang-ro, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={everest} text="Everest" location="2-1 Jong-ro 51ga-gil, Jongno-gu, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={dubai} text="Dubai" location="192 Itaewon-ro, Itaewon-dong, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="vegetarian">
//             <Restaurant imgUrl={zerovegan} text="Zero Vegan" location="2 floor, 117 Bogwang-ro, Yongsan-gu, Seoul"/>
//           </div>
//           <div className="vegetarian">
//             <Restaurant imgUrl={greener} text="Greener" location="157 1층, Seongmisan-ro, Mapo-gu, Seoul"/>
//           </div>
//           <div className="vegetarian">
//             <Restaurant imgUrl={chezvalerie} text="Chez Valérie" location="433-60 Hapjeong-dong, Mapo-gu, Seoul"/>
//           </div>
//           <div className="vegetarian">
//             <Restaurant imgUrl={apbbang} text="Apbbang" location="Samil-daero 32ga-gil, Jongno-gu, 29-1, Seoul"/>
//           </div>
//           <div className="vegetarian">
//           <Restaurant imgUrl={dinerjackie} text="Diner Jackie" location="82 Poeun-ro, Mangwon-dong, Mapo-gu, Seoul"/>
//           </div>
//           <div className="vegetarian">
//           <Restaurant imgUrl={vegetus} text="Vegetus" location="Yongsan-dong 2-ga 22-12, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//           <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//           <Restaurant imgUrl={blog04} text="Kookmin Hotpot" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//           <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//           <Restaurant imgUrl={blog05} text="Kookmin Steakhouse" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="vegetarian">
//             <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//             <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//             <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="halal">
//           <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//           <div className="kosher">
//           <Restaurant imgUrl={blog06} text="Kookmin Pizza" location="Jeongneung, Seoul"/>
//           </div>
//         </Slider>
//     </div>
//   );
// }
// }
