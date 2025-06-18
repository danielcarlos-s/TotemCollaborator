/**
 * @param {{ name: string }[]} forms
 * @returns {string}
 */
export function cardDocs(forms) {
  return `
    <div class="detail-card">
      <div class="detail-header"><div class="detail-title">Formulários Disponíveis</div></div>
      <div class="detail-content">
        ${forms.map(form => `
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span class="text-gray-700">${form.name}</span>
            <div class="flex space-x-2">
              <button class="btn-download">Baixar</button>
              <button class="btn-open">Abrir</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
