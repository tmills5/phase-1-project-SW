//need to populate the section when clicked on 
//then a way to show the user



//CONSTANTS-----------------------------------------

const rootUrl = "https://swapi.dev/api/"
const peopleUrl = "https://swapi.dev/api/people/"
const filmsUrl = "https://swapi.dev/api/films/"
const starshipsUrl = "https://swapi.dev/api/starships/"
const planetsUrl = "https://swapi.dev/api/planets/"
//const vehiclesUrl = "https://swapi.dev/api/vehicles/"
//const speciesUrl = "https://swapi.dev/api/species/"

const peopleBtn = document.getElementById("people-btn")
//const itemList = document.getElementById("item-list")
const filmsBtn = document.getElementById("films-btn")
const starshipsBtn = document.getElementById("starships-btn")
const planetsBtn = document.getElementById("planets-btn")
const listCollection = document.getElementById("list-collection")


//EVENT HANDLERS / FETCH HANDLERS-----------------------------


const fetchAllPeople = () => {
  //GET request for all people from base url and render to document
  
  fetch(peopleUrl)
    .then(response => response.json())
    .then(people => { //console.log(people) people is an object
      peopleEntries = people.results; //converted to an array, results is key for array of characters
      peopleEntries.forEach(person => {
        //console.log(person)
        renderEachPerson(person);
      });
    })
  }

const fetchAllFilms = () => {
  //GET request for all films from base url and render to document
  
  fetch(filmsUrl)
    .then(response => response.json())
    .then(movies => { //console.log(movies) //people is an object
      moviesEntries = movies.results; //converted to an array, results is key for array of characters
      moviesEntries.forEach(movie => {
        //console.log(movie)
        renderEachFilm(movie);
      });
    })
  }

const fetchAllStarships = () => {
  //GET request for all ships from base url and render to document
  
  fetch(starshipsUrl)
    .then(response => response.json())
    .then(ships => { //console.log(ships) //ships is an object
      shipsEntries = ships.results; //converted to an array, results is key for array of characters
      shipsEntries.forEach(ship => {
        //console.log(ship)
        renderEachStarship(ship);
      });
    })
  }

const fetchAllPlanets = () => {
  //GET request for all ships from base url and render to document
  
  fetch(planetsUrl)
    .then(response => response.json())
    .then(planets => { //console.log(planets) //planets is an object
      planetsEntries = planets.results; //converted to an array, results is key for array of characters
      planetsEntries.forEach(planet => {
        //console.log(planet)
        renderEachPlanet(planet);
      });
    })
  }


   

//RENDER FUNCTIONS----------------------------

const renderEachPerson = person => {
  const {name, gender, hair_color, skin_color, height} = person  //what shows up to user
  //const personLi = document.createElement("li")
  const characterCard = document.createElement("div");
  characterCard.className = ("card")
  //const charName = document.createElement("h3")
  //charName.textContent = `${person.name}`;
   characterCard.innerText = `${name}
   Gender: ${gender}
   Hair: ${hair_color}
   Skin: ${skin_color}
   Height: ${height}`
  //itemList.append(personLi)
  listCollection.append(characterCard)
}

const renderEachFilm = film => {
  const {title, episode_id, opening_crawl, release_date} = film
  //const filmLi = document.createElement("li")
  const filmCard = document.createElement("div");
  filmCard.className = ("card")
  filmCard.innerText = `${title}: Episode ${episode_id}

    ${opening_crawl}

    Released ${release_date}`
  listCollection.append(filmCard)
}

const renderEachStarship = ship => {
  const {name, model, starship_class} = ship
  //const shipLi = document.createElement("li")
  shipCard = document.createElement("div")
  shipCard.className = ("card")
  shipCard.innerText = `${name} 
    Model: ${model}
    Class: ${starship_class}`
  listCollection.append(shipCard)
}

const renderEachPlanet = planet => {
  const {name, terrain, population, climate} = planet
  //const planetLi = document.createElement("li")
  planetCard = document.createElement("div")
  planetCard.className = ("card")
  planetCard.innerText = `${name} 
    Terrain: ${terrain}
    Population: ${population}
    Climate: ${climate}`
  listCollection.append(planetCard)
}

//--------------first try at card--------might delete
const renderCard = function(elem) {
  const listCollection = document.getElementById("list-collection");
    console.log(listCollection)
  elem.forEach(card => {
    
    divCard.id = `${card.name}`

    const h2 = document.createElement("h2")
    h2.innerText = card.name;
                    //adding to the card
    divCard.append(h2)
    listCollection.append(divCard)
    
  })
}

//EVENT LISTENERS-------------------------------

peopleBtn.addEventListener("click", fetchAllPeople)
filmsBtn.addEventListener("click", fetchAllFilms)
starshipsBtn.addEventListener("click", fetchAllStarships)
planetsBtn.addEventListener("click", fetchAllPlanets)