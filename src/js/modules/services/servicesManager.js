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
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          }
        ]
      }
    ];
  }
  getServiceById(id) {
    return this.getServicesData().find(service => service.id === id);
  }
  getAllServices() {
    return this.getServicesData();
  }
}