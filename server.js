const express = require("express")
const mongoose = require("mongoose")
const app = express()
const ejs = require("ejs")
const path = require('path')
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('./controllers/userController')
const { createRestaurant, getAllRestaurants, getRestaurantById,updateRestaurantById, deleteRestaurantById } = require('./controllers/restaurantController')
const { validateUserInput } = require('./middleware/validationMiddleware')
const { Restaurant } = require("./models/restaurants")
const { twoSticks } = require("./models/restaurantSeed")
const PORT = 3000


//Connecting ejs template to app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());

// //Get our home page
// const indexRouter = require("./routes/index")
// app.use("/home", indexRouter)

//Create a new user and make sure all input is validated
app.post('/users', validateUserInput, createUser);

//Get all users
app.get('/users', getUsers);

//Get a single user by ID
app.get('/users/:id', getUserById);

//Update a user by ID 
app.get('/users/:id', updateUser);

//Delete a user by ID
app.delete('/users/:id', deleteUser);

//Create a new restaurant
app.post('/restaurants', validateUserInput, createRestaurant)

//Get all restaurants 
app.get('/restaurant', getAllRestaurants)

//Get restaurant by id
app.get('/restaurant/:id', getRestaurantById)

//Update restaurant
app.put('/restaurant/:id', updateRestaurantById)

//Delete restaurant 
app.delete('/restaurant/:id', deleteRestaurantById)

//Get all of the views files
app.get('/', (req, res) => {
    res.render('home')
}); 

app.get('/asian', async (req, res) => {
    try {
        const restaurant = await Restaurant.find(twoSticks);

        res.render('asian', { twoSticks })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
});

app.get('/indian', (req, res) => {
    res.render('indian')
});

app.get('/italian', (req, res) => {
    res.render('italian')
})

app.get('/mediterranean', (req, res) => {
    res.render('mediterranean')
})
//Connect to the port
app.listen( PORT, () => {
    console.log(`app is listening to ${PORT}`)
})

