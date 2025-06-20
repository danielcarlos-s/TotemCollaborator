export function cardForm({ titulo, fields, textoBotao }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${titulo}</div>
      </div>
      <div class="detail-content space-y-4">
        ${fields.map(field => `
          <div>
            <label for="${field.id}">${field.label}</label>
            <input 
              type="${field.type}" 
              id="${field.id}" 
              name="${field.name || field.id}" 
              placeholder="${field.placeholder}" 
            />
          </div>
        `).join("")}
        <button type="submit" class="btnCard">${textoBotao}</button>
      </div>
    </div>
  `;
}