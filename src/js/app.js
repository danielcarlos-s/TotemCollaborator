import { Clock } from "./modules/clock.js";
import { HomeServicesList } from "./modules/homeServicesList.js";
import { ServicesList } from "./modules/servicesList.js";
import { ServicesManager } from "./modules/services.js";
import { createCard } from "./modules/components.js";

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
    // Inicializar relógio em todas as páginas
    this.clock.init();

    // Configurar botão voltar
    this.configureBackButton();

    // Inicializar funcionalidades específicas por página
    switch (this.currentPage) {
      case "index":
        this.initIndexPage();
        break;
      case "servicos":
        this.initServicesPage();
        break;
      case "service-detail":
        this.initServiceDetailPage();
        break;
    }
  }

  configureBackButton() {
    const backButton = document.querySelector(".btn-outline-light");
    if (backButton) {
      backButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back(); // Voltar para a página anterior
        } else {
          window.location.href = "index.html"; // Redirecionar para a página inicial se não houver histórico
        }
      });
    }
  }

  initIndexPage() {
    console.log("Página inicial carregada");
    const homeServices = new HomeServicesList();
    homeServices.init();
  }

  initServicesPage() {
    console.log("Página de serviços carregada");
    const servicesList = new ServicesList();
    servicesList.init();
  }

  initServiceDetailPage() {
    console.log("Página de detalhes do serviço carregada");

    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get("id"));

    const servicesManager = new ServicesManager();
    const service = servicesManager.getServiceById(serviceId);

    if (service) {
      // Atualizar título e descrição
      document.getElementById("service-title").textContent = service.name;
      document.getElementById("service-description").textContent =
        service.description;

      // Renderizar os cards dinamicamente
      const cardsContainer = document.getElementById("cards-container");
      if (service.cards && service.cards.length > 0) {
        cardsContainer.innerHTML = service.cards
          .map((card) =>
            createCard({
              title: card.title,
              description: card.description,
              icon: card.icon,
              colorClass: card.colorClass || "bg-primary", // Classe de cor padrão
            })
          )
          .join("");
      } else {
        cardsContainer.innerHTML =
          "<p>Nenhum card disponível para este serviço.</p>";
      }
    } else {
      console.error("Serviço não encontrado!");
      document.getElementById("service-title").textContent =
        "Serviço não encontrado";
      document.getElementById("service-description").textContent =
        "O serviço solicitado não foi encontrado. Por favor, volte e tente novamente.";
    }
  }
}

// Inicializar aplicação quando DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  const app = new App();
  app.init();
});
