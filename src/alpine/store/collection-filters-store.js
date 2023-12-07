const getFilters = (payload = null) => {
  if (payload) {
    const json = payload.getElementById("collectionFilters");
    return json ? JSON.parse(json.textContent) : "{}";
  }
  const json = document.getElementById("collectionFilters");
  return json ? JSON.parse(json.textContent) : "{}";
};

export const collectionFiltersStore = {
  filters: {},
  init() {
    this.filters = getFilters();
  },

  toggle(filterBlock) {
    this.filters[filterBlock].isOpen = !this.filters[filterBlock].isOpen;

    for (let key of Object.keys(this.filters)) {
      if (key !== filterBlock) {
        this.filters[key].isOpen = false;
      }
    }
  },

  toggleOne(filterBlock) {
    this.filters[filterBlock].isOpen = !this.filters[filterBlock].isOpen;
  },

  show(filterBlock) {
    this.filters[filterBlock].isOpen = true;
  },

  hide(filterBlock) {
    this.filters[filterBlock].isOpen = false;
  },

  updateFilters(payload) {
    this.filters = getFilters(payload);
  },

  closeAll() {
    for (let key of Object.keys(this.filters)) {
      this.filters[key].isOpen = false;
    }
  },
};
