export const grupoEmpresasTitulo = "Serviços de Empresas";
export const grupoEmpresasSubtitulo = "Consulte e acesse todos os serviços relacionados ao Empresas";

export const grupoEmpresas = [
  {
    id: 700,
    group: "empresas",
    name: "Empresas",
    description: "Marque suas consultas médicas de forma rápida e fácil.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=7",
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