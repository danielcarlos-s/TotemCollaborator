
// Módulo para gerenciamento de serviços da home
//-----------------------------------------------------------------------//

export class HomeServicesManager {
  constructor() {
    this.servicesData = this.getHomeServicesData();
  }

  getHomeServicesData() {
    return [
      {
        id: 1,
        name: "Saúde",
        description: "Serviços relacionados à saúde pública.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: true,
        url: "servicos.html?group=saude",
      },
      {
        id: 2,
        name: "Finanças",
        description: "Serviços relacionados a impostos e taxas.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: true,
        url: "servicos.html?group=financas",
      },
    ];
  }

  getAllHomeServices() {
    return this.servicesData;
  }
}
