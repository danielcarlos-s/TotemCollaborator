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