// Funcao para armazenar os jogos no localStorage

function favoritos(data) {

    const favoritos = localStorage.getItem("favoritos")
    let listFavoritos = JSON.parse(favoritos) ?? []

    listFavoritos.push(data)
    localStorage.setItem('favoritos', JSON.stringify(listFavoritos))
}

// Funcao para pegar os jogos do localStorage

function carregarFavoritos() {
    limparTela()
    const favoritos = localStorage.getItem("favoritos")
    colocarJogosNaTelaFavoritos(JSON.parse(favoritos))
}

// Funcao para exibir os jogos na pagina de fav

function colocarJogosNaTelaFavoritos(jogosNaTela) {
    limparTela();
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
        document.getElementById('withoutGames').style.display = 'flex'
    }
}