function quote(carValue, riskRating){
  // let banana = carValue.replace(/[^\d.]/g, '')
  // let car_value = parseFloat(banana)
  let car_value = carValue
  let risk_rating = riskRating

  console.log(`the car value is ${car_value}`)

  console.log(`this is line 9 ${parseInt(car_value)}`)

  if (typeof car_value === "string"){
    car_value = parseFloat(car_value.replace(/[^\d.]/g, ''))
    console.log(car_value)
    console.log(typeof car_value)
    console.log(`this is line 13 ${car_value}`)
    if( isNaN(car_value)) {
      console.log("please enter a number") 
      return "Please ensure you are entering numerical numbers" 
    }
  } else if(car_value <= 0 ){
   return "Car value must be a positive number"
  } else if(risk_rating <=0 || risk_rating >5){
    return "Risk rating must be between 1 and 5"
  } else if (!car_value || !risk_rating ){
    return "Please enter a value for all fields"
  } else if (typeof car_value !== "number" || typeof risk_rating !== "number" || isNaN(car_value) || isNaN(risk_rating)){
    return "Please enter numbers only" 
  } 


    const yearly_premium =  ((car_value * risk_rating) / 100).toFixed(2)
    const monthly_premium = (yearly_premium / 12).toFixed(2)

    console.log({
      "monthly_premium": Number(monthly_premium),
      "yearly_premium": Number(yearly_premium)
    })
  return {
    "monthly_premium": Number(monthly_premium),
    "yearly_premium": Number(yearly_premium)
  }
}


// const example = '$8400';

// const onlyNumbers = example.replace(/[^\d.]/g, '');
// const floated = float(onlyNumbers)
// console.log(onlyNumbers); 
// console.log(typeof onlyNumbers)

// console.log(parseFloat("3000.99"))


module.exports = quote


// console.log(quote(7530, 2))
// console.log(quote(15300, 0))
// console.log(quote(8350, 6))
// console.log(quote(6400, 'three'))
// console.log(quote('six thousand', 2))
// console.log(quote(-2000, 5))
// console.log(quote(4700, -1))
// console.log(quote(5))