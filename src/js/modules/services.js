export class ServicesManager {
  getServicesData() {
    return [
      {
        id: 1,
        group: "saude",
        name: "Agendamento de Consultas",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-blue",
        url: "service-detail.html?id=1",
        cards: [
          {
            title: "Documentos Necessários",
            description: "Confira os documentos necessários para o agendamento.",
            icon: "fas fa-file-alt",
            colorClass: "bg-primary",
          },
          {
            title: "Passo a Passo",
            description: "Veja como realizar o agendamento em poucos passos.",
            icon: "fas fa-list-ol",
            colorClass: "bg-info",
          },
        ],
      },
      {
        id: 2,
        group: "financas",
        name: "Emissão de IPTU",
        description: "Emita a segunda via do seu IPTU.",
        icon: "fas fa-barcode",
        iconClass: "icon-green",
        url: "service-detail.html?id=2",
        cards: [
          {
            title: "Documentos Necessários",
            description: "CPF e número de inscrição do imóvel.",
            icon: "fas fa-file-alt",
            colorClass: "bg-primary",
          },
          {
            title: "Passo a Passo",
            description: "Veja como emitir a segunda via do IPTU.",
            icon: "fas fa-list-ol",
            colorClass: "bg-info",
          },
        ],
      },
    ];
  }

  getServiceById(id) {
    return this.getServicesData().find((service) => service.id === id);
  }

  getAllServices() {
    return this.getServicesData();
  }
}