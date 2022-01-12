const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
// bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    let obiekt = {
        imie: "Imię",
        nazwisko: "Nazwisko",
        klasa: "klasa",
        grupa: "grupa"
    }
    res.send(obiekt)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})