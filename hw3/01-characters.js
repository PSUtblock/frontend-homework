// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

// async function to fetch the data from a given url
const fetchData = async function fetchDataFromApi(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch {
        console.error('Error', error);
    }
};

// function to create character cards and add them populate in the DOM from the given data.
// I am assuming the parameters from the GOT API, otherwise I would 
const serveCards = function createAndBuildCardDeck(data) {
    data.forEach(element => {
        const newCard = document.createElement('div');
        newCard.className = 'flex-item';
        const imageContainer = document.createElement('div');
        imageContainer.className = 'card-image';
        const cardImage = document.createElement('img');
        cardImage.src = element.imageUrl;
        cardImage.className = "card-image";
        cardImage.alt = `An image of the character ${element.firstName} ${element.lastName} from the series, Game of Thrones.`;
        
        imageContainer.appendChild(cardImage);
        newCard.appendChild(imageContainer);

        const cardName = document.createElement('h2');
        cardName.innerText = `${element.firstName} ${element.lastName}`;
        newCard.appendChild(cardName);

        const cardInfo = document.createElement('p');
        cardInfo.innerText = `${element.title}`
        newCard.appendChild(cardInfo);

        document.getElementById("charSection").appendChild(newCard);
        

    });
};

const main = async function main() {

    let characterArray = [];
    characterArray = await fetchData(url);
    
    serveCards(characterArray);

};

main();