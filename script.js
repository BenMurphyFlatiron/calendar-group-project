const API = "http://localhost:3000/Holidays"


fetch(API)
    .then(resp => resp.json())
    .then(displayDefaultDays)

function displayDefaultDays(data) {
    console.log(data)
}

