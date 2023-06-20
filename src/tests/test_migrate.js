const sequelize = require('../utils/connection');
const citiesCreate = require('./createData/citiesCreate');
const productCreate = require('./createData/productCreate');

const main = async() => {
    try{
        await sequelize.sync({ force: true }); // la deja en cero
        await citiesCreate()
        await productCreate()
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();