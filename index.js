//need to populate the section when clicked on 
//then a way to show the user



//CONSTANTS-----------------------------------------

const rootUrl = "https://swapi.dev/api/"
const peopleUrl = "https://swapi.dev/api/people/"
const peopleUrl1 = "https://swapi.dev/api/people/?page=2"
const peopleUrl2 = "https://swapi.dev/api/people/?page=3"
const peopleUrl3 = "https://swapi.dev/api/people/?page=4"
const peopleUrl4 = "https://swapi.dev/api/people/?page=5"
const peopleUrl5 = "https://swapi.dev/api/people/?page=6"
const peopleUrl6 = "https://swapi.dev/api/people/?page=7"
const peopleUrl7 = "https://swapi.dev/api/people/?page=8"
const peopleUrl8 = "https://swapi.dev/api/people/?page=9"
const allCharacterArray = []
//const filmsUrl = "https://swapi.dev/api/films/"
//const starshipsUrl = "https://swapi.dev/api/starships/"
//const planetsUrl = "https://swapi.dev/api/planets/"
//const vehiclesUrl = "https://swapi.dev/api/vehicles/"
//const speciesUrl = "https://swapi.dev/api/species/"

const peopleBtn = document.getElementById("people-btn")
const itemList = document.getElementById("item-list")
// const filmsBtn = document.getElementById("films-btn")
// const starshipsBtn = document.getElementById("starships-btn")
// const planetsBtn = document.getElementById("planets-btn")
const listCollection = document.getElementById("list-collection")



//EVENT HANDLERS / FETCH HANDLERS-----------------------------


const fetchAllPeople = () => {
  //GET request for all people from base url and render to document
  //There are nine pages total-try to fetch all nine pages and add to an empty array
  Promise.all([
    fetch(peopleUrl).then(response => response.json()),
    fetch(peopleUrl1).then(response => response.json()),
    fetch(peopleUrl2).then(response => response.json()),
    fetch(peopleUrl3).then(response => response.json()),
    fetch(peopleUrl4).then(response => response.json()),
    fetch(peopleUrl5).then(response => response.json()),
    fetch(peopleUrl6).then(response => response.json()),
    fetch(peopleUrl7).then(response => response.json()),
    fetch(peopleUrl8).then(response => response.json()),
  ])
    .then(people => {
      console.log(people[4].entries)  //people is an object
      allCharacterArray.push(people[0].results,
            people[1].results,
            people[2].results,
            people[3].results,
            people[4].results,
            people[5].results,
            people[6].results,
            people[7].results,
            people[8].results)
            console.log(allCharacterArray)
    //   allCharacterArray.forEach(person => {
    //     renderEachPerson(person)
    //   })
     })
  

  // fetch(peopleUrl)
  //   .then(response => response.json())
  //   .then(people => { //console.log(people) 
  //     peopleEntries = people.results; //converted to an array, results is key for array of characters
  //     peopleEntries.forEach(person => {
        //console.log(person)
        
        //renderEachPerson(person);
    //   });
    // })
}

// const fetchAllFilms = () => {
//   //GET request for all films from base url and render to document
  
//   fetch(filmsUrl)
//     .then(response => response.json())
//     .then(movies => { //console.log(movies) //people is an object
//       moviesEntries = movies.results; //converted to an array, results is key for array of characters
//       moviesEntries.forEach(movie => {
//         //console.log(movie)
//         renderEachFilm(movie);
//       });
//     })
//   }

// const fetchAllStarships = () => {
//   //GET request for all ships from base url and render to document
  
//   fetch(starshipsUrl)
//     .then(response => response.json())
//     .then(ships => { //console.log(ships) //ships is an object
//       shipsEntries = ships.results; //converted to an array, results is key for array of characters
//       shipsEntries.forEach(ship => {
//         //console.log(ship)
//         renderEachStarship(ship);
//       });
//     })
//   }

// const fetchAllPlanets = () => {
  //GET request for all ships from base url and render to document
  
  // fetch(planetsUrl)
  //   .then(response => response.json())
  //   .then(planets => { //console.log(planets) //planets is an object
  //     planetsEntries = planets.results; //converted to an array, results is key for array of characters
  //     planetsEntries.forEach(planet => {
  //       //console.log(planet)
  //       renderEachPlanet(planet);
  //     });
  //   })
  // }


   

//RENDER FUNCTIONS-------------(started with doing the cards)

const renderEachPerson = person => {
  const {name, gender, hair_color, skin_color, height} = person  //what shows up to user
  const personLi = document.createElement("li")
  personLi.id = `${name}`
  //const characterCard = document.createElement("div");
  //characterCard.className = ("card")
  //characterCard.id = `${name}`
  //const likeBtn  = document.createElement("btn")
  //likeBtn.className = "like-btn"
  //likeBtn.innerText = "Like!"
  //const likeNum = document.createElement("h3")
  //likeBtn.addEventListener("click", increaseLikeCount)
  //likeNum.innerText = "0"

  personLi.innerText = `${allCharacterArray.name}`
  //  Gender: ${gender}
  //  Hair: ${hair_color}
  //  Skin: ${skin_color}
  //  Height: ${height}
  itemList.append(personLi)
  //characterCard.append(img, likeNum, likeBtn)
  
  //listCollection.append(personLi)
}

// const renderEachFilm = film => {
//   const {title, episode_id, opening_crawl, release_date} = film
//   //const filmLi = document.createElement("li")
//   const filmCard = document.createElement("div");
//   filmCard.className = ("card")
//   filmCard.innerText = `${title}: Episode ${episode_id}

//     ${opening_crawl}

//     Released ${release_date}`
//   listCollection.append(filmCard)
// }

// const renderEachStarship = ship => {
//   const {name, model, starship_class} = ship
//   //const shipLi = document.createElement("li")
//   shipCard = document.createElement("div")
//   shipCard.className = ("card")
//   shipCard.innerText = `${name} 
//     Model: ${model}
//     Class: ${starship_class}`
//   listCollection.append(shipCard)
// }

// const renderEachPlanet = planet => {
//   const {name, terrain, population, climate} = planet
//   //const planetLi = document.createElement("li")
//   planetCard = document.createElement("div")
//   planetCard.className = ("card")
//   planetCard.innerText = `${name} 
//     Terrain: ${terrain}
//     Population: ${population}
//     Climate: ${climate}`
//   listCollection.append(planetCard)
//}

// function increaseLikeCount (event) {
//   //debugger
//   const likeElement = event.target.previousElementSibling
//   likeElement.innerText = parseInt(likeElement.innerText) + 1
//}
//EVENT LISTENERS-------------------------------

peopleBtn.addEventListener("click", fetchAllPeople)
// filmsBtn.addEventListener("click", fetchAllFilms)
// starshipsBtn.addEventListener("click", fetchAllStarships)
// planetsBtn.addEventListener("click", fetchAllPlanets)
