import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import emailRoutes from './route/email.route.js'


import bookRoutes from './route/book.route.js'
import userRoutes from './route/user.route.js'
const app = express()

app.use(cors())
app.use(express.json())


dotenv.config()
const port = 3000

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MongoDBURI
// connect to mongoDB

try {
  mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
  });
  console.log("Connected to MongoDB")
} catch (error) {
  console.log("Error: ",error)
}

// connect to routes
app.use('/book', bookRoutes)
app.use('/user', userRoutes)
app.use('/email', emailRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})