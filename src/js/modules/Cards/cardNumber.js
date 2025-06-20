/**
 * @param {Object} card
 * @param {string} card.title
 * @param {string[]} card.items
 * @returns {string}
 */
export function cardNumber({ title, items }) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>${title}</h4></div>
      <div class="detail-content">
        <ol>
          ${items.map(item => `<li><p>${item}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  `;
}
