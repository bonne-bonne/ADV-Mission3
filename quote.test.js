const quote = require("./quote")

describe("quote value", () =>{

    it("When value is positive and risk rating is between 1-5", () => {
        
        //Arrange
        const car_value = 7530;
        const risk_rating = 2;
        const expected = {
            "monthly_premium": 12.55,
            "yearly_premium": 150.6
        }

        //Act
        const actual = quote(car_value, risk_rating)

        //Assert
        expect(actual).toStrictEqual(expected);
    
    })

    

})