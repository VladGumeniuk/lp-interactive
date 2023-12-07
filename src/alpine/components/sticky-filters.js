import { selector } from "@/constants";

export const stickyFilters = () => ({
  prevScrollPos: window.pageYOffset,
  anchorPosition: 0,
  init() {
    this.anchorPosition =
      document.querySelector(selector.filtersAnchor).getBoundingClientRect()
        .top + window.pageYOffset;
  },
  scrollHandler() {
    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos >= this.anchorPosition) {
      if (this.prevScrollPos > currentScrollPos) {
        this.$el.style.transform = `translateY(-100%)`;
      } else {
        this.$el.style.transform = `translateY(0)`;
      }
    } else {
      this.$el.style.transform = `translateY(0)`;
    }

    this.prevScrollPos = currentScrollPos;
  },
});
