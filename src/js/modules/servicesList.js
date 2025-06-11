
// Módulo para lista de serviços
import { ServicesManager } from './services.js';

export class ServicesList {
  constructor() {
    this.servicesManager = new ServicesManager();
  }

  createServiceListItem(service) {
    const popularBadge = service.popular ? '<span class="badge bg-success ms-2">Popular</span>' : '';
    
    return `
      <div class="card service-card mb-3">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-auto">
              <div class="rounded-circle d-flex align-items-center justify-content-center ${service.iconClass}" style="width: 64px; height: 64px;">
                <i class="${service.icon}" style="font-size: 2rem;"></i>
              </div>
            </div>
            <div class="col">
              <h5 class="card-title mb-1 d-flex align-items-center">
                ${service.name}
                ${popularBadge}
              </h5>
              <p class="card-text text-muted mb-0">${service.description}</p>
            </div>
            <div class="col-auto">
              <a href="service-detail.html?id=${service.id}" class="btn btn-outline-primary">
                Ver Detalhes <i class="fas fa-chevron-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  loadAllServices() {
    const servicesList = document.getElementById('services-list');
    if (servicesList) {
      const services = this.servicesManager.getAllServices();
      servicesList.innerHTML = services.map(service => this.createServiceListItem(service)).join('');
    }
  }

  init() {
    this.loadAllServices();
  }
}