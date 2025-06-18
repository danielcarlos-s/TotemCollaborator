import { ServicesManager } from "../services.js";
import { renderCard } from "../Cards/index.js";

export function initServiceDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = parseInt(urlParams.get("id"));
  const servicesManager = new ServicesManager();
  const service = servicesManager.getServiceById(serviceId);

  if (service) {
    document.getElementById("service-title").textContent = service.name;
    document.getElementById("service-description").textContent = service.description;
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer && service.cards && service.cards.length > 0) {
      cardsContainer.innerHTML = service.cards.map(renderCard).join("");
    } else if (cardsContainer) {
      cardsContainer.innerHTML = "<p>Nenhum card disponível para este serviço.</p>";
    }
  } else {
    document.getElementById("service-title").textContent = "Serviço não encontrado";
    document.getElementById("service-description").textContent =
      "O serviço solicitado não foi encontrado. Por favor, volte e tente novamente.";
  }
}