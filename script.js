
"use strict";

// Informações das scooters eletricas.
const produtos = {
  n9: {
    nome: "Scooter Elétrica Yoyo Racing N9 1000w 32km/h Bateria Removível",
    imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=650&q=85",
    caracteristicas: [
      "Motor anunciado: 1000 W",
      "Velocidade anunciada: até 32 km/h",
      "Bateria de lítio removível",
      "Autonomia depende do peso, terreno e condições da bateria",
      "Confira alarme e chave NFC conforme a versão"
    ],
    link: "https://www.condorbike.com.br/scooter-eletrica-yoyo-racing-n9-1000w-32kmh-bateria-removivel"
  },

  x13: {
    nome: "Scooter X13 Bicicleta Elétrica 1000w Chopper",
    imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=650&q=85",
    caracteristicas: [
      "Motor anunciado: 1000 W",
      "Estilo Chopper",
      "Bateria e autonomia variam conforme a versão do anúncio",
      "Alarme conforme configuração",
      "Confirme velocidade, bateria e documentação com o vendedor"
    ],
    link: "https://www.mercadolivre.com.br/scooter-x13-bicicleta-eletrica-1000w-chopper-moto-sem-cnh/up/MLBU4957373608"
  },

  ft03: {
    nome: "Scooter Elétrica Ouxi FT03 48V Bateria de Lítio",
    imagem: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=650&q=85",
    caracteristicas: [
      "Bateria de lítio 48 V, conforme o modelo anunciado",
      "Pneus largos estilo Fat Bike",
      "Autonomia varia conforme o uso e a versão",
      "Confirme motor, componentes e especificações com o vendedor"
    ],
    link: "https://www.biketechmoinhos.com.br/bicicletas/e-bikes/scooter-eletrica-ouxi-ft03-48v-bateria-de-litio"
  }
};


// elementos do modal

const fundoModal = document.getElementById("fundoModal");
const conteudoModal = document.getElementById("conteudoModal");
const botaoFecharModal = document.querySelector(".fechar-modal");

let elementoAnterior = null;


// Função para abrir o modal
function abrirModal(html) {
  elementoAnterior = document.activeElement;

  conteudoModal.innerHTML = html;

  fundoModal.classList.add("aberto");
  fundoModal.setAttribute("aria-hidden", "false");

  botaoFecharModal.focus();
}


// Função para fechar o modal
function fecharModal() {
  fundoModal.classList.remove("aberto");
  fundoModal.setAttribute("aria-hidden", "true");

  conteudoModal.innerHTML = "";

  if (
    elementoAnterior &&
    typeof elementoAnterior.focus === "function"
  ) {
    elementoAnterior.focus();
  }
}


// Botão X para fechar as janelas
botaoFecharModal.addEventListener("click", fecharModal);


// Fechar ao clicar na área mais escura
fundoModal.addEventListener("click", (evento) => {
  if (evento.target === fundoModal) {
    fecharModal();
  }
});


// Tecla Esc para fecha a janela
document.addEventListener("keydown", (evento) => {
  if (
    evento.key === "Escape" &&
    fundoModal.classList.contains("aberto")
  ) {
    fecharModal();
  }
});


// para mostrar informaçoes sobre os produtos

function mostrarProduto(id) {
  const produto = produtos[id];

  if (!produto) return;

  const lista = produto.caracteristicas
    .map((item) => `<li>${item}</li>`)
    .join("");

  abrirModal(`
    <h2 id="tituloModal">${produto.nome}</h2>

    <div class="detalhe-produto">

      <img
        src="${produto.imagem}"
        alt="Imagem ilustrativa do produto"
      >

      <div>
        <p>informações sobre a scooter</p>

        <ul>
          ${lista}
        </ul>

        <p>
          <a
            href="${produto.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            pesquisa / página de referência
          </a>
        </p>
      </div>

    </div>

    <p class="nota-rolagem">
      As imagens são ilustrativas. Confirme as características com o vendedor.
    </p>
  `);
}


// menu de peças, equipamentos e outras seçoes

