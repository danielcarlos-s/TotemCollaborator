/**
 * Função para criar um card dinâmico
 * @param {Object} options - Dados do card
 * @param {string} options.title - Título do card
 * @param {string} options.description - Descrição do card
 * @param {string} options.icon - Classe do ícone (ex: "fas fa-file-alt")
 * @param {string} options.colorClass - Classe de cor do cabeçalho (ex: "bg-primary")
 * @returns {string} - HTML do card
 */

export function createCard({ title, description, icon, colorClass }) {
  return `
    <div class="col-md-6 mb-4">
      <div class="card">
        <div class="card-header ${colorClass} text-white">
          <h5 class="card-title">
            <i class="${icon} me-2"></i>${title}
          </h5>
        </div>
        <div class="card-body">
          <p>${description}</p>
        </div>
      </div>
    </div>
  `;
}

// Card: Documentos Necessários
/**
 * @param {Object} card
 * @param {string} card.title
 * @param {string[]} card.items
 * @returns {string}
 */
export function cardDocumentos({ title, items }) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>${title}</h4></div>
      <div class="detail-content">
        <ul>
          ${items.map(item => `<li><p>${item}</p></li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

// Card: Como Solicitar
export function cardComoSolicitar({ title, steps }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${title}</div>
      </div>
      <div class="detail-content">
        <ol class="space-y-3">
          ${steps.map((step, idx) => `
            <li class="flex items-start">
              <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">${idx + 1}</span>
              <span class="text-gray-700 mt-1">${step}</span>
            </li>
          `).join("")}
        </ol>
      </div>
    </div>
  `;
}

// Card: Informações de Atendimento
export function cardInfoAtendimento({ title, horario, local, telefone }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${title}</div>
      </div>
      <div class="detail-content">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock text-blue-600 mr-3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <div>
            <p class="font-medium">Horário de Funcionamento</p>
            <p class="text-gray-600">${horario}</p>
          </div>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-blue-600 mr-3"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <div>
            <p class="font-medium">Local de Atendimento</p>
            <p class="text-gray-600">${local}</p>
          </div>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-blue-600 mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <div>
            <p class="font-medium">Telefone</p>
            <p class="text-gray-600">${telefone}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Card: Solicitar Serviço (formulário)
export function cardSolicitarServico({ title }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${title}</div>
      </div>
      <div class="detail-content space-y-4">
        <div>
          <label for="cpf" class="text-sm font-medium leading-none block">CPF</label>
          <input type="text" id="cpf" placeholder="000.000.000-00"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
        <div>
          <label for="nome" class="text-sm font-medium leading-none block">Nome Completo</label>
          <input type="text" id="nome" placeholder="Seu nome completo"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
        <div>
          <label for="email" class="text-sm font-medium leading-none block">E-mail</label>
          <input type="email" id="email" placeholder="seu@email.com"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
        <div>
          <label for="telefone" class="text-sm font-medium leading-none block">Telefone</label>
          <input type="text" id="telefone" placeholder="(11) 99999-9999"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
        <button type="submit"
          class="w-full h-10 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
          Solicitar Serviço
        </button>
      </div>
    </div>
  `;
}

// Card: Formulários Disponíveis
export function cardFormulariosDisponiveis({ title, formularios }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${title}</div>
      </div>
      <div class="detail-content space-y-3">
        ${formularios.map(form => `
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span class="text-gray-700">${form.nome}</span>
            <div class="flex space-x-2">
              <button class="inline-flex items-center gap-2 text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Baixar
              </button>
              <button class="inline-flex items-center gap-2 text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                </svg>
                Abrir
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// Card: Consultar Status
export function cardConsultarStatus({ title }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${title}</div>
      </div>
      <div class="detail-content space-y-4">
        <div>
          <label for="protocolo" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Número do Protocolo
          </label>
          <input id="protocolo" type="text" placeholder="Digite o número do protocolo"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />
        </div>
        <button type="button"
          class="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 w-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          Consultar Status
        </button>
      </div>
    </div>
  `;
}