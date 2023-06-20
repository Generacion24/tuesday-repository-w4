const supertest = require("supertest")
const app = require("../app")

test("GET -> '/api/v1/cities' should return status code 200 and to have length is 2",async()=>{
    const res = await supertest(app).get('/api/v1/cities')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
})

test("POST -> '/api/v1/cities' should return status code 201 ", async()=>{
    const city =  {
        name:"Cordoba",
        country:"Argentina",
        isCapital:false
    }
    const res = await supertest(app)
        .post('/api/v1/cities')
        .send(city)

    expect(res.status).toBe(201) //code
    expect(res.body.name).toBe(city.name) 
})