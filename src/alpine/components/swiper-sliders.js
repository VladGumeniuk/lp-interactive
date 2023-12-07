import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper";
Swiper.use([Autoplay, Pagination, Navigation, FreeMode, Mousewheel]);

const options = {
  "care-team": {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  },
  "accordion-slider": {
    slidesPerView: 1,
    loop: false,
    // allowTouchMove: false,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  },
  "multi-column": {
    slidesPerView: 1.2,
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      744: {
        slidesPerView: 2.2,
      },
      1150: {
        slidesPerView: 3.1,
      },
      1536: {
        slidesPerView: 3.5,
      },
      1920: {
        slidesPerView: 4,
      },
    },
  },
  "product-cart": {
    slidesPerView: 1.2,
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      744: {
        slidesPerView: 2.2,
      },
      1150: {
        slidesPerView: 3.3,
      },
      1536: {
        slidesPerView: 4.3,
      },
    },
  },
  "media-ugc": {
    slidesPerView: 1.1,
    spaceBetween: 30,
    breakpoints: {
      744: {
        slidesPerView: 2.1,
      },
      1150: {
        slidesPerView: 3.3,
      },
      1536: {
        slidesPerView: 4.3,
      },
    },
  },
  "text-with-icon": {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
  },
  "blog-post": {
    slidesPerView: 1.2,
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      744: {
        slidesPerView: 2.2,
      },
      1150: {
        slidesPerView: 2.6,
      },
      1536: {
        slidesPerView: 3.5,
      },
      1920: {
        slidesPerView: 3.9,
      },
    },
  },
  "logo-list": {
    slidesPerView: 3,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    spaceBetween: 30,
    breakpoints: {
      744: {
        slidesPerView: 4.7,
      },
      1150: {
        slidesPerView: 7,
      },
    },
  },
  "slider-text": {
    slidesPerView: 1.3,
    loop: true,
    speed: 3000,
    spaceBetween: 50,
    breakpoints: {
      744: {
        slidesPerView: 2.5,
        spaceBetween: 60,
      },
      1150: {
        slidesPerView: 3.5,
      },
    },
  },
  "drawer-slider": {
    slidesPerView: 1.3,
    spaceBetween: 12,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      // dynamicBullets: true,
    },
  },
  "mobile-menu": {
    slidesPerView: 1.7,
    spaceBetween: 12,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      // dynamicBullets: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 2,
      },
    },
  },
  "mega-menu": {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
  },
};

export const swiperSlider = (swiperSelector, sliderOptions) => ({
  slider: null,
  slides: null,
  init() {
    this.slider = new Swiper(`[data-section-id="${swiperSelector}"] .swiper`, {
      ...options[sliderOptions],
    });
  },
  stopAutoPlay() {
    this.slider.autoplay.stop();
  },
  startAutoPlay() {
    this.slider.autoplay.start();
  },
});
