require("dotenv").config();
const mongoose = require("mongoose")

const URI = process.env.MONGODB_CONNECT_URI

async function main(){
    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect(URI)

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}


module.exports = main