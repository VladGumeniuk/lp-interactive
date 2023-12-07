const btnLoader = `
<span class="btn-loader">
  <span class="btn-loader__dot"></span>
  <span class="btn-loader__dot"></span>
  <span class="btn-loader__dot"></span>
</span>
`;

const buttons = document.querySelectorAll(
  "button.btn.btn--filled, button.btn.btn--pill, button.btn.btn--outline"
);
buttons.forEach((button) => {
  button.insertAdjacentHTML("beforeend", btnLoader);
});
