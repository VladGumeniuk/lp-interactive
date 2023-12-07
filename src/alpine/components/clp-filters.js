import api from "@/alpine/utils/api";
import { selector } from "@/constants";

export const collectionFilters = () => ({
  prevScrollPos: window.pageYOffset,
  anchorPosition: 0,
  isLoading: true,
  activeCollection: {
    url: window.location.href.split("?")[0],
    handle: window.location.pathname.split("/").pop(),
  },
  params: "",
  async init() {
    this.params = this.serializeForm(
      document.querySelector(selector.facetFiltersForm)
    );

    this.slideToActiveCollection();

    this.isLoading = false;

    this.anchorPosition =
      document.querySelector("[data-filters-anchor]").getBoundingClientRect()
        .top + window.pageYOffset;

    window.onpopstate = () => {
      window.location.reload();
    };
  },

  scrollCollHandler() {
    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos >= this.anchorPosition) {
      if (this.prevScrollPos < currentScrollPos) {
        this.$el.style.transform = `translateY(-100%)`;
      } else {
        this.$el.style.transform = `translateY(0)`;
      }
    } else {
      this.$el.style.transform = `translateY(0)`;
    }

    this.prevScrollPos = currentScrollPos;
  },

  changeUrl(url) {
    window.history.pushState({}, url, url);
    this.activeCollection.url = url;
  },

  async clearFilter(url) {
    this.params = url.split("?")[1];
    this.changeUrl(url);
    await this.renderCollection(this.activeCollection.handle);
  },

  createQueryParams(form) {
    let query;
    const clearUrl = this.activeCollection.url.split("?")[0];
    this.params = this.serializeForm(form);
    if (this.params) {
      query = clearUrl + "?" + this.params;
    } else {
      query = clearUrl;
    }
    return query;
  },

  serializeForm(form) {
    let params = "";
    const elements = form.querySelectorAll("input");
    for (let i = 0; i < elements.length; ++i) {
      const element = elements[i];
      const name = element.name;
      const value = element.value;
      if (value && (element.checked || name.includes("filter"))) {
        params += `&${name}=${value}`;
      }
    }
    return params.substring(1);
  },

  async renderCollection(collectionHandle) {
    let url = `/collections/${collectionHandle}?${this.params}`;
    const currentLayout = document.getElementById(`main-collection`);

    try {
      const response = await api.get(url, { responseType: "document" });
      const newLayout = response.getElementById(`main-collection`);

      if (newLayout) {
        // render banner
        currentLayout.querySelector(".banner").outerHTML =
          newLayout.querySelector(".banner").outerHTML;
        // render filters
        currentLayout.querySelector("#FacetFiltersForm").outerHTML =
          newLayout.querySelector("#FacetFiltersForm").outerHTML;
        // render products
        currentLayout.querySelector("#coll-grid").outerHTML =
          newLayout.querySelector("#coll-grid").outerHTML;
      } else {
        currentLayout.outerHTML = ``;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async applyFilters() {
    this.changeUrl(
      this.createQueryParams(document.querySelector(selector.facetFiltersForm))
    );
    await this.renderCollection(this.activeCollection.handle);
  },

  async changeCollection() {
    this.params = "";
    this.activeCollection.url = this.$el.href;
    this.activeCollection.handle = this.activeCollection.url.split("/").pop();
    await this.renderCollection(this.activeCollection.handle);
    this.changeUrl(this.activeCollection.url);
    this.scrollToAnchor();
  },

  scrollToAnchor() {
    const anchorBlock = document.querySelector(`[data-collection-content]`);

    if (anchorBlock) {
      const elementPosition = anchorBlock.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  },

  slideToActiveCollection() {
    setTimeout(() => {
      // mobile slide to
      const parentAnchorBlock = document.querySelector(
        "[data-parent-active-coll]"
      );

      if (parentAnchorBlock) {
        const parentList = parentAnchorBlock.closest(
          "[data-parent-collections-list]"
        );
        parentList.scrollLeft = parentAnchorBlock.getBoundingClientRect().left;
      }
    }, 100);
  },
});
