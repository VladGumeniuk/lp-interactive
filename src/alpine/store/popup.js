import Alpine from "alpinejs";

export const popup = {
  isOpen: false,
  activePopup: "",
  //used for multiple popups
  id: "",
  //popup key required
  show({popup, id = ""} = {}) {
    this.isOpen = true;
    this.activePopup = popup;
    this.id = id;
    Alpine.store("stop-scroll").enable();
  },
  hide() {
    this.isOpen = false;
    this.activePopup = "";
    this.id = "";
    Alpine.store("stop-scroll").disable();
  },
};
