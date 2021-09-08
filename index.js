const url = "https://swapi.dev/api/films/"

document.addEventListener("DOMContentLoaded", fetchInfo);

function fetchInfo () {
    fetch(url)
        .then(response => response.json())
        .then((json) => {
      console.log(json)
    })
}
