// Exemplo correto:
export { cardDocumentos } from "./cardDocumentos.js";
export { cardComoSolicitar } from "./cardComoSolicitar.js";
// export { cardInfoAtendimento } from "./cardInfoAtendimento.js";
// ...outros cards

// import { cardStatus } from "./cardStatus.js";
// import { cardNumber } from "./cardNumber.js";
// import { cardList } from "./cardList.js";
// import { cardInfo } from "./cardInfo.js";
// import { cardForm } from "./cardForm.js";
// import { cardDocs } from "./cardDocs.js";
// ...adicione outros cards aqui

export function renderCard(card) {
  switch (card.type) {
    case "documentos":
      return cardDocumentos(card);
    case "como-solicitar":
      return cardComoSolicitar(card);
    case "info-atendimento":
      return cardInfoAtendimento(card);
    // Adicione outros tipos de card conforme necessário
    default:
      return `<p>Tipo de card não suportado.</p>`;
  }
}