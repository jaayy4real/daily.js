const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/products", productRoutes);


app.get('/', (req, res) => {
    res.send('Hello World! hey');

})





mongoose.connect("mongodb+srv://ekpojeffrey:mary4jeffrey@backenddb.ehysx44.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
})
.catch(()=>{
    console.log("Error connecting to MongoDB");
})
