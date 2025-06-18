import { HomeServicesManager } from "./homeServices.js";

export class HomeServicesList {
  constructor() {
    this.servicesManager = new HomeServicesManager();
  }

  createServiceCard(service) {
    const popularBadge = service.popular
      ? '<span class="badge bg-success ms-2">Popular</span>'
      : "";

    return `
      <div class="home-list" onclick="window.location.href='${service.url}'">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-3">
            <div class="service-icon ${service.iconClass}">
              <i class="${service.icon}"></i>
            </div>
          </div>
          <div class="col">
            <h5 class="mt-2 d-flex text-left">
              ${service.name} 
              ${popularBadge}
            </h5>
          </div>
        </div>
        <p class="mb-0">${service.description}</p>
        <a class="btn-card">Acessar serviço</a>
      </div>
    `;
  }

  init() {
    const services = this.servicesManager.getAllHomeServices();
    const container = document.getElementById("home-services");
    if (container) {
      container.innerHTML = services.map(this.createServiceCard).join("");
    }
  }
}