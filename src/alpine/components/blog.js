export const blog = (initActiveBlog, showCount) => ({
  activeBlog: initActiveBlog,
  activeBlogLink: initActiveBlog,
  initShowCount: showCount,
  articleShowCount: showCount,
  init() {
    this.slideToActiveBlog();
  },
  changeActiveBlog(blog) {
    this.scrollToAnchor();
    this.activeBlogLink = blog;
    setTimeout(() => {
      this.activeBlog = blog;
      this.articleShowCount = this.initShowCount;
      this.changeUrl(`/blogs/${blog}`);
    }, 1000);
  },
  loadMoreArticles() {
    this.articleShowCount += this.initShowCount;
  },
  scrollToAnchor() {
    const elementPosition = this.$root.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  },
  slideToActiveBlog() {
    setTimeout(() => {
      // mobile slide to
      const parentAnchorBlock = document.querySelector("[data-active-blog]");

      if (parentAnchorBlock) {
        const parentList = parentAnchorBlock.closest("[data-blog-list]");
        parentList.scrollLeft = parentAnchorBlock.getBoundingClientRect().left;
      }
    }, 100);
  },
  changeUrl(url) {
    window.history.replaceState({}, url, url);
  },
});
