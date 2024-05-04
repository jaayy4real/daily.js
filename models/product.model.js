const mongose = require('mongoose');

const productSchema = new mongose.Schema({
    names:{
        type: String,
        required: [true, 'Name is required'],
    } ,
    
    quantity:{
        type: Number,
        required: [true, 'Quantity is required'],
        default: 0
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
        default: 0
    },
    image:{
        type: String,
        required:false
    }
},
{
    timestamps: true
}
)

const Product = mongose.model('Product', productSchema); 

module.exports = Product;