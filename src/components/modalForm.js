import { gerarId } from "../utils/helpers.js";

export const ModalForm = (onSalvar, lugar = {}) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${lugar.id ? "Editar Lugar" : "Adicionar Lugar"}</h2>
      <input id="nomeLugar" placeholder="Nome" value="${lugar.nome || ""}" required>
      <input id="enderecoLugar" placeholder="Endereço" value="${lugar.endereco || ""}" required>
      <select id="tipoLugar">
        <option value="Hamburgueria" ${lugar.tipo === "Hamburgueria" ? "selected" : ""}>Hamburgueria</option>
        <option value="Restaurante" ${lugar.tipo === "Restaurante" ? "selected" : ""}>Restaurante</option>
        <option value="Lanchonete" ${lugar.tipo === "Lanchonete" ? "selected" : ""}>Lanchonete</option>
        <option value="Parque" ${lugar.tipo === "Parque" ? "selected" : ""}>Parque</option>
        <option value="Estado" ${lugar.tipo === "Estado" ? "selected" : ""}>Estado</option>
        <option value="País" ${lugar.tipo === "País" ? "selected" : ""}>País</option>
        <option value="Cafeteria" ${lugar.tipo === "Cafeteria" ? "selected" : ""}>Cafeteria</option>
        <option value="Pizzaria" ${lugar.tipo === "Pizzaria" ? "selected" : ""}>Pizzaria</option>
        <option value="Cinema" ${lugar.tipo === "Cinema" ? "selected" : ""}>Cinema</option>
        <option value="Outro" ${lugar.tipo === "Outro" ? "selected" : ""}>Outro</option>
      </select>
      <input id="avaliacaoLugar" type="number" min="1" max="5" placeholder="Avaliação (1-5)" value="${lugar.avaliacao || ""}">
      <input id="precoLugar" type="text" placeholder="Faixa de Preço" value="${lugar.preco || ""}">
      <label>
        <input type="checkbox" id="visitado" ${lugar.visitado ? "checked" : ""}>
        Visitado
      </label>
      <button id="salvar">Salvar</button>
      <button id="cancelar">Cancelar</button>
    </div>
  `;

  modal.querySelector("#salvar").onclick = () => {
    const novoLugar = {
      id: lugar.id || gerarId(),
      nome: modal.querySelector("#nomeLugar").value,
      endereco: modal.querySelector("#enderecoLugar").value,
      tipo: modal.querySelector("#tipoLugar").value,
      avaliacao: parseInt(modal.querySelector("#avaliacaoLugar").value) || 0,
      preco: modal.querySelector("#precoLugar").value,
      visitado: modal.querySelector("#visitado").checked
    };
    onSalvar(novoLugar);
    document.body.removeChild(modal);
  };

  modal.querySelector("#cancelar").onclick = () => {
    document.body.removeChild(modal);
  };

  document.body.appendChild(modal);
};
