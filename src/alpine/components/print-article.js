import Alpine from "alpinejs";

export const printArticle = () => ({
  print(dataHandle, disableScroll = false) {
    const printContents = document
      .querySelector(`[data-article-print-${dataHandle}]`)
      .cloneNode(true);
    printContents.classList.remove("hidden");
    printContents.classList.add("print-clone");
    document.getElementById("app").style.display = "none";
    document.body.append(printContents);
    if (disableScroll) {
      Alpine.store("stop-scroll").disable();
    }
    window.print();
    window.onafterprint = () => {
      document.querySelector(".print-clone").remove();
      document.getElementById("app").style.removeProperty("display");
      if (disableScroll) {
        Alpine.store("stop-scroll").enable();
      }
    };
  },
});
