const Product = require("../../models/Product")

const productCreate = async()=>{

    const createProduct = [
        {
            name:"phone",
            category:"technology",
            price:1400
        },
        {
            name:"to delete",
            category:"to delete",
            price:1400
        }
    ]

    await Product.bulkCreate(createProduct)

}

module.exports = productCreate