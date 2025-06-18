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
        name: "IPTU 2025",
        description: "Emissão de guia, consulta e certidão.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 2,
        name: "TAXAS E ISS AUTÔNOMO",
        description: "Emissão de guia e consulta da situação fiscal.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 3,
        name: "SOLICITAÇÃO ON-LINE DE SERVIÇOS",
        description:
          "Faça uma solicitação através da internet, sem precisar sair de casa.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 4,
        name: "AGENDAR ATENDIMENTO PRESENCIAL",
        description:
          "O atendimento presencial na Receita precisa ser previamente agendado.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 5,
        name: "IPTU",
        description:
          "Emissão de guias, solicitar isenção, recursos, certidão, dúvidas.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 6,
        name: "ITBI",
        description:
          "Acompanhar processo, emitir guia, certidão, credenciados, dúvidas.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 7,
        name: "EMPRESAS, MEI, AUTÔNOMOS",
        description:
          "Situação fiscal, declaração eletrônica, certidão, 2ª via de recolhimento de ISSQN e Taxas.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 8,
        name: "SIMPLES NACIONAL",
        description:
          "Consulta de impedimentos para opção do Simples Nacional em 2025.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 9,
        name: "DECLARAÇÃO ELETRÔNICA",
        description: "Declaração Eletrônica de Serviços.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 10,
        name: "NOTA FISCAL ELETRÔNICA",
        description: "Emissão de Nota Fiscal Eletrônica.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 11,
        name: "GUIA DE PREÇO PÚBLICO",
        description: "Emissão de guia de preços públicos diversos.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 12,
        name: "DEC",
        description:
          "Comunicação por meio eletrônico da Administração Tributária Municipal com os Contribuintes.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 13,
        name: "CERTIDÕES",
        description: "Emissão e autenticação de certidões.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 14,
        name: "VAF",
        description: "Valor Adicionado Fiscal.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 15,
        name: "PROTOCOLO",
        description: "Consulta Tramitação de Protocolo.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 16,
        name: "CONTAC",
        description: "Informações sobre o Conselho Administrativo de Contagem",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
      {
        id: 17,
        name: "CÓDIGO TRIBUTÁRIO DO MUNICÍPIO DE CONTAGEM",
        description: "Download do Código Tributário do Município de Contagem.",
        icon: "fa fa-calendar", // icone da família de fontes
        iconClass: "icon-blue", // classe CSS para estilização do ícone
        popular: false,
        url: "servicos.html?group=saude",
      },
    ];
  }

  getAllHomeServices() {
    return this.servicesData;
  }
}
