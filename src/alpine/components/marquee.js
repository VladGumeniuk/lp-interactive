export const marquee = () => ({
  marqueeInner: null,
  marqueeEls: null,
  marqueeWidth: 0.0,
  marqueeHeight: 0.0,
  init() {
    /*
      add data attribute 'data-marquee-inner' to parent node of x-data="marquee"
      add data attribute 'data-marquee-el' to each element of marquee
      don't forget about overflow-hidden in section and make sure your marquee is ABSOLUTE and have left-0
    */
    setTimeout(() => {
      this.marqueeLogic();
    }, 100);
  },
  marqueeLogic() {
    this.marqueeInner = this.$el.closest("[data-marquee-inner]");
    this.marqueeEls = this.$el.querySelectorAll("[data-marquee-el]");
    this.marqueeWidth = 0.0;
    this.marqueeHeight = 0.0;

    this.marqueeEls.forEach((el) => {
      let elWidth = el.getBoundingClientRect().width;
      let elHeight = el.getBoundingClientRect().height;

      elWidth += parseInt(
        window.getComputedStyle(el).getPropertyValue("margin-left")
      );
      elWidth += parseInt(
        window.getComputedStyle(el).getPropertyValue("margin-right")
      );

      elHeight += parseInt(
        window.getComputedStyle(el).getPropertyValue("margin-top")
      );
      elHeight += parseInt(
        window.getComputedStyle(el).getPropertyValue("margin-bottom")
      );

      this.marqueeWidth += elWidth;
      if (elHeight > this.marqueeHeight) {
        this.marqueeHeight = elHeight;
      }
    });

    /* remove duplicates */
    this.$el
      .querySelectorAll("[data-clone-marquee-el]")
      .forEach((clone) => clone.remove());

    if (!this.marqueeWidth) {
      return;
    }

    let duplicateTimes = Math.ceil(
      document.body.getBoundingClientRect().width / this.marqueeWidth
    );

    this.$el.style.width = `${this.marqueeWidth}px`;
    this.marqueeInner.style.height = `${this.marqueeHeight}px`;

    this.calculateDuplicates(this.marqueeEls, duplicateTimes);
  },
  calculateDuplicates(elements, duplicateTimes) {
    for (let i = 0; i < duplicateTimes; i++) {
      elements.forEach((el) => {
        let clone = el.cloneNode(true);
        clone.removeAttribute("data-marquee-el");
        clone.setAttribute("data-clone-marquee-el", true);
        this.$el.appendChild(clone);
      });
    }
  },
});
