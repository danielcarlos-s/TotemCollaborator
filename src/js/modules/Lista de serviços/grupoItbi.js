export const grupoItbiTitulo = "Serviços de Itbi";
export const grupoItbiSubtitulo = "Consulte e acesse todos os serviços relacionados ao Itbi";

export const grupoItbi = [
  {
    id: 600,
    group: "itbi",
    name: "ITBI",
    description: "Marque suas consultas médicas de forma rápida e fácil.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=6",
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
      // ...outros cards
    ]
  },
  // ...outros serviços do grupo saúde
];