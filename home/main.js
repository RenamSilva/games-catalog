const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "94bd9a0258mshbb54c719823d4d2p19082ajsn4760e6d66c6a",
    },
};

//              GLOBAIS

const balaogrande = document.getElementById("balaogrande");
const balaopequeno = document.getElementById("balaocentro");
const balaofav = document.getElementById("games")

var jogos = [];
let contagem = 0;
let atual = "";

function limparTela() {
    document.getElementById("paicentral").innerHTML = "";

    const myNode = document.getElementById("paibalaomenor");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

//--------------- ABRE FILTROS CATEGORIA------------

async function Todos() {
    limparTela();
    jogos = await pegarPopularidade();
    atual = "all";
    contagem = 0;

    colocarJogosNaTela(jogos);
}

async function Browser() {
    limparTela();
    jogos = await pegarBrowser();
    atual = "browser";
    contagem = 0;
    colocarJogosNaTela(jogos);
}
async function PCP() {
    limparTela();
    jogos = await pegarPC();
    atual = "pc";
    contagem = 0;
    colocarJogosNaTela(jogos);
}

// MODALIDADES

async function pvp() {
    limparTela();
    jogos = await pegarPvp(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function mmofps() {
    limparTela();
    jogos = await pegarmmofps(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Survival() {
    limparTela();
    jogos = await pegarSurvival(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Space() {
    limparTela();
    jogos = await pegarSpace(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Fighting() {
    limparTela();
    jogos = await pegarFighting(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Horror() {
    limparTela();
    jogos = await pegarHorror(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Racing() {
    limparTela();
    jogos = await pegarRacing(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}

async function Tank() {
    limparTela();
    jogos = await pegarTank(atual);
    contagem = 0;
    colocarJogosNaTela(jogos);
}


//-------- COLOCAR 10 ELEMENTOS NA TELA ---------

function colocarJogosNaTela(jogosNaTela = jogos) {
    document.getElementById('botaoCarregar').style.display = 'block'
    if (contagem == 0) {
        const cloneBalaoGrande = balaogrande.cloneNode(true);

        cloneBalaoGrande.getElementsByTagName("h2")[0].innerHTML =
            jogosNaTela[0].title;
        cloneBalaoGrande.setAttribute(
            "style",
            `background-image: url(${jogosNaTela[0].thumbnail}); background-size: cover;`
        );
        cloneBalaoGrande.style.display = "flex";
        cloneBalaoGrande
            .getElementsByTagName("a")[0]
            .setAttribute("href", `${jogosNaTela[0].freetogame_profile_url}`); // AO CLICAR NO NOME DO JOGO, REDIRECIONA PARA A PAGINA DO JOGO
        document.getElementById("paicentral").appendChild(cloneBalaoGrande);
        contagem++;
    }

    for (let i = contagem; i <= contagem + 8; i++) {
        if(!jogosNaTela[i]){
            document.getElementById('botaoCarregar').style.display = 'none'
            contagem++
            return;
        }

        const cloneBalaoPequeno = balaopequeno.cloneNode(true);

        cloneBalaoPequeno.getElementsByTagName('a')[0].addEventListener("click", () => {
            favoritos(jogosNaTela[i])
        })


        cloneBalaoPequeno.getElementsByTagName("h2")[0].innerHTML =
            jogosNaTela[i].title;
        cloneBalaoPequeno.setAttribute(
            "style",
            `background: url(${jogosNaTela[i].thumbnail}); background-size: cover;`
        );
        cloneBalaoPequeno.style.display = "flex";
        cloneBalaoPequeno
            .getElementsByTagName("a")[1]
            .setAttribute("href", `${jogosNaTela[i].freetogame_profile_url}`); // AO CLICAR NO NOME DO JOGO, REDIRECIONA PARA A PAGINA DO JOGO
        cloneBalaoPequeno.classList.add(`show-balao-${i}`);

        document.getElementById("paibalaomenor").appendChild(cloneBalaoPequeno);
        ScrollReveal().reveal(`.show-balao-${i}`, {
            //EFEITO SCROLLREVEAL
            duration: 2000,
        });
    }

    document.getElementById('botao').style.display = 'flex';
    document.getElementById('favTitulo').style.display = 'none'
    document.getElementById('hideMenu').style.display = 'flex'
    contagem += 9;
}

function limparTela() {
    document.getElementById("paicentral").innerHTML = "";
    let i = 1;

    const myNode = document.getElementById("paibalaomenor");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}



//---------- ANIMAÇÃO MENU LATERAL---------

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));