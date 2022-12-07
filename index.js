const express = require("express");
const env = require("dotenv");

const quote = require("./quote");


env.config();
const app = express();
app.use(express.json());

//========================= ENDPOINTS ==================================//


app.post('/quote', (req, res) =>{
    const car_value = req.body.car_value;
    const risk_rating = req.body.risk_rating;
    const content = req.body

    console.log(content)

    // console.log(req)
    res.send(quote(car_value,risk_rating))
    // res.sendStatus(200)
})










//========================= PORT ==================================//
const PORT = process.env.PORT || 4002
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})