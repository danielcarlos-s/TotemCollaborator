/**
 * @param {Object} card
 * @param {string} card.title
 * @returns {string}
 */
export function cardComoSolicitar({ title, items }) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>${title}</h4></div>
      <div class="detail-content">
        <ol style="padding-left: 0px">
          ${items.map(item => `<li><p>${item}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  `;
}