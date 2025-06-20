import { grupoIptu, grupoIptuTitulo, grupoIptuSubtitulo } from "./Lista de serviços/grupoIptu.js";
import { grupoTaxas, grupoTaxasTitulo, grupoTaxasSubtitulo } from "./Lista de serviços/grupoTaxas.js";
import { grupoOnline, grupoOnlineTitulo, grupoOnlineSubtitulo } from "./Lista de serviços/grupoOnline.js";
import { grupoPresencial, grupoPresencialTitulo, grupoPresencialSubtitulo } from "./Lista de serviços/grupoPresencial.js";
import { grupoItbi, grupoItbiTitulo, grupoItbiSubtitulo } from "./Lista de serviços/grupoItbi.js";
import { grupoEmpresas, grupoEmpresasTitulo, grupoEmpresasSubtitulo } from "./Lista de serviços/grupoEmpresas.js";
// ...outros grupos

// Títulos e Subtítulos
export const gruposInfo = {
  iptu: { 
    titulo: grupoIptuTitulo,
    subtitulo: grupoIptuSubtitulo
  },
  taxas: { 
    titulo: grupoTaxasTitulo,
    subtitulo: grupoTaxasSubtitulo
  },
  online: { 
    titulo: grupoOnlineTitulo,
    subtitulo: grupoOnlineSubtitulo
  },
  presencial: { 
    titulo: grupoPresencialTitulo,
    subtitulo: grupoPresencialSubtitulo
  },
  itbi: { 
    titulo: grupoItbiTitulo,
    subtitulo: grupoItbiSubtitulo
  },
  empresas: { 
    titulo: grupoEmpresasTitulo,
    subtitulo: grupoEmpresasSubtitulo
  },
  // ...outros grupos
};


// Importe outros grupos conforme necessário

export class ServicesManager {
  getServicesData() {
    return [
      ...grupoIptu,
      ...grupoTaxas,
      ...grupoOnline,
      ...grupoPresencial,
      ...grupoItbi,
      ...grupoEmpresas,
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