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
          },
          {
            type: "info-atendimento",
            title: "Informações de Atendimento",
            horario: "Segunda a Sexta, das 8h às 17h",
            local: "Rua Central, 123 - Centro",
            telefone: "(11) 1234-5678"
          },
          {
            type: "solicitar-servico",
            title: "Solicitar Serviço"
          },
          {
            type: "formularios-disponiveis",
            title: "Formulários Disponíveis",
            formularios: [
              { nome: "Formulário de Agendamento" },
              { nome: "Formulário de Cancelamento" }
            ]
          },
          {
            type: "consultar-status",
            title: "Consultar Status"
          }
        ]
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
            type: "documentos",
            title: "Documentos Necessários",
            items: [
              "CPF do proprietário",
              "Número de inscrição do imóvel"
            ]
          },
          {
            type: "como-solicitar",
            title: "Como Solicitar",
            steps: [
              "Acesse o portal da prefeitura",
              "Informe o número de inscrição do imóvel",
              "Selecione o ano de exercício",
              "Clique em 'Emitir 2ª via'"
            ]
          },
          {
            type: "info-atendimento",
            title: "Informações de Atendimento",
            horario: "Segunda a Sexta, das 9h às 16h",
            local: "Av. das Finanças, 456 - Centro",
            telefone: "(11) 9876-5432"
          },
          {
            type: "solicitar-servico",
            title: "Solicitar Serviço"
          },
          {
            type: "formularios-disponiveis",
            title: "Formulários Disponíveis",
            formularios: [
              { nome: "Formulário de Atualização Cadastral" }
            ]
          },
          {
            type: "consultar-status",
            title: "Consultar Status"
          }
        ]
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