const ProductModel = require("../models/Product")


const validateCode = (code) => {

    const codeLength = code.toString().length

    if(codeLength !== 5){
        return false
    }

    return true
}   

const productController = {
    create: async(req, res) => {
        try {

            const product = {
                name: req.body.name,
                code: req.body.code,
                price: req.body.price,
                description: req.body.description,
            }

            if(!validateCode(product.code)){
                res.status(406).json({msg: "código não está no formato correto"})
                return
            }

            const response = await ProductModel.create(product)
            
            res.status(201).json({response, msg: "Produto cadastrado com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {
        try {
            
            const products = await ProductModel.find()

            res.json(products)

        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    get: async(req, res) => {
        try {
            
            const id = req.params.id
            const product = await ProductModel.findById(id)

            if(!product){
                res.status(404).json({msg: "Produto não encontrado"})
                return
            }

            res.json(product)

        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    delete: async(req, res) => {
        try {
            
            const id = req.params.id
            const product = await ProductModel.findById(id)

            if(!product){
                res.status(404).json({msg: "Produto não encontrado"})
                return
            }

            const deletedProduct = await ProductModel.findByIdAndDelete(id)
            res.status(200).json({deletedProduct, msg: "Produto excluído com sucesso"})

        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    update: async(req, res) => {
        try {
            
            const id = req.params.id

            const product = {
                name: req.body.name,
                code: req.body.code,
                price: req.body.price,
                description: req.body.description,
            }

            const updatedProduct = await ProductModel.findByIdAndUpdate(id, product)

            if(!updatedProduct){
                res.status(404).json({msg: "Produto não encontrado"})
                return
            }

            res.status(200).json({updatedProduct, msg: "Produto atualizado com sucesso"})

        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
}

module.exports = productController