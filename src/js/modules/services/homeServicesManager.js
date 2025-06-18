export { cardDocumentos } from "./cardDocumentos.js";
export { cardComoSolicitar } from "./cardComoSolicitar.js";
export { cardInfoAtendimento } from "./cardInfoAtendimento.js";
// Importe outros grupos conforme necessário

export class HomeServicesManager {
  constructor() {
    this.servicesData = this.getHomeServicesData();
  }

  getHomeServicesData() {
    // Junte todos os grupos em um único array
    return [
      ...saudeServices,
      ...financasServices,
      // ...adicione outros grupos aqui
    ];
  }

  getAllHomeServices() {
    return this.servicesData;
  }
}