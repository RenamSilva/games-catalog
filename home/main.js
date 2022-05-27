const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'cf1bbb1a8emsh5d0bf67025b2255p1bf63djsn54f95fd8dedd'
	}
};
var main_page = document.getElementById("main_page")

console.log(main_page)
let num = 0

var card_text = [10]
var card_img = [10]
var card1=[10]
	
const request = async() => {
	const obj = []

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc';
    fetch(url, options)
    const dados = await fetch(url);
    const jogos = await dados.json();
	console.log(jogos);

	for(let x=0; x < 10; x++){
		obj[x] = jogos[x]
		console.log(obj[x])
		// console.log(obj[x].title)

		card_text[x]= document.createElement("p")
		card_img[x]= document.createElement("img")

		card_img[x].src = obj[x].thumbnail
		card_img[x].appendChild(document.createTextNode(obj[x].thumbnail))
		card_text[x].appendChild(document.createTextNode(obj[x].title))
		
		console.log(card_img[x])
		console.log(card_text[x])

		card1[x] = document.createElement("div")

		card1[x].appendChild(card_img[x])
		card1[x].appendChild(card_text[x])

		main_page.appendChild(card1[x])
		
		// console.log(card1[x])

	}

	if(card1[0]){
		card1[0].classList.remove("card1")
		card1[0].classList.add("baner")
		

	}

	// card1[0].classList.add("card1")
	card1[1].classList.add("card2")
	card1[2].classList.add("card3")
	card1[3].classList.add("card4")
	card1[4].classList.add("card5")
	card1[5].classList.add("card6")
	card1[6].classList.add("card7")
	card1[7].classList.add("card8")
	card1[8].classList.add("card9")
	card1[9].classList.add("card10")


}	
main_page.classList.add("main_page_div")
request();

