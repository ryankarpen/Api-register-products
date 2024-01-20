// dados DB 
// senha: 4JcvirS3SnvDOdxi
// string conexão: mongodb+srv://ryankarpen2015:xxRkb7QKlx6QeIOm@cluster0.m6drdlk.mongodb.net/

const mongoose = require("mongoose")

async function main(){
    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://ryankarpen2015:xxRkb7QKlx6QeIOm@cluster0.m6drdlk.mongodb.net/")

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}


module.exports = main