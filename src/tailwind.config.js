/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");
const plugin = require("tailwindcss/plugin");
const colors = {
  transparent: "transparent",
  "c-blur-overlay": "rgb(var(--c-blur-overlay) / <alpha-value>)",
  /* ACCENT COLORS */
  current: "currentColor",
  "c-accent-success": "rgb(var(--c-accent-success) / <alpha-value>)",
  "c-accent-warning": "rgb(var(--c-accent-warning) / <alpha-value>)",
  "c-accent-error": "rgb(var(--c-accent-error) / <alpha-value>)",
  // SCHEMA COLOR VARIABLES
  //sc === schema color
  "sc-title": "rgb(var(--sc-title) / <alpha-value>)",
  "sc-subtitle": "rgb(var(--sc-subtitle) / <alpha-value>)",
  "sc-body-primary": "rgb(var(--sc-body-primary) / <alpha-value>)",
  "sc-body-secondary": "rgb(var(--sc-body-secondary) / <alpha-value>)",
  "sc-bg-primary": "rgb(var(--sc-bg-primary) / <alpha-value>)",
  "sc-bg-secondary": "rgb(var(--sc-bg-secondary) / <alpha-value>)",
  "sc-btn-primary-bg-default":
    "rgb(var(--sc-btn-primary-bg-default) / <alpha-value>)",
  "sc-btn-primary-text-default":
    "rgb(var(--sc-btn-primary-text-default) / <alpha-value>)",
  "sc-btn-primary-bg-hover":
    "rgb(var(--sc-btn-primary-bg-hover) / <alpha-value>)",
  "sc-btn-primary-text-hover":
    "rgb(var(--sc-btn-primary-text-hover) / <alpha-value>)",
  "sc-btn-secondary-bg-default":
    "rgb(var(--sc-btn-secondary-bg-default) / <alpha-value>)",
  "sc-btn-secondary-text-default":
    "rgb(var(--sc-btn-secondary-text-default) / <alpha-value>)",
  "sc-btn-secondary-bg-hover":
    "rgb(var(--sc-btn-secondary-bg-hover) / <alpha-value>)",
  "sc-btn-secondary-text-hover":
    "rgb(var(--sc-btn-secondary-text-hover) / <alpha-value>)",
  "sc-link-primary-text-default":
    "rgb(var(--sc-link-primary-text-default) / <alpha-value>)",
  "sc-link-primary-text-hover":
    "rgb(var(--sc-link-primary-text-hover) / <alpha-value>)",
  "sc-link-secondary-text-default":
    "rgb(var(--sc-link-secondary-text-default) / <alpha-value>)",
  "sc-link-secondary-text-hover":
    "rgb(var(--sc-link-secondary-text-hover) / <alpha-value>)",
  // MAIN PROJECT
  blue: "#2A4E8B",
  green: "#06A455",
  "dark-green": "#12874C",
  yellow: "#FFDC40",
  "yellow-highlight": "#FFE76A",
  orange: "#EB9530",
  red: "#DE4D3A",
  black: "#16191C", //site modifications 10/30/60/80 opacity
  white: "#FFFFFF", //site modifications 10/30/60 opacity
  success: "#25C274",
  error: "#F03D3E",
  "gray-1": "#434B54",
  "gray-2": "#5C646C",
  "gray-3": "#8899A6",
  "gray-4": "#BDC7CF",
  "gray-5": "#E7E7E7",
  "gray-6": "#F2F1F0",
};
/* BORDER RADIUS */
const borderRadius = {
  "r-block": "10px",
  "r-block-title": "3px",
};

