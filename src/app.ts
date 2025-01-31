import express from "express"
import products from './routes/products/products'

const app = express()

app.use(express.json())
app.use('/api', products)

export default app