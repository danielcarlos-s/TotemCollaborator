export const grupoIptuTitulo = "Serviços de IPTU";
export const grupoIptuSubtitulo =
  "Consulte e acesse todos os serviços relacionados ao IPTU";

export const grupoIptu = [
  {
    id: 100,
    group: "iptu",
    name: "Consulta IPTU",
    description: "Consulte informações e emita guias do IPTU.",
    icon: "fa fa-file-invoice-dollar",
    iconClass: "icon-green",
    url: "service-detail.html?id=1",
    cards: [
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "Documento de Identidade com foto",
          "Cartão do SUS",
          "Comprovante de residência",
        ],
      },
      {
        type: "cardNumeros",
        title: "Siga os passos",
        items: [
          "Documento de Identidade com foto",
          "Cartão do SUS",
          "Comprovante de residência",
        ],
      },
      {
        type: "cardInfo",
        titulo: "Informações de Atendimento",
        info: [
          {
            icon: "fas fa-clock",
            label: "Horário de Funcionamento",
            text: "Segunda a Sexta: 8h às 17h",
          },
          {
            icon: "fas fa-calendar",
            label: "Local de Atendimento",
            text: "Sábados: 8h às 12h",
          },
          {
            icon: "fas fa-map-marker-alt",
            label: "Endereço",
            text: "Rua Principal, 123 - Centro",
          },
          {
            icon: "fas fa-phone",
            label: "Telefone",
            text: "(11) 3456-7890",
          },
        ],
      },
      {
        type: "cardFormulario",
        titulo: "Solicitar Serviço",
        textoBotao: "Solicitar Serviço",
        fields: [
          {
            label: "CPF",
            id: "cpf",
            type: "text",
            placeholder: "000.000.000-00",
          },
          {
            label: "Nome Completo",
            id: "nome",
            type: "text",
            placeholder: "Seu nome completo",
          },
          {
            label: "E-mail",
            id: "email",
            type: "email",
            placeholder: "seu@email.com",
          },
          {
            label: "Telefone",
            id: "telefone",
            type: "text",
            placeholder: "(11) 99999-9999",
          },
        ],
      },
      {
        type: "cardDocumentos",
        titulo: "Formulários Disponíveis",
        formularios: [
          {
            nome: "Solicitação de CPF",
            botoes: [
              {
                texto: "Baixar",
                icon: "fas fa-download",
                url: "arquivos/solicitacao-cpf.pdf",
                download: true,
                novaAba: false,
              },
              {
                texto: "Abrir",
                icon: "fas fa-external-link-alt",
                url: "arquivos/solicitacao-cpf.pdf",
                download: false,
                novaAba: true,
              },
            ],
          },
          {
            nome: "Cadastro de Imóvel",
            botoes: [
              {
                texto: "Visualizar",
                icon: "fas fa-eye",
                url: "arquivos/cadastro-imovel.pdf",
                novaAba: true,
              },
            ],
          },
        ],
      },
      {
        type: "cardConsulta",
        titulo: "Consultar Status",
        label: "Número do Protocolo",
        placeholder: "Digite o número do protocolo",
        botao: "Consultar Status",
      },
      // ...outros cards
    ],
  },
  // ...outros serviços do grupo IPTU
];
