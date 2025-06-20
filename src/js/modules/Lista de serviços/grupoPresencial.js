export const grupoPresencialTitulo = "Serviços de Presencial";
export const grupoPresencialSubtitulo = "Consulte e acesse todos os serviços relacionados ao Presencial";

export const grupoPresencial = [
  {
    id: 400,
    group: "presencial",
    name: "Saúde",
    description: "Marque suas consultas médicas de forma rápida e fácil.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=4",
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