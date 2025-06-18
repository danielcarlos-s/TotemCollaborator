
import { grupoSaude } from "./Lista de serviços/grupoSaude.js";
import { grupoIptu } from "./Lista de serviços/grupoIptu.js";
import { grupoFinancas } from "./Lista de serviços/grupoFinancas.js";
// Importe outros grupos conforme necessário

export class ServicesManager {
  getServicesData() {
    return [
      ...grupoSaude,
      ...grupoIptu,
      ...grupoFinancas,
      // ...adicione outros grupos aqui
    ];
  }

  getServiceById(id) {
    return this.getServicesData().find(service => service.id === id);
  }

  getAllServices() {
    return this.getServicesData();
  }
}

// export class ServicesManager {
//   getServicesData() {
//     return [
//       {
//         id: 1,
//         group: "saude",
//         name: "IPTU OUTROS EXERCÍCIOS",
//         description: "Marque suas consultas médicas de forma rápida e fácil.",
//         icon: "fa fa-calendar",
//         iconClass: "icon-blue",
//         url: "service-detail.html",
//         cards: [
//           {
//             type: "documentos",
//             title: "Documentos Necessários",
//             items: [
//               "Documento de Identidade com foto",
//               "Cartão do SUS",
//               "Comprovante de residência"
//             ]
//           },
//           {
//             type: "como-solicitar",
//             title: "Como Solicitar",
//             steps: [
//               "Acesse o portal ou aplicativo da prefeitura",
//               "Faça login com seu CPF e senha",
//               "Escolha o serviço de agendamento de consultas",
//               "Selecione a especialidade e data desejada",
//               "Confirme o agendamento"
//             ]
//           }
//         ]
//       },
//       {
//         id: 2,
//         group: "saude",
//         name: "CERTIDÃO NEGATIVA EMISSÃO",
//         description: "Marque suas consultas médicas de forma rápida e fácil.",
//         icon: "fa fa-calendar",
//         iconClass: "icon-green",
//         url: "service-detail.html",
//         cards: [
//           {
//             type: "documentos",
//             title: "Documentos Necessários",
//             items: [
//               "Documento de Identidade com foto",
//               "Cartão do SUS",
//               "Comprovante de residência"
//             ]
//           },
//           {
//             type: "como-solicitar",
//             title: "Como Solicitar",
//             steps: [
//               "Acesse o portal ou aplicativo da prefeitura",
//               "Faça login com seu CPF e senha",
//               "Escolha o serviço de agendamento de consultas",
//               "Selecione a especialidade e data desejada",
//               "Confirme o agendamento"
//             ]
//           }
//         ]
//       },
//       {
//         id: 3,
//         group: "saude",
//         name: "SOLICITAR REMISSÃO",
//         description: "Marque suas consultas médicas de forma rápida e fácil.",
//         icon: "fa fa-calendar",
//         iconClass: "icon-pink",
//         url: "service-detail.html",
//         cards: [
//           {
//             type: "documentos",
//             title: "Documentos Necessários",
//             items: [
//               "Documento de Identidade com foto",
//               "Cartão do SUS",
//               "Comprovante de residência"
//             ]
//           },
//           {
//             type: "como-solicitar",
//             title: "Como Solicitar",
//             steps: [
//               "Acesse o portal ou aplicativo da prefeitura",
//               "Faça login com seu CPF e senha",
//               "Escolha o serviço de agendamento de consultas",
//               "Selecione a especialidade e data desejada",
//               "Confirme o agendamento"
//             ]
//           }
//         ]
//       }
//     ];
//   }

//   getServiceById(id) {
//     return this.getServicesData().find(service => service.id === id);
//   }

//   getAllServices() {
//     return this.getServicesData();
//   }
// }