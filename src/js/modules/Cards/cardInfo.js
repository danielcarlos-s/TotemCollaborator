export function cardInfo({ titulo, info }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <h4>${titulo}</h4>
      </div>
      <div class="detail-content">
        ${info.map(item => `
          <div class="d-flex align-items-center gap-3">
            <i class="${item.icon}"></i>
            <div>
              <h5>${item.label}</h5>
              <span>${item.text}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