module.exports = {
  theme: {
    screens: {
      xs: "360px",
      md: "744px",
      lg: "992px",
      smD: "1150px",
      xl: "1280px",
      "2xl": "1536px",
      "2k": "1920px",
      "4k": "2560px",
    },
    extend: {
      backgroundImage: {
        "primary-gradient": "var(--sc-bg-primary-gradient)",
        "secondary-gradient": "var(--sc-bg-secondary-gradient)",
      },
      fontFamily: {
        primary: "var(--font-primary)".split(","),
        secondary: "var(--font-secondary)".split(","),
        // tertiary: ["", ""],
        // quaternary: ["", ""],
        // quinary: ["", ""]
      },
      // fontSize: {
      //   'customValue': ['1.5rem', {
      //     lineHeight: '2rem',
      //     letterSpacing: '-0.01em',
      //     fontWeight: '500',
      //   }]
      // },
      spacing: {
        0.5: "0.125rem" /* 2px */,
        1: "0.25rem" /* 4px */,
        1.5: "0.375rem" /* 6px */,
        2: "0.5rem" /* 8px */,
        2.5: "0.625rem" /* 10px */,
        3: "0.75rem" /* 12px */,
        3.5: "0.875rem" /* 14px */,
        3.75: "0.9375rem" /* 15px */,
        4: "1rem" /* 16px */,
        4.5: "1.125rem" /* 18px */,
        5: "1.25rem" /* 20px */,
        5.5: "1.375rem" /* 22px */,
        6: "1.5rem" /* 24px */,
        6.5: "1.625rem" /* 26px */,
        7: "1.75rem" /* 28px */,
        7.5: "1.875rem" /* 30px */,
        8: "2rem" /* 32px */,
        8.5: "2.125rem" /* 34px */,
        9: "2.25rem" /* 36px */,
        9.5: "2.375rem" /* 38px */,
        10: "2.5rem" /* 40px */,
        11: "2.75rem" /* 44px */,
        12: "3rem" /* 48px */,
        12.5: "3.125rem" /* 50px */,
        14: "3.5rem" /* 56px */,
        15: "3.75rem" /* 60px */,
        16: "4rem" /* 64px */,
        18: "4.5rem" /* 72px */,
        20: "5rem" /* 80px */,
        22: "5.5rem" /* 88px */,
        24: "6rem" /* 96px */,
        25: "6.25rem" /* 100px */,
        28: "7rem" /* 112px */,
        30: "7.5rem" /* 120px */,
        32: "8rem" /* 128px */,
        36: "9rem" /* 144px */,
        37.5: "9.375rem" /* 150px */,
        40: "10rem" /* 160px */,
        44: "11rem" /* 176px */,
        48: "12rem" /* 192px */,
        50: "12.5rem" /* 200px */,
        52: "13rem" /* 208px */,
        56: "14rem" /* 224px */,
        60: "15rem" /* 240px */,
        64: "16rem" /* 256px */,
        72: "18rem" /* 288px */,
        80: "20rem" /* 320px */,
        96: "24rem" /* 384px */,
      },
      colors,
      boxShadow: {
        "box-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "btn-outline": "",
      },
      borderRadius,
      ringWidth: {
        3: "3px",
      },
      ringOffsetWidth: {
        3: "3px",
      },
      zIndex: {
        1: "1",
        5: "5",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        full: "2147483647",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
      cursor: {
        "cursor-close": "var(--cursor-close) 28 28, auto",
      },
      gridTemplateColumns: {
        "2-max": "repeat(2, minmax(0, max-content))",
        "3-max": "repeat(3, minmax(0, max-content))",
        "4-max": "repeat(4, minmax(0, max-content))",
        "5-max": "repeat(5, minmax(0, max-content))",
        "6-max": "repeat(6, minmax(0, max-content))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      addVariant("rte-h", ["& h1", "& h2", "& h3", "& h4", "& h5", "& h6"]);
      addVariant("rte-p", "& p");
      addVariant("child-br", "& br");
      addVariant("child-a", "& a");
      addVariant("child-b", ["& strong", "& b"]);
      addVariant("sw-bullet", "& .swiper-pagination-bullet");
      addVariant("sw-bullet-active", "& .swiper-pagination-bullet-active");
      addVariant("sw-thumb-active", "&.swiper-slide-thumb-active");
      addVariant("child-ul", ["& ul", "& ol"]);
    }),
  ],
  content: [
    path.resolve(__dirname, "**/*.js"),
    path.resolve(__dirname, "../shopify/**/*.liquid"),
  ],
};
