import { Home } from "./home.js";

export const Login = () => {
  const container = document.getElementById("app");
  container.innerHTML = `
  <div class="login-container">
    <h1>Login</h1>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Nome de Usuário" required />
      <input type="password" id="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
  `;

  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de autenticação
    if (username === "teste" && password === "password123") {
      Home();
      // Redirecionar para a página principal
      // Aqui você pode chamar a função que renderiza a página principal
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };
};