function abrirSecao(secao) {

  if (secao === "scooters") {
    fecharModal();
    return;
  }

  // Menu 
  if (secao === "menu") {

    abrirModal(`
      <h2 id="tituloModal">menu</h2>

      <p>
        <button class="botao-modal" type="button" data-ir-secao="scooters">
          scooter elétricas
        </button>
      </p>

      <p>
        <button class="botao-modal" type="button" data-ir-secao="pecas">
          peças
        </button>
      </p>

      <p>
        <button class="botao-modal" type="button" data-ir-secao="equipamentos">
          equipamentos
        </button>
      </p>
    `);

    return;
  }


  //seçao de peças
  if (secao === "pecas") {

    abrirModal(`
      <h2 id="tituloModal">peças</h2>

      <div class="grade-modal">

        <article class="cartao-modal">

          <div class="imagem-ilustrativa">
           (Encontre peças no link abaixo !!!)
          </div>

          <h3>Peças para conserto</h3>

          <p>
            Peças para manutenção. Consulte a compatibilidade
            com o modelo da sua scooter.
          </p>

          <a
            href="https://www.google.com/search?q=pe%C3%A7as+para+scooter+el%C3%A9trica"
            target="_blank"
            rel="noopener noreferrer"
          >
            pesquisar peças
          </a>

        </article>


        <article class="cartao-modal">

          <div class="imagem-ilustrativa">
            (Encontre peças no link abaixo !!!)
          </div>

          <h3>Peças para personalizar</h3>

          <p>
            Acessórios e componentes para personalização.
          </p>

          <a
            href="https://www.mercadolivre.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pesquisar acessórios
          </a>

        </article>

      </div>

      <p class="nota-rolagem">
       isso é tudo.
      </p>
    `);

    return;
  }


  // Seção de equipamentos
  if (secao === "equipamentos") {

    abrirModal(`
      <h2 id="tituloModal">equipamentos</h2>

      <div class="grade-modal">

        <article class="cartao-modal">

         <div class="imagem-ilustrativa">
          (Não foi possivel carregar a imagem !)
          </div>

          <h3>Capacete</h3>

          <p>
            Equipamento de proteção para os trajetos.
          </p>

        </article>


        <article class="cartao-modal">

          <div class="imagem-ilustrativa">
            (Não foi possivel carregar a imagem !)
          </div>

          <h3>Luvas e proteção</h3>

          <p>
            Itens de segurança e conforto.
          </p>

        </article>

      </div>

      <p class="nota-rolagem">
        Mande mensagem no numero do suporte que mandaremos opções disponiveis.
      </p>
    `);
  }
}


// CADASTRO

function mostrarCadastro() {

  abrirModal(`
    <h2 id="tituloModal">cadastro</h2>

    <form id="formCadastro">

      <label class="campo-cadastro">
        coloque seu email

        <input
          name="email"
          type="email"
          placeholder="seu email"
          required
        >
      </label>


      <label class="campo-cadastro">
        senha

        <input
          name="senha"
          type="password"
          placeholder="senha"
          required
          minlength="6"
        >
      </label>


      <label class="campo-cadastro">
        numero de contato

        <input
          name="telefone"
          type="tel"
          placeholder="numero de contato"
        >
      </label>


      <label class="campo-cadastro">
        CPF

        <input
          name="cpf"
          inputmode="numeric"
          placeholder="CPF"
        >
      </label>


      <button class="botao-modal" type="submit">
        enviar
      </button>

    </form>

    <p>
      Opção em desenvolvimento !!!
    </p>
  `);


  // Envio de demostraçao do cadastro
  document
    .getElementById("formCadastro")
    .addEventListener("submit", (evento) => {

      evento.preventDefault();

      alert(
        "Cadastro demonstrativo. Nenhum dado foi enviado ou armazenado."
      );

      fecharModal();
    });
}


// sobre o suporte

function mostrarSuporte() {

  abrirModal(`
    <h2 id="tituloModal">suporte</h2>

    <p>
      Para suporte ou dúvidas, entre em contato:
    </p>

    <h2>55 (19) 99893-4417</h2>

    <p>
      <a
        href="https://wa.me/5519998934417"
        target="_blank"
        rel="noopener noreferrer"
      >
        abrir WhatsApp
      </a>
    </p>
  `);
}


// aviso de compras

function mostrarAvisoCompra() {

  abrirModal(`
    <h2 id="tituloModal">informação</h2>

    <p>
      As compras só serão efetuadas na loja presencialmente.
    </p>
  `);
}


// botoes de navegaçao

