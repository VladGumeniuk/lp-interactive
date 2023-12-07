export const carts = {
  obj: {
    item_count: 0,
  },
  isUpdating: false,
  checkout() {
    this.isLoading = true;
    window.location.href = "/checkout";
  },
  async init() {
    await this.getCart();
  },
  async getCart() {
    const response = await fetch("/cart.js");
    const data = await response.json();
    this.obj = data;
  },
  async addItem(key, properties) {
    await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        items: [
          {
            id: key,
            quantity: 1,
            properties: {
              name: `${properties}`,
            },
          },
        ],
      }),
    });
    await this.getCart();
  },
  async changeItem(key, quantity) {
    this.isUpdating = true;
    await fetch("/cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        id: key,
        quantity: quantity,
      }),
    });
    await this.getCart();
    this.isUpdating = false;
  },
  async removeItem(key) {
    return this.changeItem(key, 0);
  },
  currency(num) {
    let res = num / 100;
    return res.toFixed(2);
  },
};
