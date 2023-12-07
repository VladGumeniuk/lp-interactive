/**
 * imports
 */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./css/main.css";
import "animate.css";
import Alpine from "alpinejs";
import AsyncAlpine from "async-alpine";
AsyncAlpine.init(Alpine);

// helpers
import "./helpers";

//Alpine plugins
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";

//stores
import { mobileMenu } from "@/alpine/store/mobile-menu";
import { collectionFiltersStore } from "@/alpine/store/collection-filters-store";
import { search } from "@/alpine/store/search";
import { stopScroll } from "@/alpine/store/stop-scroll";
import { cart } from "@/alpine/store/cart";
import { drawer } from "@/alpine/store/drawer";
import { popup } from "@/alpine/store/popup";
import { carts } from "@/alpine/store/carts";
import { find } from "@/alpine/store/find";

//components
import components from "@/alpine/components";

window.Alpine = Alpine;

//plugins more info here https://alpinejs.dev/start-here
Alpine.plugin(intersect);
Alpine.plugin(collapse);

//stores
Alpine.store("mobile-menu", mobileMenu); // use global search 'mobile-menu' how this used
Alpine.store("collectionFiltersStore", collectionFiltersStore);
Alpine.store("stop-scroll", stopScroll);
Alpine.store("search", search);
Alpine.store("cart", cart);
Alpine.store("drawer", drawer);
Alpine.store("popup", popup);
Alpine.store("carts", carts);
Alpine.store("find", find);

//bundle components
Alpine.data("addressesSwitch", components.addressesSwitch); // use global search 'addressesSwitch' how this used
Alpine.data("productGallery", components.productGallery);
Alpine.data("accordion", components.accordion);
Alpine.data("klaviyoForm", components.klaviyoForm);
Alpine.data("videoToggler", components.videoToggler);
Alpine.data("marquee", components.marquee);
Alpine.data("faq", components.faq);
Alpine.data("stickyFilters", components.stickyFilters);
Alpine.data("header", components.header);
Alpine.data("dropdown", components.dropdown);
Alpine.data("blog", components.blog);
Alpine.data("printArticle", components.printArticle);
Alpine.data("productQuickOrder", components.productQuickOrder);
Alpine.data("account", components.account);
Alpine.data("datepicker", components.datepicker);
Alpine.data("pdpHero", components.pdpHero);
Alpine.data("video", components.video);

//async components
AsyncAlpine.data("collectionFilters", () =>
  import("./alpine/components/clp-filters")
);
AsyncAlpine.data("swiperSlider", () =>
  import("./alpine/components/swiper-sliders")
);

AsyncAlpine.start();
Alpine.start();
