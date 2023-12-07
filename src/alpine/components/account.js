import { login, register, reset } from "@/alpine/utils/api";

export const account = () => ({
  login_tab: "login",
  loginEmail: "",
  loginPassword: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  status: false,
  statusMessage: "[data-status-message]",
  statusContainer: "[data-status-paste]",
  loading: false,
  changeUrl(url) {
    window.history.replaceState({}, url, url);
  },
  clearStatus() {
    const statusContainer = this.$root.querySelector(this.statusContainer);
    if (statusContainer) {
      statusContainer.innerHTML = "";
    }
    this.status = true;
  },
  checkForStatus(response) {
    let dom = document.createElement("div");
    dom.innerHTML = response.data;
    const statusMessage = dom.querySelector(this.statusMessage);
    const statusContainer = this.$root.querySelector(this.statusContainer);

    console.log(dom);

    this.loading = false;

    if (statusMessage) {
      if (statusContainer) {
        statusContainer.innerHTML = "";
        statusContainer.append(statusMessage);
      }

      this.status = true;
      return;
    }

    window.location.href = "/account";
  },
  async loginFormSubmit() {
    try {
      this.loading = true;

      let response = await login({
        email: this.loginEmail.trim(),
        password: this.loginPassword.trim(),
      });
      console.log("Form successfully submitted.");

      this.checkForStatus(response);
    } catch (e) {
      console.log(e);
    }
  },
  async registerFormSubmit() {
    try {
      this.loading = true;

      let response = await register({
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email.trim(),
        password: this.password.trim(),
      });
      console.log("Form successfully submitted.");

      this.checkForStatus(response);
    } catch (e) {
      console.log(e);
    }
  },
  async resetFormSubmit() {
    try {
      this.loading = true;

      let response = await reset({ email: this.loginEmail.trim() });
      console.log("Form successfully submitted.");

      this.checkForStatus(response);
    } catch (e) {
      console.log(e);
    }
  },
});
