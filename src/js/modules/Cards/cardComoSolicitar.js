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
        <ol>
          ${steps.map((step, idx) => `<li><p>${step}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  `;
}