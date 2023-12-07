//DOCS https://alpinejs.dev/globals/alpine-store#registering-a-store
//Check main.js file how to register store
import Alpine from "alpinejs";
import api from "@/alpine/utils/api";

export const search = {
  visible: false,
  loading: false,
  searchResult: false,
  products: [],
  queries: [],
  articles: [],
  collections: [],
  pages: [],
  resultsCount: 0,
  categoriesCount: 0,
  activeTab: "products",
  hide() {
    this.visible = false;
    Alpine.store("stop-scroll").disable();
  },
  show() {
    this.visible = true;
    Alpine.store("stop-scroll").enable();
  },
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      Alpine.store("stop-scroll").enable();
      return;
    }
    Alpine.store("stop-scroll").disable();
  },
  async renderSearch(e) {
    this.loading = true;
    this.searchResult = false;
    this.resultsCount = 0;
    this.categoriesCount = 0;
    this.products = [];
    this.queries = [];
    this.articles = [];
    this.collections = [];
    this.pages = [];
    let url = `/search/suggest.json`;
    let params = {
      q: e,
      resources: {
        limit: 10,
        limit_scope: "each",
      },
    };

    try {
      if (params.q != "") {
        const response = await api.get(url, { responseType: "json", params });
        if (response && response.resources && response.resources.results) {
          const searchResults = response.resources.results;
          this.searchResult = true;
          Object.keys(searchResults).forEach((key) => {
            const item = searchResults[key];
            this[key] = item;
            this.resultsCount += item.length;
            if (item.length > 0) {
              this.categoriesCount++;
            }
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  },
};
