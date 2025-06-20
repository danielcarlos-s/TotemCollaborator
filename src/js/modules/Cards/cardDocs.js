export function cardDocs({ titulo, formularios }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${titulo}</div>
      </div>
      <div class="detail-content">
        ${formularios.map(form => `
          <div class="card-row">
            <span>${form.nome}</span>
            <div class="button-group-wrapper">
              ${form.botoes.map(botao => `
                <a 
                  href="${botao.url}" 
                  class="button-group"
                  ${botao.download ? 'download' : ''}
                  ${botao.novaAba ? 'target="_blank"' : ''}
                >
                  <i class="${botao.icon} icon"></i>
                  ${botao.texto}
                </a>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}