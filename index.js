const express = require("express");
const env = require("dotenv");

const quote = require("./quote");


env.config();
const app = express();
app.use(express.json());

//========================= ENDPOINTS ==================================//

// function quote(car_value, risk_rating){
//     const yearly_premium =  ((car_value * risk_rating) / 100).toFixed(2)
//     const monthly_premium = (yearly_premium / 12).toFixed(2)
//   return {
//     "monthly_premium": Number(monthly_premium),
//     "yearly_premium": Number(yearly_premium)
//   }
// }

app.post('/quote', (req, res) =>{
    const car_value = req.body.car_value;
    const risk_rating = req.body.risk_rating;
    const content = req.body

    console.log(content)

    // console.log(req)
    res.send(quote(car_value,risk_rating))
    // res.sendStatus(200)
})

// console.log(quote(7530, 2))
// console.log(quote(15300, 0))
// console.log(quote(8350, 6))
// console.log(quote(6400, 'three'))
// console.log(quote('six thousand', 2))
// console.log(quote(-2000, 5))
// console.log(quote(4700, -1))
// console.log(quote(5))








//========================= PORT ==================================//
const PORT = process.env.PORT || 4002
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})