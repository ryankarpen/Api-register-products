require("dotenv").config();
const mongoose = require("mongoose")

const uri = process.env.MONGODB_CONNECT_URI

async function main(){
    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect(uri)

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}


module.exports = main