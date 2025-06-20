export const grupoEmpresasTitulo = "Serviços de Empresas";
export const grupoEmpresasSubtitulo = "Consulte e acesse todos os serviços relacionados ao Empresas";

export const grupoEmpresas = [
  {
    id: 700,
    group: "empresas",
    name: "SITUAÇÃO CADASTRAL E FISCAL",
    description: "Consulta situação cadastral, débitos pendentes, certidões e guia de recolhimento.",
    icon: "fa-solid fa-address-card",
    iconClass: "icon-blue",
    url: "service-detail.html?id=7",
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
  {
    id: 700,
    group: "empresas",
    name: "DECLARAÇÃO ELETRÔNICA",
    description: "Declaração Eletrônica de Serviços.",
    icon: "fa-solid fa-file-invoice",
    iconClass: "icon-blue",
    url: "service-detail.html?id=7",
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
  {
    id: 700,
    group: "empresas",
    name: "NOTA FISCAL ELETRÔNICA",
    description: "Emissão de Nota Fiscal Eletrônica.",
    icon: "fa-solid fa-file-alt",
    iconClass: "icon-blue",
    url: "service-detail.html?id=7",
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
  {
    id: 700,
    group: "empresas",
    name: "DEC",
    description: "Comunicação por meio eletrônico da Administração Tributária Municipal com os Contribuintes.",
    icon: "fa-solid fa-envelope-open-text",
    iconClass: "icon-blue",
    url: "service-detail.html?id=7",
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
  // ...outros serviços do grupo saúde
];