export const find = {
  obj: null,
  async init(query) {
    const response = await fetch(`/search/suggest.json?q=${query}`);
    const data = await response.json();
    this.obj = data;
  },
};
