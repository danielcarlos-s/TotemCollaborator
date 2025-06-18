# Bem vindo ao projeto

## 1. Como Adicionar cards na Home

Abra o arquivo [homeService.js](./src/js/modules/homeServices.js)

Encontre o método _getHomeServicesData_ e adicione um novo objetivo ao array retornando:

```sh
# Exemplo de novo serviço para a home
{
  id: 999,
  name: "Novo Serviço",
  description: "Descrição do novo serviço.",
  icon: "fa-solid fa-star",
  iconClass: "icon-blue",
  popular: true,
  url: "servicos.html?group=novo-grupo"
}
```

## 2. Adicionar um novo serviço (com cards) para a lista de serviços e detalhes

Vá até a pasta [Lista-de-serviços](./src/js/modules/Lista%20de%20serviços) e duplique algum arquivo renomeando com o nome que deseja mantendo o padrão[grupo+Nome-do-arquivo].

Adicione um novo serviço ao array exportado:

```sh
{
  id: 200,
  group: "saude",
  name: "Novo Serviço Saúde",
  description: "Descrição do novo serviço de saúde.",
  icon: "fa fa-heartbeat",
  iconClass: "icon-red",
  url: "service-detail.html?id=200",
  cards: [
    {
      type: "documentos",
      title: "Documentos Necessários",
      items: [
        "Documento de Identidade",
        "Comprovante de Endereço"
      ]
    },
    {
      type: "como-solicitar",
      title: "Como Solicitar",
      steps: [
        "Acesse o portal",
        "Preencha o formulário",
        "Envie os documentos"
      ]
    }
    # ...adicione outros cards conforme necessário
  ]
}
```

## 3. Adicionar um novo tipo de card (componente visual)

Crie um novo arquivo para o card em [Cards](./src/js/modules/Cards/)

Exemplo: para um card de aviso, crie _cardAviso.js_:

```sh
##
 # @param {Object} card
 # @param {string} card.title
 # @param {string} card.message
 # @returns {string}
##
export function cardAviso({ title, message }) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>${title}</h4></div>
      <div class="detail-content">
        <p>${message}</p>
      </div>
    </div>
  `;
}
```
## 3.1 Importe e registre o novo card em [index.js](./src/js/modules/Cards/index.js)

Abra [index.js](./src/js/modules/Cards/index.js) e adicione o import e o case no __renderCard__:

```sh
import { cardDocumentos } from "./cardDocumentos.js";
import { cardComoSolicitar } from "./cardComoSolicitar.js";
import { cardAviso } from "./cardAviso.js"; // <-- novo import

export function renderCard(card) {
  switch (card.type) {
    case "documentos":
      return cardDocumentos(card);
    case "como-solicitar":
      return cardComoSolicitar(card);
    case "aviso": // <-- novo tipo
      return cardAviso(card);
    // ...outros tipos
    default:
      return `<p>Tipo de card não suportado.</p>`;
  }
}
```
## 3.2 Use o novo tipo de card nos dados do serviço

No arquivo do grupo do serviço (ex: [grupoSaude.js](./src/js/modules/Lista%20de%20serviços/grupoSaude.js)), adicione o novo card ao array __cards__ do serviço:


```sh
cards: [
  {
    type: "documentos",
    title: "Documentos Necessários",
    items: ["RG", "CPF"]
  },
  {
    type: "aviso", // <-- novo tipo
    title: "Atenção",
    message: "Este serviço só está disponível em dias úteis."
  }
]
```