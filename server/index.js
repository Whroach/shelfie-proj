require('dotenv').config();
const express = require('express'),
    app = express(),
    massive = require('massive'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    ctrl = require('./controller')



/*invoke the massive function by passing in our connection string 
to get connected to our db and return instance of it*/

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(db => {
        app.set('db', db);
    })
    .catch(error => console.log(error));





app.use(express.json());

app.get('/api/products', ctrl.getProducts)
app.post('/api/product', ctrl.addProduct)
app.put('/api/product/:id', ctrl.editProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)



app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}`)});
