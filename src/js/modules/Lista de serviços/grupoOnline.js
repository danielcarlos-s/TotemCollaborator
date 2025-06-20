export const grupoOnlineTitulo = "Serviços de Online";
export const grupoOnlineSubtitulo = "Consulte e acesse todos os serviços relacionados ao Online";

export const grupoOnline = [
  {
    id: 300,
    group: "online",
    name: "Online",
    description: "Marque suas consultas médicas de forma rápida e fácil.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=3",
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