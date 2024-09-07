// Função para exibir todas as ONGs
function mostrarTodos() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  for (let dado of dados) {
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a  target="_blank">${dado.nome}</a>
              </h2>
              <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" class="imagem-ong">
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Site da ong</a>
          </div>
      `;
  }

  section.innerHTML = resultados;
}

// Função para realizar a pesquisa
function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma ong.</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  let resultados = "";

  for (let dado of dados) {
      let nome = dado.nome.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();

      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
              <div class="item-resultado">
                  <h2>
                      <a target="_blank">${dado.nome}</a>
                  </h2>
                  <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" class="imagem-ong">
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Site da ong</a>
              </div>
          `;
      }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>";
  }

  section.innerHTML = resultados;
}

// Chama a função mostrarTodos ao carregar a página
window.onload = mostrarTodos;
