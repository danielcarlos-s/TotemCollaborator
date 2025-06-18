import { ServicesList } from "./servicesList.js";

export function initServicosPage() {
  const servicesList = new ServicesList();
  servicesList.init();
}