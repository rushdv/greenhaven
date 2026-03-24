import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Breathe Life Into Your Home",
    subtitle: "Discover handpicked indoor plants that purify air and uplift your space.",
    cta: "Shop Plants",
    link: "/plants",
    bg: "from-green-900/70 to-green-700/50",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
  },
  {
    id: 2,
    title: "Expert Care, Greener Results",
    subtitle: "Book a consultation with our plant specialists and watch your garden thrive.",
    cta: "Meet Experts",
    link: "/plants",
    bg: "from-emerald-900/70 to-teal-700/50",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1400&q=80",
  },
  {
    id: 3,
    title: "Style Your Space Naturally",
    subtitle: "Transform any corner into a lush, calming sanctuary with our curated plant collection.",
    cta: "Explore Now",
    link: "/plants",
    bg: "from-lime-900/70 to-green-600/50",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1400&q=80",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[520px] md:h-[620px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`} />
              <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-xl mb-4">
                  {slide.title}
                </h1>
                <p className="text-green-100 text-base sm:text-lg max-w-lg mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
