export function Filters(selectedTipo = "Todos", selectedSub = "Todos", tiposMap) {
  const tipoOptions = ["Todos", ...Object.keys(tiposMap)]
    .map(t => `<option value="${t}" ${selectedTipo === t ? "selected" : ""}>${t}</option>`)
    .join("");

  const subOptions = ["Todos", ...(selectedTipo !== "Todos" ? tiposMap[selectedTipo] : [])]
    .map(s => `<option value="${s}" ${selectedSub === s ? "selected" : ""}>${s}</option>`)
    .join("");

  return `
    <div style="margin-bottom:1rem;">
      <label>Tipo:</label>
      <select id="filter-tipo">${tipoOptions}</select>

      <label style="margin-left:1rem;">Subcategoria:</label>
      <select id="filter-sub">${subOptions}</select>
    </div>
  `;
}
