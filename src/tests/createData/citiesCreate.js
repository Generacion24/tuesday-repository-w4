const City = require("../../models/City")

const citiesCreate = async()=>{

    const cities = [
        {
            name:"Lima",
            country:"Peru",
            isCapital:true
        },
        {
            name:"to delete",
            country:"to delete",
            isCapital:true
        }
    ]

    await City.bulkCreate(cities)

}

module.exports = citiesCreate