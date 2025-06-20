export const grupoTaxasTitulo = "Serviços de Taxas";
export const grupoTaxasSubtitulo = "Consulte e acesse todos os serviços relacionados ao Taxas";

export const grupoTaxas = [
  {
    id: 200,
    group: "taxas",
    name: "Taxas",
    description: "Marque suas consultas médicas de forma rápida e fácil.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=2",
    cards: [
      {
        type: "como-solicitar", // Define o tipo de card
        title: "Como Solicitar",
        items: [
          "Documento de Identidade com foto",
          "Cartão do SUS",
          "Comprovante de residência",
          "Comprovante de residência"
        ]
      },
      // ...outros cards
    ]
  },
  // ...outros serviços do grupo saúde
];