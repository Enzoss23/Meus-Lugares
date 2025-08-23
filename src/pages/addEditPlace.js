// // src/pages/AddEditPlace.js

// import { addPlace, getPlaces, updatePlace } from "../services/localStorage.js";

// export default function AddEditPlace(params = {}) {
//   const root = document.createElement("div");
//   root.classList.add("add-edit-page");

//   const title = document.createElement("h2");
//   title.innerText = params.id ? "Editar Lugar" : "Adicionar Novo Lugar";
//   root.appendChild(title);

//   const form = document.createElement("form");
//   form.classList.add("place-form");

//   // Campos do formulário
//   const nameInput = document.createElement("input");
//   nameInput.type = "text";
//   nameInput.placeholder = "Nome do lugar";
//   nameInput.required = true;

//   const categoryInput = document.createElement("select");
//   ["Restaurante", "Hamburgueria", "Massas", "Café"].forEach((cat) => {
//     const option = document.createElement("option");
//     option.value = cat;
//     option.innerText = cat;
//     categoryInput.appendChild(option);
//   });

//   const descriptionInput = document.createElement("textarea");
//   descriptionInput.placeholder = "Descrição";
//   descriptionInput.required = true;

//   const addressInput = document.createElement("input");
//   addressInput.type = "text";
//   addressInput.placeholder = "Endereço";
//   addressInput.required = true;

//   const saveBtn = document.createElement("button");
//   saveBtn.type = "submit";
//   saveBtn.innerText = "Salvar";
//   saveBtn.classList.add("btn-save");

//   // Se for edição, preenche os dados
//   if (params.id) {
//     const places = getPlaces();
//     const placeToEdit = places.find((p) => p.id === parseInt(params.id));

//     if (placeToEdit) {
//       nameInput.value = placeToEdit.name;
//       categoryInput.value = placeToEdit.category;
//       descriptionInput.value = placeToEdit.description;
//       addressInput.value = placeToEdit.address;
//     }
//   }

//   // Evento de salvar
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const placeData = {
//       id: params.id ? parseInt(params.id) : undefined,
//       name: nameInput.value,
//       category: categoryInput.value,
//       description: descriptionInput.value,
//       address: addressInput.value,
//     };

//     if (params.id) {
//       updatePlace(placeData);
//     } else {
//       addPlace(placeData);
//     }

//     window.location.hash = "#/"; // volta para Home
//   });

//   // Monta formulário
//   form.appendChild(nameInput);
//   form.appendChild(categoryInput);
//   form.appendChild(descriptionInput);
//   form.appendChild(addressInput);
//   form.appendChild(saveBtn);

//   root.appendChild(form);
//   return root;
// }
export default function AddEditPlace() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Adicionar / Editar Lugar</h1>
    <p>Aqui ficará o formulário para cadastrar ou editar um lugar.</p>
    <a href="#/">Voltar para Home</a>
  `;
  return div;
}
