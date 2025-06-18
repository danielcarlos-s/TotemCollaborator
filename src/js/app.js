import { Clock } from "./modules/clock.js";
import { initServiceDetailPage } from "./modules/pages/serviceDetail.js";
import { initHomePage } from "./modules/pages/home.js";
import { initServicosPage } from "./modules/pages/servicos.js"; // ADICIONE ESTA LINHA

class App {
  constructor() {
    this.clock = new Clock();
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split("/").pop() || "index.html";
    return filename.replace(".html", "") || "index";
  }

  init() {
    this.clock.init();
    this.configureBackButton();
    switch (this.currentPage) {
      case "index":
        initHomePage();
        break;
      case "service-detail":
        initServiceDetailPage();
        break;
      case "servicos": // ADICIONE ESTE CASE
        initServicosPage();
        break;
      // outros cases...
    }
  }

  configureBackButton() {
    const backButton = document.querySelector(".btn-outline-light");
    if (backButton) {
      backButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "index.html";
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});