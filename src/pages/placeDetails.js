export default function PlaceDetails() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Detalhes do Lugar</h1>
    <p>Aqui vamos exibir informações detalhadas de um lugar específico.</p>
    <a href="#/">Voltar para Home</a>
  `;
  return div;
}
