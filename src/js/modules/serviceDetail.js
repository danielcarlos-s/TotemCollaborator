import { ServicesManager } from "./services.js";
import { createCard } from "./components.js";

function loadServiceDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = parseInt(urlParams.get("id"));

  const servicesManager = new ServicesManager();
  const service = servicesManager.getServiceById(serviceId);

  if (service) {
    // Atualizar título e descrição
    document.getElementById("service-title").textContent = service.name;
    document.getElementById("service-description").textContent = service.description;

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
      cardsContainer.innerHTML = "<p>Nenhum card disponível para este serviço.</p>";
    }
  } else {
    console.error("Serviço não encontrado!");
    document.getElementById("service-title").textContent = "Serviço não encontrado";
    document.getElementById("service-description").textContent =
      "O serviço solicitado não foi encontrado. Por favor, volte e tente novamente.";
  }
}

document.addEventListener("DOMContentLoaded", loadServiceDetails);