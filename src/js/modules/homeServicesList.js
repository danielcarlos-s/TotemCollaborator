// Módulo para lista de serviços
//-----------------------------------------------------------------------//

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
      <div class="service-list">
          <div class="d-flex align-items-center mb-2">
            <div class="flex-shrink-0 me-3">
              <div class="service-icon ${service.iconClass}">
                <i class="${service.icon}"></i>
              </div>
            </div>
            <div class="col">
              <h5 class="mt-2 d-flex text-left">
                ${service.name} 
              </h5>
            </div>
          </div>
          <p class="mb-0">${service.description}</p>
          <a class="btn-card"> Acessar serviço </a>
        </div>
    `;
  }

  loadHomeServices() {
    const container = document.getElementById("home-services");
    if (container) {
      const services = this.servicesManager.getAllHomeServices();
      container.innerHTML = services
        .map((service) => this.createServiceCard(service))
        .join("");
    }
  }

  init() {
    this.loadHomeServices();
  }
}
