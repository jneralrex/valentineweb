import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const affirmations = [
  "Every moment with you is a blessing 💖",
  "The brightness of your eyes is the story the sun tells 😊",
  "I have found love, and it's in you ❤️",
  "Today is another day to let the world know how much I love you 🥰",
  "May the love we share today be the light that guides us tomorrow 💫",
  "I cherish you more than words can say 💞",
  "Forever grateful to have you 💕",
  "Cheers to many more momennt of love and happiness 🥂",
];

const petNames = [
  "Birdiee",
  "omoba 👑",
  "Sweetheart",
  "Janetti",
  "Birdie baby",
  "My shaylaaa 🥹🥹",
  "Ufedo mi",
  "My woman",
];

const myNames = [
  "Coco",
  "Mufasa",
  "Jneral Rex",
  "Idah Rex" ,
  "Big bounce",
  "tech bros",
   "The masquerade",
  "Senior man"
];

function App() {
  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-6">
      <p className="text-lg italic text-pink-700 font-semibold mb-4 shadow-sm">
        To the love of my life, my sunshine, my joy — 
        <span className="text-yellow-600">
          Adedokun Adedolapo Yetunde Janet ❤️
        </span>
      </p>

      <p className="text-md italic text-gray-900 mb-4">
        I want to let you know that...
      </p>

      {/* Affirmation Message */}
      <h2 className="text-2xl sm:text-3xl font-semibold italic text-pink-600 mb-6">
      {affirmations[index % affirmations.length]}
      </h2>

      {/* Swiper for Pet Names */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSlideChange={handleSlideChange}
        className="w-full max-w-xs bg-white shadow-lg rounded-xl p-6"
      >
        {petNames.map((name, i) => (
          <SwiperSlide key={i} className="swiper-slide-fade">
            <div className="text-2xl font-bold text-pink-500 p-1">  {petNames[index % petNames.length]}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer */}
      <p className="mt-10 text-gray-700 text-lg">
        Happy Valentine's Day, my love! 💖
      </p>
      <p className="text-gray-700 text-lg">Moni fere tokun tokun 💖</p>

      {/* Swiper for Your Names */}
      <div className="mt-8">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSlideChange={handleSlideChange}
          className="w-full max-w-xs bg-white shadow-lg rounded-xl p-6"
        >
          {myNames.map((name, i) => (
            <SwiperSlide key={i} className="swiper-slide-fade">
              <div className="text-2xl font-bold text-blue-500 p-1">
                <p className="text-gray-600 text-lg">Love from:</p>
                {name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
