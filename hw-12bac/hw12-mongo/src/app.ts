import express from 'express'
import { connectDB } from './db/index'
import { ObjectId } from 'mongodb'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

async function startServer() {
  const db = await connectDB()
  const productsCollection = db.collection('products')

  app.get('/', (req, res) => {
    res.send('Server is running')
  })

  // CREATE
  app.post('/products', async (req, res) => {
    try {
      const result = await productsCollection.insertOne(req.body)
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

  // READ all
  app.get('/products', async (req, res) => {
    try {
      const products = await productsCollection.find().toArray()
      res.json(products)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

  // READ one
  app.get('/products/:id', async (req, res) => {
    try {
      const product = await productsCollection.findOne({
        _id: new ObjectId(req.params.id),
      })
      if (!product)
        return res.status(404).json({ message: 'Product not found' })
      res.json(product)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

  // UPDATE
  app.put('/products/:id', async (req, res) => {
    try {
      const result = await productsCollection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      )
      res.json(result)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

  // DELETE
  app.delete('/products/:id', async (req, res) => {
    try {
      const result = await productsCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      })
      res.json(result)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  })

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startServer()
