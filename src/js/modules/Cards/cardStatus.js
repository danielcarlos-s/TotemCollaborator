/**
 * @returns {string}
 */
export function cardStatus() {
  return `
    <div class="detail-card">
      <div class="detail-header"><div class="detail-title">Consultar Status</div></div>
      <div class="detail-content space-y-4">
        <div>
          <label for="protocolo" class="text-sm font-medium leading-none">Número do Protocolo</label>
          <input id="protocolo" type="text" placeholder="Digite o número do protocolo" class="input-field" />
        </div>
        <button type="button" class="submit-button">Consultar Status</button>
      </div>
    </div>
  `;
}
