//Andrea2.0 created Nov 28th
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required:[true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required:[true, 'Please enter product description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required:[true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema)

// Create new product => /product/newProduct
async function createProduct(productData) {
    let newProduct = new Product(productData)
    let createdProduct = await newProduct.save()
    return createdProduct
}

// Get all products => /product/products
async function getProducts(){
    return Product.find({})
}

//Get single product => /product/:id
async function findById(id){
    return Product.findById(id)
}

async function findByIdAndUpdate(id, body){
    return Product.findByIdAndUpdate(id, body)
}

async function deleteOne(){
    return Product.deleteOne()
}
module.exports = {
    createProduct,
    getProducts,
    findById,
    findByIdAndUpdate,
    deleteOne
}