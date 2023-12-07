export const stopScroll = {
  body: document.body,
  header: document.querySelector("header"),
  scrollPosition: 0,
  isScrollable: true,
  enable(overflowY = "hidden") {
    this.scrollPosition = window.scrollY;
    this.body.style.overflowY = overflowY;
    this.body.style.position = "fixed";
    this.body.style.width = "100%";
    this.body.style.marginTop = `-${this.scrollPosition}px`;
    this.isScrollable = false;
    console.log(this.header);
  },
  disable() {
    this.body.style.overflowY = "";
    this.body.style.position = "";
    this.body.style.width = "";
    this.body.style.marginTop = "";
    window.scrollTo(0, this.scrollPosition);
    this.isScrollable = true;
  },
};
