const baseURL = "https://api.sampleapis.com/jokes/goodJokes";

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

const tableBody = document.getElementById("table-body");


function callJoke() {
    fetch(baseURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            randomJoke(data);
        })
}

function randomJoke(data) {
    resetList();
    const jokeId = Math.floor(Math.random() * data.length) + 1;
    // console.log(jokeId);
    result = data[jokeId].setup;
    // console.log(result);

    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    let jokeCell = document.createElement("td");
    // let joke = document.createElement("text");
    jokeCell.innerHTML = result;

    tableRow.appendChild(jokeCell);

}

function resetList() {
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

searchBtn.addEventListener("click", callJoke);
resetBtn.addEventListener("click", resetList);