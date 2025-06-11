
// Arquivo principal da aplicação
import { Clock } from './modules/clock.js';
// import { ServiceDetail } from './modules/serviceDetail.js';
import { ServicesList } from './modules/servicesList.js';

class App {
  constructor() {
    this.clock = new Clock();
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    return filename.replace('.html', '') || 'index';
  }

  init() {
    // Inicializar relógio em todas as páginas
    this.clock.init();

    // Inicializar funcionalidades específicas por página
    switch (this.currentPage) {
      case 'index':
        this.initIndexPage();
        break;
      case 'servicos':
        this.initServicesPage();
        break;
      // case 'service-detail':
      //   this.initServiceDetailPage();
      //   break;
    }
  }

  initIndexPage() {
    console.log('Página inicial carregada');
    // Funcionalidades específicas da página inicial podem ser adicionadas aqui
  }

  initServicesPage() {
    console.log('Página de serviços carregada');
    const servicesList = new ServicesList();
    servicesList.init();
  }

  // initServiceDetailPage() {
  //   console.log('Página de detalhes do serviço carregada');
  //   const serviceDetail = new ServiceDetail();
  //   serviceDetail.init();
  // }
}

// Inicializar aplicação quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  const app = new App();
  app.init();
});
