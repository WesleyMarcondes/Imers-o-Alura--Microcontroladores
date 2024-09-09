//console.log(dados);

function pesquisar() {
  
    // Seleciona a seção HTML onde os resultados serão exibidos, pelo ID "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML("Nada Foi encontrado")
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada elemento (dado) da lista de dados.
    for (dado of dados) {
        titulo =dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += ` <div class="item-resultado">
                        <h2>
                          <a href="https://www.arduino.cc/" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}.</p>
                        <a href="${dado.link}" target="_blank">Mais informaçoes</a>
                      </div>`;


        }
      // Constrói o HTML para cada resultado da pesquisa.
      // Cada resultado é uma div com as classes "item-resultado", contendo:
      // - Um título (h2) com um link para a página do Arduino (pode ser ajustado para outros links).
      // - Uma descrição (p) com a classe "descricao-meta".
      // - Um link para mais informações.
    
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }

