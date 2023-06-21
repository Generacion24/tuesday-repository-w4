const supertest = require('supertest')
const app = require('../app')

let productId;

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

    productId = res.body.id

    expect(res.status).toBe(201)
    expect(res.body.name).toBe(product.name)

})

test("GET ONE -> '/api/v1/products/:id', should return status code 200 ", async()=>{
    const res = await supertest(app).get(`/api/v1/products/${productId}`)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe("phone")
})

test("PUT -> `/api/v1/products/:id`, should return status code and res.body.name === product.name", async()=>{
    const product = {
        name:"phone"
    }

    const res = await supertest(app)
        .put(`/api/v1/products/${productId}`)
        .send(product)

    expect(res.status).toBe(200)
    expect(res.body.name).toBe(product.name)
})

test("DELETE -> `/api/v1/products/:id`, should return status code 204", async()=>{
    const res = await supertest(app).delete(`/api/v1/products/${productId}`)
    expect(res.status).toBe(204)
})

