
// Módulo para detalhes de serviços
import { ServicesManager } from './services.js';

export class ServiceDetail {
  constructor() {
    this.servicesManager = new ServicesManager();
  }

  loadServiceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    
    const service = this.servicesManager.getServiceById(serviceId);
    
    if (service) {
      this.updateServiceInfo(service);
      this.loadRequirements(service.requirements);
      this.loadSteps(service.steps);
      this.loadForms(service.forms);
    }
  }

  updateServiceInfo(service) {
    const titleElement = document.getElementById('service-title');
    const descriptionElement = document.getElementById('service-description');
    
    if (titleElement) titleElement.textContent = service.name;
    if (descriptionElement) descriptionElement.textContent = service.description;
  }

  loadRequirements(requirements) {
    const requirementsList = document.getElementById('requirements-list');
    if (requirementsList) {
      requirementsList.innerHTML = requirements.map(req => 
        `<li class="mb-2">${req}</li>`
      ).join('');
    }
  }

  loadSteps(steps) {
    const stepsList = document.getElementById('steps-list');
    if (stepsList) {
      stepsList.innerHTML = steps.map(step => 
        `<li class="mb-3">${step}</li>`
      ).join('');
    }
  }

  loadForms(forms) {
    const formsList = document.getElementById('forms-list');
    if (formsList) {
      if (forms.length > 0) {
        formsList.innerHTML = forms.map(form => `
          <div class="form-item d-flex justify-content-between align-items-center">
            <span class="fw-medium">${form.name}</span>
            <div class="btn-group" role="group">
              <button class="btn btn-outline-primary btn-sm" onclick="window.open('${form.url}', '_blank')">
                <i class="fas fa-eye me-1"></i> Ver
              </button>
              <button class="btn btn-outline-success btn-sm" onclick="window.location.href='${form.url}'">
                <i class="fas fa-download me-1"></i> Baixar
              </button>
            </div>
          </div>
        `).join('');
      } else {
        formsList.innerHTML = '<p class="text-muted">Nenhum formulário disponível para este serviço.</p>';
      }
    }
  }

  init() {
    this.loadServiceDetails();
    this.setupFormHandler();
  }

  setupFormHandler() {
    const serviceForm = document.getElementById('service-form');
    if (serviceForm) {
      serviceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Serviço solicitado com sucesso!');
      });
    }
  }
}