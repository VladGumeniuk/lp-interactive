import Alpine from "alpinejs";

export const drawer = {
  open: false,
  id: "",
  title: "",
  hide() {
    this.open = false;
    Alpine.store("stop-scroll").disable();
  },
  show() {
    this.open = true;
    Alpine.store("stop-scroll").enable();
  },
};
