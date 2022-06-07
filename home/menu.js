
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