/**
 * @param {{ icon: string, title: string, text: string }[]} infos
 * @returns {string}
 */
export function cardInfo(infos) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>Informações de Atendimento</h4></div>
      <div class="detail-content">
        ${infos.map(info => `
          <div class="flex items-center gap-3">
            <i class="${info.icon} text-orange-500 w-5"></i>
            <div>
              <h5>${info.title}</h5>
              <span class="text-gray-700">${info.text}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
