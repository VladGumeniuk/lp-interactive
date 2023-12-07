import { selector } from "@/constants";
import Alpine from "alpinejs";
export const header = () => ({
  prevScrollPos: window.pageYOffset,
  scrollHandler() {
    const $el = this.$el; //means header wrapper
    const currentScrollPos = window.pageYOffset;
    if (
      this.prevScrollPos >=
      this.offset + this.getHeight(selector.announcementBar)
    ) {
      $el.style.transform = `translateY(-100%)`;
      if (this.prevScrollPos > currentScrollPos) {
        $el.style.transform = `unset`;
      } else {
        $el.style.transform = `translateY(-100%)`;
      }
    }
    this.prevScrollPos = currentScrollPos;
    this.offset = this.getHeight(selector.header);
  },
  offset: 0,
  init() {
    const headerHeight = this.getHeight(selector.header);
    const announcementBarHeight = this.getHeight(selector.announcementBar);
    this.offset = headerHeight + announcementBarHeight;
  },
  getHeight(selector) {
    return document.querySelector(selector)
      ? document.querySelector(selector).offsetHeight
      : 0;
  },
  activeMenu: "",
  removeActiveMenu() {
    this.activeMenu = "";
  },
  changeActiveMenu(activeMenu) {
    this.activeMenu = activeMenu;
  },
});
