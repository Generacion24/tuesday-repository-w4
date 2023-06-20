const supertest = require('supertest')
const app = require('../app')
const Product = require('../models/Product')

test("GET -> '/api/v1/products' should return status code 200", async()=>{
    const res = await supertest(app).get('/api/v1/products')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
})

test("POST -> '/api/v1/products' should return status code 201", async()=>{
    const product = {
        name:"phone",
        category:"technology",
        price:1400
    }

    const res = await supertest(app)
        .post('/api/v1/products')
        .send(product)

    expect(res.status).toBe(201)
    expect(res.body.name).toBe(product.name)

})

