
// Módulo para gerenciamento de serviços
export class ServicesManager {
  constructor() {
    this.servicesData = this.getServicesData();
  }

  getServicesData() {
    return [
      {
        id: 1,
        name: "Agendamento de Consultas",
        description: "Marque suas consultas médicas de forma rápida e fácil.",
        icon: "fas fa-calendar-alt",
        iconClass: "icon-blue",
        popular: true,
        requirements: ["Documento de identidade", "Cartão do SUS"],
        steps: ["Acesse o sistema online", "Selecione a especialidade", "Escolha o horário", "Confirme o agendamento"],
        forms: [
          { name: "Formulário de Agendamento", url: "#" },
          { name: "Termo de Consentimento", url: "#" }
        ]
      },
      {
        id: 2,
        name: "Emissão de IPTU",
        description: "Emita a segunda via do seu IPTU e mantenha seus pagamentos em dia.",
        icon: "fas fa-barcode",
        iconClass: "icon-green",
        popular: true,
        requirements: ["Número de inscrição do imóvel", "CPF do proprietário"],
        steps: ["Acesse o portal do IPTU", "Informe o número de inscrição", "Visualize o débito", "Imprima a segunda via"],
        forms: [
          { name: "Declaração de Quitação", url: "#" }
        ]
      },
      {
        id: 3,
        name: "Cadastro Único",
        description: "Inscreva-se no Cadastro Único para programas sociais do governo.",
        icon: "fas fa-address-card",
        iconClass: "icon-orange",
        popular: true,
        requirements: ["Documento de identidade", "Comprovante de residência", "Comprovante de renda"],
        steps: ["Agende seu atendimento", "Compareça ao CRAS", "Apresente os documentos", "Aguarde a análise"],
        forms: [
          { name: "Formulário de Inscrição", url: "#" },
          { name: "Declaração de Renda", url: "#" }
        ]
      },
      {
        id: 4,
        name: "Segunda Via do RG",
        description: "Solicite sua segunda via do RG através do site oficial do Poupatempo.",
        icon: "fas fa-id-card",
        iconClass: "icon-purple",
        popular: true,
        requirements: ["Certidão de nascimento ou casamento", "Comprovante de residência", "CPF"],
        steps: ["Acesse o site do Poupatempo", "Faça o agendamento online", "Pague a taxa", "Compareça no local agendado"],
        forms: [
          { name: "Guia de Agendamento", url: "#" }
        ]
      },
      {
        id: 5,
        name: "Alvará de Funcionamento",
        description: "Solicite o alvará para funcionamento de estabelecimentos comerciais.",
        icon: "fas fa-store",
        iconClass: "icon-teal",
        popular: false,
        requirements: ["CNPJ da empresa", "Contrato social", "Planta baixa do estabelecimento"],
        steps: ["Protocolize o pedido", "Aguarde vistoria", "Pague as taxas", "Retire o alvará"],
        forms: [
          { name: "Requerimento de Alvará", url: "#" }
        ]
      },
      {
        id: 6,
        name: "Certidão Negativa de Débitos",
        description: "Emita certidão negativa de débitos municipais.",
        icon: "fas fa-file-invoice",
        iconClass: "icon-cyan",
        popular: false,
        requirements: ["CPF ou CNPJ", "Número de inscrição municipal"],
        steps: ["Acesse o portal online", "Informe os dados", "Verifique débitos", "Imprima a certidão"],
        forms: []
      }
    ];
  }

  getServiceById(id) {
    return this.servicesData.find(service => service.id === parseInt(id));
  }

  getPopularServices() {
    return this.servicesData.filter(service => service.popular);
  }

  getAllServices() {
    return this.servicesData;
  }
}