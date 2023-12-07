import { selector } from "@/constants";

export const faq = (initialValue = "All") => ({
  category: initialValue,
  changeCategory(category) {
    this.category = category;
    const element = document.getElementById(category);
    const filtersFaqHeight = document.querySelector(
      selector.filtersFaq
    ).offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - filtersFaqHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  },
});
