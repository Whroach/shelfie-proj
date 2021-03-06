


module.exports = {

    getProducts: ( req, res) => {
        const db = req.app.get('db')

        db.get_products() //invokes get_products.sql file to SELECT * FROM products 
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    },

    addProduct: (req,res) =>{
        const db = req.app.get('db')

        const { productName, price, image } = req.body

        db.post_product({productName: productName, price: price, image: image})
        .then(() => res.sendStatus(200))
        .catch(error => console.log(error))

    },

    editProduct: (req,res) => {
        const { id } = req.params

        const db = req.app.get('db')

        const {productName, price, image} = req.body

        // console.log(req.params)
        // console.log(req.body)

        db.put_product({id,productName, price, image})
        .then(() => res.sendStatus(200))
        .catch(error => console.log(error))

    },


    deleteProduct: (req, res) => {
        const { id } = req.params

        const db = req.app.get('db')

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(error => console.log(error))

    },

    getProduct: (req,res) =>{
        const { id } = req.params
        // parseInt(id)
        const db = req.app.get('db')
        console.log(id)


         db.get_product(id)

        .then(product => {
            res.status(200).send(product)
        })
        .catch(() => console.log('Here is the error'))
    }


};