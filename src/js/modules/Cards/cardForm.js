/**
 * @returns {string}
 */
export function cardForm() {
  return `
    <div class="detail-card">
      <div class="detail-header"><div class="detail-title">Solicitar Serviço</div></div>
      <div class="detail-content space-y-4">
        <div>
          <label for="cpf" class="text-sm font-medium leading-none block">CPF</label>
          <input type="text" id="cpf" placeholder="000.000.000-00" class="input-field" />
        </div>
        <div>
          <label for="nome" class="text-sm font-medium leading-none block">Nome Completo</label>
          <input type="text" id="nome" placeholder="Seu nome completo" class="input-field" />
        </div>
        <div>
          <label for="email" class="text-sm font-medium leading-none block">E-mail</label>
          <input type="email" id="email" placeholder="seu@email.com" class="input-field" />
        </div>
        <div>
          <label for="telefone" class="text-sm font-medium leading-none block">Telefone</label>
          <input type="text" id="telefone" placeholder="(11) 99999-9999" class="input-field" />
        </div>
        <button type="submit" class="submit-button">Solicitar Serviço</button>
      </div>
    </div>
  `;
}
