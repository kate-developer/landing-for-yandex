import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function stageSwiper() {
  const swiperStage = new Swiper("#swiper-stage", {
    spaceBetween: 30,

    navigation: {
      prevEl: "#stageSliderPrev",
      nextEl: "#stageSliderNext",
    },

    pagination: {
      el: ".stage-pagination",
      clickable: true,
    },
  });
}

export default stageSwiper;
