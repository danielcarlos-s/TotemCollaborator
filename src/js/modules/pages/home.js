import { HomeServicesList } from "../homeServicesList.js";

export function initHomePage() {
  const homeServices = new HomeServicesList();
  homeServices.init();
}