/**
 * @param {Object} card
 * @param {string} card.title
 * @param {string[]} card.steps
 * @returns {string}
 */
export function cardComoSolicitar({ title, steps }) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>${title}</h4></div>
      <div class="detail-content">
        <ul>
          ${steps.map(item => `<li><p>${item}</p></li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}
