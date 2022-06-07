// ---------- PLATAFORMAS HEADER ----------
async function pegarPopularidade() {
    return fetch(
            "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
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