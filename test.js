const request = require('supertest')('http://localhost:4000');
const assert = require('chai').assert;

describe('Quote API', () => {


  it('POST /quote', () => {
    const data = {
      "car_value": 7530,
      "risk_rating": 2,
    };
    return request
      .post('/quote')
      .send(data) // send payload data
      .then((res) => {
      
        assert.equal(res.status, 200)
        assert.equal(res.body.monthly_premium, 12.55);
        assert.equal(res.body.yearly_premium, 150.6);
      });
  });


});