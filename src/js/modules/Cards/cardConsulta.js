export function cardConsulta({ titulo, label, placeholder, botao }) {
  return `
    <div class="detail-card">
      <div class="detail-header">
        <div class="detail-title">${titulo}</div>
      </div>
      <div class="detail-content space-y-4">
        <div>
          <label
            for="protocolo"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            ${label}
          </label>
          <input
            id="protocolo"
            type="text"
            placeholder="${placeholder}"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 w-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          ${botao}
        </button>
      </div>
    </div>
  `;
}