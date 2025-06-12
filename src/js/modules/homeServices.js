
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
        name: "Agendamento de Consultas",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        requirements: ["Documento de identidade", "Cartão do SUS"],
        steps: ["Acesse o sistema online", "Selecione a especialidade", "Escolha o horário", "Confirme o agendamento"],
        forms: [
          { name: "Formulário de Agendamento", url: "#" },
          { name: "Termo de Consentimento", url: "#" }
        ]
      }
    ];
  }

  getAllHomeServices() {
    return this.servicesData;
  }
}
