import { gerarId } from "../utils/helpers.js";

export const ModalForm = (onSalvar, lugar = {}) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${lugar.id ? "Editar Lugar" : "Adicionar Lugar"}</h2>
      <input id="nomeLugar" placeholder="Nome" value="${lugar.nome || ""}">
      <input id="descLugar" placeholder="Descrição" value="${lugar.descricao || ""}">
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
      descricao: modal.querySelector("#descLugar").value,
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
