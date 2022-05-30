const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '94bd9a0258mshbb54c719823d4d2p19082ajsn4760e6d66c6a'
    }
};

const balaogrande = document.getElementById("balaogrande")
const balaopequeno = document.getElementById("balaocentro")
var jogos = []
let contagem = 0;
let atual = ''
function limparTela() {
    document.getElementById("paicentral").innerHTML = '';

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
    jogos = await pegarBrowser()
    atual = 'browser'
    contagem = 0
    colocarJogosNaTela(jogos)
}

// funções das modalidades

async function pvp() {
    limparTela()
    jogos = await pegarPvp(atual)
    contagem = 0
    colocarJogosNaTela(jogos)
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

        cloneBalaoPequeno.getElementsByTagName("h2")[0].innerHTML = jogosNaTela[i].title
        cloneBalaoPequeno.setAttribute("style", `background: url(${jogosNaTela[i].thumbnail}); background-size: cover;`)
        cloneBalaoPequeno.style.display = 'flex'

        document.getElementById("paibalaomenor").appendChild(cloneBalaoPequeno)
    }

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

    const imageSource = document.querySelector('.balaocentro').src

    favorites.push(imageSource)
    localStorage.setItem('favorites', JSON.stringify(favorites))
}