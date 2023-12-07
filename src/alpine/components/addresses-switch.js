// DOCS https://alpinejs.dev/globals/alpine-data
//Check main.js file how to register components

export const addressesSwitch = ({ addresses }) => ({
  addresses, //will be addresses Array
  visibleForm: false,
  currentlyEditedAddress: null,
  showForm() {
    this.visibleForm = true;
  },
  editAddress(id) {
    this.visibleForm = true
    this.currentlyEditedAddress = this.addresses.find(el => el.id === +id)
    this.scrollFormIntoView()
  },
  cancelEdit() {
    this.visibleForm = false
    this.currentlyEditedAddress = null
    this.scrollFormIntoView();
  },
  scrollFormIntoView() {
    // smaller than screen-lg
    if (window.matchMedia('(max-width: 1023px)').matches) {
      document.querySelector('.address-form').scrollIntoView({ behavior: 'smooth' })
    }
  }
});