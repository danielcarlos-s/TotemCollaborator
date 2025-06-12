// Módulo para lista de serviços
//-----------------------------------------------------------------------//

import { ServicesManager } from "./services.js";

export class ServicesList {
  constructor() {
    this.servicesManager = new ServicesManager();
  }

  createServiceListItem(service) {
    const popularBadge = service.popular
      ? '<span class="badge bg-success ms-2">Popular</span>'
      : ""; //  badge para serviços populares

    return `
      <div class="service-list">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="service-icon ${service.iconClass}">
                  <i class="${service.icon}"></i>
                </div>
              </div>
              <div class="col">
                <h5 class="card-title mb-1 d-flex align-items-center">
                  ${service.name}
                  ${popularBadge}
                </h5>
                <p class="mb-0">
                  ${service.description}
                </p>
              </div>
              <div class="col-auto">
                <a class="service-icon-next">
                  <i class="fas fa-chevron-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
    `;
  }

  loadAllServices() {
    const servicesList = document.getElementById("services-list");
    if (servicesList) {
      const services = this.servicesManager.getAllServices();
      servicesList.innerHTML = services
        .map((service) => this.createServiceListItem(service))
        .join("");
    }
  }

  init() {
    this.loadAllServices();
  }
}
