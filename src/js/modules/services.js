export class ServicesManager {
  getServicesData() {
    return [
      {
        id: 1,
        group: "saude",
        name: "Agendamento de Consultas 1",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-blue",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
            ]
          }
        ]
      },
      {
        id: 2,
        group: "saude",
        name: "Agendamento de Consultas 2",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-green",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
            ]
          }
        ]
      },
      {
        id: 3,
        group: "saude",
        name: "Agendamento de Consultas 3",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-red",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
            ]
          }
        ]
      },
      {
        id: 4,
        group: "saude",
        name: "Agendamento de Consultas 4",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-pink",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
            ]
          }
        ]
      },
      {
        id: 5,
        group: "saude",
        name: "Agendamento de Consultas 5",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-indigo",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
            ]
          }
        ]
      },
      {
        id: 6,
        group: "saude",
        name: "Agendamento de Consultas 6",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fa fa-calendar",
        iconClass: "icon-teal",
        url: "service-detail.html",
        cards: [
          {
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "Documento de Identidade com foto",
              "Cartão do SUS",
              "Comprovante de residência"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal ou aplicativo da prefeitura",
              "Faça login com seu CPF e senha",
              "Escolha o serviço de agendamento de consultas",
              "Selecione a especialidade e data desejada",
              "Confirme o agendamento"
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