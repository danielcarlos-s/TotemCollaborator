import { ServicesManager } from "./services.js";
import {
  createCard,
  cardDocumentos,
  cardComoSolicitar,
  cardInfoAtendimento,
  cardSolicitarServico,
  cardFormulariosDisponiveis,
  cardConsultarStatus
} from "./components.js";

function renderCard(card) {
  switch (card.type) {
    case "documentos":
      return cardDocumentos(card);
    case "como-solicitar":
      return cardComoSolicitar(card);
    case "info-atendimento":
      return cardInfoAtendimento(card);
    case "solicitar-servico":
      return cardSolicitarServico(card);
    case "formularios-disponiveis":
      return cardFormulariosDisponiveis(card);
    case "consultar-status":
      return cardConsultarStatus(card);
    default:
      return createCard(card);
  }
}

function loadServiceDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = parseInt(urlParams.get("id"));

  const servicesManager = new ServicesManager();
  const service = servicesManager.getServiceById(serviceId);

  if (service) {
    // Atualizar título e descrição
    const titleEl = document.getElementById("service-title");
    const descEl = document.getElementById("service-description");
    if (titleEl) titleEl.textContent = service.name;
    if (descEl) descEl.textContent = service.description;

    // Renderizar os cards dinamicamente
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer && service.cards && service.cards.length > 0) {
      cardsContainer.innerHTML = service.cards.map(renderCard).join("");
    } else if (cardsContainer) {
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