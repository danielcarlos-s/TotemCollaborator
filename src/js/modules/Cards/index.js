// Exemplo correto:
import { cardDocumentos } from "./cardDocumentos.js";
import { cardComoSolicitar } from "./cardComoSolicitar.js";
// export { cardInfoAtendimento } from "./cardInfoAtendimento.js";
// ...outros cards

import { cardNumber } from "./cardNumber.js";
import { cardConsulta } from "./cardConsulta.js";
import { cardInfo } from "./cardInfo.js";
import { cardForm } from "./cardForm.js";
import { cardDocs } from "./cardDocs.js";
// ...adicione outros cards aqui

export function renderCard(card) {
  switch (card.type) {
    case "documentos":
      return cardDocumentos(card);
    case "como-solicitar":
      return cardComoSolicitar(card);

    case "cardNumeros":
      return cardNumber(card);
    case "cardInfo":
      return cardInfo(card);
    case "cardFormulario":
      return cardForm(card);
    case "cardDocumentos":
      return cardDocs(card);
    case "cardConsulta":
      return cardConsulta(card);
    // ...outros tipos
    default:
      return `<p>Tipo de card não suportado.</p>`;
  }
}