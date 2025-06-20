export const grupoOnlineTitulo = "Serviços de Online";
export const grupoOnlineSubtitulo = "Consulte e acesse todos os serviços relacionados ao Online";

export const grupoOnline = [
  // Cadastro de MEI e Demais Entidades (CNPJ) - Inscrição, Atualização, Baixa ou Paralisação
  {
    id: 300,
    group: "online",
    name: "Cadastro de MEI e Demais Entidades",
    description: "Inscrição, Atualização, Baixa ou Paralisação.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=3",
    cards: [
      // Documentos Necessários
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "Inscrição Municipal",
          "CNPJ",
          "e-mail",
        ],
      },
      // Siga os Passos
      {
        type: "cardNumeros",
        title: "Siga os passos",
        items: [
          "Precisamos de um e-mail válido onde serão enviadas informações sobre o andamento do seu pedido.",
          "Seu e-mail precisará ser confirmado para dar prosseguimento ao processo.",
          "Esse pedido deverá ser feito exclusivamente pelo Contribuinte (proprietário ou adquirente do imóvel, sócio da empresa ou responsável legal), conforme consta no documento de registro, ou pelo seu Representante Legal através de Procuração.",
        ],
      },
      // Informações de Atendimento
      // {},
      // Solicitar Serviço
      {
        type: "cardFormulario",
        titulo: "Solicitar Serviço",
        textoBotao: "Solicitar Serviço",
        fields: [
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Atualização cadastral (Exclusivo para REDESIM - Cadastro Sincronizado Nacional)"
          // ITEM 2 - "Atualização cadastral (Regularização de cadastros em situação "de ofício", "suspenso" ou "inativo"; demais casos)"
          // ITEM 3 - "Baixa da Inscrição Municipal"
          // ITEM 4 - "Cadastramento (CNPJ não integrado automaticamente pelo REDESIM/Cadastro Sincronizado Nacional)"
          // ITEM 5 - "Comunicação de paralisação de atividades"
          {
            label: "Inscrição Municipal",
            id: "inscricao-municipal",
            type: "text",
            placeholder: "Inscrição Municipal",
          },
          {
            label: "CNPJ",
            id: "cnpj",
            type: "text",
            placeholder: "00.000.000/0000-00",
          },
          {
            label: "E-mail",
            id: "email",
            type: "email",
            placeholder: "seu@email.com",
          },
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Eu sou Sócio da empresa"
          // ITEM 2 - "Eu sou Representante Legal da empresa e tenho procuração"
        ],
      },
      // Formulários Disponíveis
      // {},
      // Consultar Status
      // {},
      // ...outros cards
    ],
  },
  // ITBI - Declaração para Lançamento
  {
    id: 301,
    group: "online",
    name: "ITBI",
    description: "Declaração para Lançamento.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=3",
    cards: [
      // Documentos Necessários
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "Índice Cadastral",
          "CNPJ",
          "e-mail",
        ],
      },
      // Siga os Passos
      {
        type: "cardNumeros",
        title: "Siga os passos",
        items: [
          "Precisamos de um e-mail válido onde serão enviadas informações sobre o andamento do seu pedido.",
          "Seu e-mail precisará ser confirmado para dar prosseguimento ao processo.",
          "Esse pedido deverá ser feito exclusivamente pelo Contribuinte (proprietário ou adquirente do imóvel, sócio da empresa ou responsável legal), conforme consta no documento de registro, ou pelo seu Representante Legal através de Procuração.",
        ],
      },
      // Informações de Atendimento
      // {},
      // Solicitar Serviço
      {
        type: "cardFormulario",
        titulo: "Solicitar Serviço",
        textoBotao: "Solicitar Serviço",
        fields: [
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Declaração para Lançamento do ITBI"
          // ITEM 2 - "Declaração para Lançamento do ITBI - Isenção"
          // ITEM 3 - "Declaração para Lançamento do ITBI - Não incidencia/Imunidade"
          // ITEM 4 - "Revisão de Lançamento (Informar N° do Processo)"
          {
            label: "Índice Cadastral",
            id: "inscricao-cadastral",
            type: "text",
            placeholder: "Índice Cadastral",
          },
          {
            label: "CNPJ",
            id: "cnpj",
            type: "text",
            placeholder: "00.000.000/0000-00",
          },
          {
            label: "E-mail",
            id: "email",
            type: "email",
            placeholder: "seu@email.com",
          },
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Eu sou o Proprietário do Imóvel"
          // ITEM 2 - "Eu sou Representante Legal do Proprietário e tenho procuração"
        ],
      },
      // Formulários Disponíveis
      // {},
      // Consultar Status
      // {},
      // ...outros cards
    ],
  },
  // Parcelamento Dívida Ativa - IPTU
  {
    id: 302,
    group: "online",
    name: "IPTU",
    description: "Parcelamento Dívida Ativa.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=3",
    cards: [
      // Documentos Necessários
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "Índice Cadastral",
          "CNPJ / CPF",
          "e-mail",
        ],
      },
      // Siga os Passos
      {
        type: "cardNumeros",
        title: "Siga os passos",
        items: [
          "Precisamos de um e-mail válido onde serão enviadas informações sobre o andamento do seu pedido.",
          "Seu e-mail precisará ser confirmado para dar prosseguimento ao processo.",
          "Esse pedido deverá ser feito exclusivamente pelo Contribuinte (proprietário ou adquirente do imóvel, sócio da empresa ou responsável legal), conforme consta no documento de registro, ou pelo seu Representante Legal através de Procuração.",
        ],
      },
      // Informações de Atendimento
      // {},
      // Solicitar Serviço
      {
        type: "cardFormulario",
        titulo: "Solicitar Serviço",
        textoBotao: "Solicitar Serviço",
        fields: [
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Parcelamento de IPTU"
          {
            label: "Índice Cadastral",
            id: "inscricao-cadastral",
            type: "text",
            placeholder: "Índice Cadastral",
          },
          {
            label: "CNPJ",
            id: "cnpj",
            type: "text",
            placeholder: "00.000.000/0000-00",
          },
          {
            label: "E-mail",
            id: "email",
            type: "email",
            placeholder: "seu@email.com",
          },
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Eu sou o Proprietário do Imóvel"
          // ITEM 2 - "Eu sou Representante Legal do Proprietário e tenho procuração"
        ],
      },
      // Formulários Disponíveis
      // {},
      // Consultar Status
      // {},
      // ...outros cards
    ],
  },
  // Cancelamento de Nota Fiscal Eletrônica
  {
    id: 303,
    group: "online",
    name: "Nota Fiscal Eletrônica",
    description: "Cancelamento de Nota Fiscal Eletrônica.",
    icon: "fa fa-calendar",
    iconClass: "icon-blue",
    url: "service-detail.html?id=3",
    cards: [
      // Documentos Necessários
      {
        type: "documentos",
        title: "Documentos Necessários",
        items: [
          "Índice Cadastral",
          "CNPJ / CPF",
          "e-mail",
        ],
      },
      // Siga os Passos
      {
        type: "cardNumeros",
        title: "Siga os passos",
        items: [
          "Precisamos de um e-mail válido onde serão enviadas informações sobre o andamento do seu pedido.",
          "Seu e-mail precisará ser confirmado para dar prosseguimento ao processo.",
          "Esse pedido deverá ser feito exclusivamente pelo Contribuinte (proprietário ou adquirente do imóvel, sócio da empresa ou responsável legal), conforme consta no documento de registro, ou pelo seu Representante Legal através de Procuração.",
        ],
      },
      // Informações de Atendimento
      // {},
      // Solicitar Serviço
      {
        type: "cardFormulario",
        titulo: "Solicitar Serviço",
        textoBotao: "Solicitar Serviço",
        fields: [
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Parcelamento de IPTU"
          {
            label: "Índice Cadastral",
            id: "inscricao-cadastral",
            type: "text",
            placeholder: "Índice Cadastral",
          },
          {
            label: "CNPJ",
            id: "cnpj",
            type: "text",
            placeholder: "00.000.000/0000-00",
          },
          {
            label: "E-mail",
            id: "email",
            type: "email",
            placeholder: "seu@email.com",
          },
          // # Inserir caixa de seleção de itens:
          // ITEM 1 - "Eu sou o Proprietário do Imóvel"
          // ITEM 2 - "Eu sou Representante Legal do Proprietário e tenho procuração"
        ],
      },
      // Formulários Disponíveis
      // {},
      // Consultar Status
      // {},
      // ...outros cards
    ],
  },
  // Atualização de e-mail (Nota Fiscal Eletrônica / Declaração ISS)
  {
    id: 304,
    group: "online",
    name: "Atualização de e-mail",
    description: "Nota Fiscal Eletrônica / Declaração ISS.",
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
  // Cadastro Imobiliário - Atualização
  {
    id: 305,
    group: "online",
    name: "Cadastro Imobiliário",
    description: "Atualização de Cadastro Imobiliário.",
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
  // Outros Serviços
  {
    id: 306,
    group: "online",
    name: "Outros Serviços",
    description: "",
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