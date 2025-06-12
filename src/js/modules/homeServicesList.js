// Módulo para lista de serviços
//-----------------------------------------------------------------------//

import { HomeServicesManager } from './homeServices.js';

export class HomeServicesList {
  constructor() {
    this.servicesManager = new HomeServicesManager();
  }

  createServiceCard(service) {
    const popularBadge = service.popular
      ? '<span class="badge bg-success ms-2">Popular</span>'
      : '';

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

  loadHomeServices() {
    const container = document.getElementById('home-services');
    if (container) {
      const services = this.servicesManager.getAllHomeServices();
      container.innerHTML = services
        .map((service) => this.createServiceCard(service))
        .join('');
    }
  }

  init() {
    this.loadHomeServices();
  }
}
