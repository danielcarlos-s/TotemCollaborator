/**
 * @param {string[]} steps
 * @returns {string}
 */
export function cardNumber(steps) {
  return `
    <div class="detail-card">
      <div class="detail-header"><h4>Como Solicitar</h4></div>
      <div class="detail-content">
        <ol>
          ${steps.map(step => `<li><p>${step}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  `;
}
