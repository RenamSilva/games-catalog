const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '94bd9a0258mshbb54c719823d4d2p19082ajsn4760e6d66c6a'
    }
};

const balaogrande = document.getElementById("balaogrande")
const balaopequeno = document.getElementById("balaocentro")
const balaofav = document.getElementById("games")


var jogos = []
let contagem = 0;
let atual = ''

function limparTela() {
    document.getElementById("paicentral").innerHTML = '';
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "94bd9a0258mshbb54c719823d4d2p19082ajsn4760e6d66c6a",
    },
};

const balaogrande = document.getElementById("balaogrande");
const balaopequeno = document.getElementById("balaocentro");

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

async function Todos() {
    limparTela();
    jogos = await pegarTodos()
    atual = 'all'
    contagem = 0
    colocarJogosNaTela(jogos)
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
// funções das modalidades

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
    colocarJogosNaTela(jogos)
}

async function pegarmmofps(atual) {
    console.log(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=mmofps`)
    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=mmofps`, options)
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
}

async function pegarPvp(atual) {
    console.log(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=pvp`)
    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=pvp`, options)
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
}

function colocarJogosNaTela(jogosNaTela = jogos) {
    if (contagem == 0) {
        const cloneBalaoGrande = balaogrande.cloneNode(true);

        cloneBalaoGrande.getElementsByTagName("h2")[0].innerHTML = jogosNaTela[0].title
        cloneBalaoGrande.setAttribute("style", `background-image: url(${jogosNaTela[0].thumbnail}); `)
        cloneBalaoGrande.style.display = 'flex'

        document.getElementById("paicentral").appendChild(cloneBalaoGrande)
        contagem++;
    }

    for (let i = contagem; i <= contagem + 8; i++) {
        const cloneBalaoPequeno = balaopequeno.cloneNode(true)
        cloneBalaoPequeno.getElementsByTagName('a')[0].addEventListener("click", () => {
            favoritos(jogosNaTela[i])
        })

        cloneBalaoPequeno.getElementsByTagName("h2")[0].innerHTML = jogosNaTela[i].title
        cloneBalaoPequeno.setAttribute(
            "style",
            `background: url(${jogosNaTela[i].thumbnail}); background-size: cover;`
        )
        cloneBalaoPequeno.style.display = 'flex'

        document.getElementById("paibalaomenor").appendChild(cloneBalaoPequeno)
    }
    document.getElementById('botao').style.display = 'flex';
    document.getElementById('favTitulo').style.display = 'none'
    document.getElementById('hideMenu').style.display = 'flex'
    contagem += 9;
}

function limparTela() {
    document.getElementById("paicentral").innerHTML = '';
    let i = 1

    const myNode = document.getElementById("paibalaomenor");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

async function pegarTodos() {
    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
}


async function Plataforms() {
    return await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all')
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
}
async function PC() {
    return await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc')
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
}

// colocarJogosNaTela(jogos);

async function pegarBrowser() {
    return await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
        .catch(err => console.error(err));
}
// MENU LATERAL

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

// adicionar jogo aos fav ao clicar

let favorites = JSON.parse(localStorage.getItem('favorites')) || []

document.querySelector('.balaocentro').onclick = function () {

    const games = document.querySelector('.balaocentro').src

    favorites.push(games)
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

function favoritos(data) {

    const favoritos = localStorage.getItem("favoritos")
    let listFavoritos = JSON.parse(favoritos) ?? []

    listFavoritos.push(data)
    localStorage.setItem('favoritos', JSON.stringify(listFavoritos))
}

function carregarFavoritos() {
    limparTela()
    const favoritos = localStorage.getItem("favoritos")
    colocarJogosNaTelaFavoritos(JSON.parse(favoritos))

}


function colocarJogosNaTelaFavoritos(jogosNaTela) {
    limparTela()
    document.getElementById('botao').style.display = 'none'
    document.getElementById('hideMenu').style.display = 'none'
    document.getElementById('favTitulo').style.display = 'block'

    if (jogosNaTela) {
        for (let i = 0; i <= jogosNaTela.length + 8; i++) {
            const cloneBalaoPequeno = balaofav.cloneNode(true)
            cloneBalaoPequeno.getElementsByTagName("h2")[0].innerHTML = jogosNaTela[i].title
            cloneBalaoPequeno.getElementsByTagName("img")[0].setAttribute("src", `${jogosNaTela[i].thumbnail}`)
            cloneBalaoPequeno.getElementsByTagName("a")[0].setAttribute("href", `${jogosNaTela[i].game_url}`)
            cloneBalaoPequeno.style.display = 'flex'

            document.getElementById("paibalaomenor").appendChild(cloneBalaoPequeno)
        }
    } else {
        alert("sem favoritos")
    }
}

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

async function pegarPC() {
    return await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarTank(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=tank`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarRacing(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=racing`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarHorror(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=horror`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarFighting(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=fighting`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarSpace(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=space`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarSurvival(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=survival`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarmmofps(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=mmofps`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function pegarPvp(atual) {
    return fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${atual}&category=pvp`,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

function colocarJogosNaTela(jogosNaTela = jogos) {
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
            .setAttribute("href", `${jogosNaTela[0].game_url}`);
        document.getElementById("paicentral").appendChild(cloneBalaoGrande);
        contagem++;
    }

    for (let i = contagem; i <= contagem + 8; i++) {
        const cloneBalaoPequeno = balaopequeno.cloneNode(true);

        cloneBalaoPequeno.getElementsByTagName("h2")[0].innerHTML =
            jogosNaTela[i].title;
        cloneBalaoPequeno.setAttribute(
            "style",
            `background: url(${jogosNaTela[i].thumbnail}); background-size: cover;`
        );
        cloneBalaoPequeno.style.display = "flex";
        cloneBalaoPequeno
            .getElementsByTagName("a")[0]
            .setAttribute("href", `${jogosNaTela[i].game_url}`);
        cloneBalaoPequeno.classList.add(`show-balao-${i}`);

        document.getElementById("paibalaomenor").appendChild(cloneBalaoPequeno);
        ScrollReveal().reveal(`.show-balao-${i}`, {
            duration: 2000,
        });
    }

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

async function pegarTodos() {
    return fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

async function Plataforms() {
    return await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all"
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}
async function PC() {
    return await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc"
    )
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
}

// colocarJogosNaTela(jogos);

async function pegarBrowser() {
    return await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => console.error(err));
}
// MENU LATERAL

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));