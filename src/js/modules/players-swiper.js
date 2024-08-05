import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function playersSwiper() {
  const swiper = new Swiper("#swiper-players", {
    slidesPerView: 1,
    spaceBetween: 94,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: "#sliderPrev",
      nextEl: "#sliderNext",
    },

    pagination: {
      el: ".players-pagination",
      type: "fraction",
    },

    breakpoints: {
      900: {
        slidesPerView: 2,
      },

      1292: {
        slidesPerView: 3,
      },
    },
  });
}

export default playersSwiper;
