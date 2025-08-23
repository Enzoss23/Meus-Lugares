export default function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <nav class="navbar">
      <h2>🌍 Meus Lugares</h2>
      <ul class="nav-links">
        <li><a href="#/">Início</a></li>
        <li><a href="#/add">Adicionar</a></li>
      </ul>
    </nav>
  `;

  return header;
}
