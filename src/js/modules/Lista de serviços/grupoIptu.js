export const grupoIptu = [
  {
    id: 200,
    group: "iptu",
    name: "Consulta IPTU",
    description: "Consulte informações e emita guias do IPTU.",
    icon: "fa fa-file-invoice-dollar",
    iconClass: "icon-green",
    url: "service-detail.html?id=100",
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
  // ...outros serviços do grupo IPTU
];