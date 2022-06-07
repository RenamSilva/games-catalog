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


