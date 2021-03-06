import  express from 'express'
import  dotenv from 'dotenv'
import  products from './data/products.js'
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const app = express()

app.get('/',(req,res) =>{
    res.send('API is running.')
})

// Endpoint to return all the products --> Setting up some routes
app.get('/api/products',(req,res) =>{
    res.json(products)
})
// Endpoint to return a single product
app.get('/api/products/:id',(req,res) =>{
    const product = products.find(p =>p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)