document.querySelectorAll("[data-secao]").forEach((botao) => {

  botao.addEventListener("click", () => {

    document.querySelectorAll(".nav-link").forEach((item) => {
      item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    abrirSecao(botao.dataset.secao);
  });

});


// botoes do cabeçalho e suporte

document.querySelectorAll("[data-acao]").forEach((botao) => {

  botao.addEventListener("click", () => {

    const acao = botao.dataset.acao;

    if (acao === "suporte") {
      mostrarSuporte();
    }

    if (acao === "compras") {
      mostrarAvisoCompra();
    }

    if (acao === "cadastro") {
      mostrarCadastro();
    }

  });

});


// botoes de informaçao sobre o produto

document.querySelectorAll("[data-produto]").forEach((botao) => {

  botao.addEventListener("click", () => {
    mostrarProduto(botao.dataset.produto);
  });

});


// botoes do menu

conteudoModal.addEventListener("click", (evento) => {

  const botao = evento.target.closest("[data-ir-secao]");

  if (botao) {
    abrirSecao(botao.dataset.irSecao);
  }

});


// pesquisa das scooters

const campoBusca = document.getElementById("campoBusca");

const cartoes = [
  ...document.querySelectorAll(".cartao-scooter")
];

const mensagemVazia = document.getElementById("mensagemVazia");


function pesquisarScooter() {

  const termo = campoBusca.value
    .trim()
    .toLocaleLowerCase("pt-BR");

  let encontrados = 0;

  cartoes.forEach((cartao) => {

    const corresponde = cartao.dataset.name
      .toLocaleLowerCase("pt-BR")
      .includes(termo);

    cartao.hidden = !corresponde;

    if (corresponde) {
      encontrados += 1;
    }

  });

  mensagemVazia.hidden = encontrados !== 0;
}


// Executa pesquisa ao enviar
document
  .getElementById("formBusca")
  .addEventListener("submit", (evento) => {

    evento.preventDefault();

    pesquisarScooter();
  });


// Pesquisa enquanto digita
campoBusca.addEventListener("input", pesquisarScooter);


// modo escuro

const botaoTema = document.getElementById("botaoTema");

const temaSalvo = localStorage.getItem("massolini-tema");

if (temaSalvo === "escuro") {
  document.documentElement.classList.add("tema-escuro");
}


botaoTema.addEventListener("click", () => {

  const escuro = document.documentElement.classList.toggle("tema-escuro");

  localStorage.setItem(
    "massolini-tema",
    escuro ? "escuro" : "claro"
  );

  botaoTema.setAttribute(
    "aria-label",
    escuro ? "Ativar modo claro" : "Ativar modo escuro"
  );

});


// lista de tarefa

document
  .getElementById("formTarefa")
  .addEventListener("submit", (evento) => {

    evento.preventDefault();

    const campo = document.getElementById("campoTarefa");

    const texto = campo.value.trim();

    if (!texto) return;


    // ele cria o item da lista
    const item = document.createElement("li");

    item.className = "item-tarefa";


    // Caixa para marcar tarefa que foi concluída
    const marcar = document.createElement("input");

    marcar.type = "checkbox";

    marcar.setAttribute(
      "aria-label",
      `Marcar ${texto} como concluída`
    );


    // Texto da tarefa
    const descricao = document.createElement("span");

    descricao.className = "texto-tarefa";

    descricao.textContent = texto;


    // Botão para remover tarefa
    const remover = document.createElement("button");

    remover.type = "button";

    remover.className = "remover-tarefa";

    remover.textContent = "×";

    remover.setAttribute(
      "aria-label",
      `Remover tarefa ${texto}`
    );


    // Marca a tarefa como concluida
    marcar.addEventListener("change", () => {

      item.classList.toggle(
        "concluida",
        marcar.checked
      );

    });


    // tira a tarefa
    remover.addEventListener("click", () => {
      item.remove();
    });


    // Adiciona os elementos à lista
    item.append(marcar, descricao, remover);

    document.getElementById("listaTarefas").append(item);


    // Limpa o campo
    campo.value = "";

    campo.focus();

  });


// auxiliar demostrativo

document
  .getElementById("formPergunta")
  .addEventListener("submit", (evento) => {

    evento.preventDefault();

    const campo = document.getElementById("campoPergunta");

    const pergunta = campo.value.trim();

    if (!pergunta) return;


    const conversa = document.getElementById("conversa");


    // Mostra a pergunta que foi feita
    const falaUsuario = document.createElement("p");

    falaUsuario.className = "fala usuario";

    falaUsuario.textContent = pergunta;

    conversa.append(falaUsuario);


    // faz a resposta
    const resposta = document.createElement("p");

    resposta.className = "fala";

    const texto = pergunta.toLocaleLowerCase("pt-BR");


    // Respostas sobre a scooter citada
    if (
      texto.includes("n9") ||
      texto.includes("yoyo")
    ) {

      resposta.textContent =
        "A Yoyo Racing N9 é anunciada com motor de 1000 W, velocidade de até 32 km/h e bateria removível. Confira a versão no link de referência.";

    } else if (texto.includes("x13")) {

      resposta.textContent =
        "A X13 é um modelo de estilo Chopper anunciado com motor de 1000 W. Bateria e detalhes variam conforme o anúncio.";

    } else if (
      texto.includes("ouxi") ||
      texto.includes("ft03")
    ) {

      resposta.textContent =
        "A Ouxi FT03 é anunciada com bateria de lítio 48 V e pneus largos. Confirme a ficha técnica da versão.";

    } else {

      resposta.textContent =
        "Posso ajudar com informações básicas sobre a Yoyo Racing N9, a X13 ou a Ouxi FT03. Escreva o nome de um desses modelos.";

    }


    // Mostra a resposta
    conversa.append(resposta);

    conversa.scrollTop = conversa.scrollHeight;

    campo.value = "";

  });
