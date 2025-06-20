export const grupoTaxasTitulo = "Serviços de Taxas";
export const grupoTaxasSubtitulo = "Consulte e acesse todos os serviços relacionados ao Taxas";

export const grupoTaxas = [
  {
    id: 200,
    group: "taxas",
    name: "ISSQN - Consulta de Situação Fiscal",
    description: "Consultar a situação fiscal de um CNPJ ou CPF.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=2",
    cards: [
      // Documentos Necessários
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "CNPJ ou CPF"
        ],
      },
      // Siga os Passos
      {
        type: "cardNumeros",
        title: "Você poderá emitir:",
        items: [
          "Certidão de Estimativa",
          "Documento de Renovação da Concessão de Regime de Estimativa",
          "Certidão de Baixa",
        ],
      },
      // Informações de Atendimento
      // {},
      // Solicitar Serviço
      // {},
      // Formulários Disponíveis
      // {},
      // Consultar Status
      {
        type: "cardConsulta",
        titulo: "Consultar Status",
        label: "CNPJ ou CPF",
        placeholder: "Digite CNPJ ou CPF",
        botao: "Consultar Status",
      },
      // ...outros cards
    ],
  },
  // ...outros serviços do grupo saúde
];