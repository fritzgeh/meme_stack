require('dotenv').config()

const express = require ('express')
const mongoose = require ('mongoose')
const workoutRoutes = require ('./routes/workout')
const userRoutes = require ('./routes/user')

const app = express()

// middleware to parse JSON request bodies
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & Server listening on port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })