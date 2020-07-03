


module.exports = {

    getProducts: ( req, res) => {
        const db = req.app.get('db')

        db.get_products() //invoke get_products.sql file to SELECT * FROM products 
        .then(products => res.status(200).send(products))
        .catch(error => console.log(error))
    },

    addProduct: (req,res) =>{
        const db = req.app.get('db')

        const {productName, price, image} = req.body

        db.post_product({productName}, {price}, {image})
        .then(res => res.setStatus(200))
        .catch(error => console.log(error))

    },


};