const express = require("express")
const mongoose = require("mongoose")
const app = express()
const ejs = require("ejs")
const path = require('path')
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('./controllers/userController')
const { createRestaurant, getAllRestaurants, getRestaurantById,updateRestaurantById, deleteRestaurantById } = require('./controllers/restaurantController')
const { validateUserInput } = require('./middleware/validationMiddleware')
const { Restaurant } = require("./models/restaurants")
const { twoSticks, papaThai, shanghaiWok, punjabiDhaba, tandooriBites, kaurCafe, osteriaMozza, chiSpacca, anticoNuovo, cafeSantorini, piccoloParadiso, joesFalafel } = require("./models/restaurantSeed")
const bodyParser = require("body-parser")
const PORT = 3000


//Connecting ejs template to app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))

//Create a new user and make sure all input is validated
app.post('/login', validateUserInput, createUser)

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
app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/restHome', (req, res) => {
    res.render('restHome')
}); 

app.get('/asian', (req, res) => {
    res.render('asian')
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

app.get('/twoSticks.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(twoSticks);
        res.render('twoSticks', { twoSticks })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/papaThai.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(papaThai);
        res.render('papaThai', { papaThai })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/shanghaiWok.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(shanghaiWok);
        res.render('shanghaiWok', { shanghaiWok })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/punjabiDhaba.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(punjabiDhaba)
        res.render ('punjabiDhaba', { punjabiDhaba })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/tandooriBites.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(tandooriBites)
        res.render('tandooriBites', { tandooriBites })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/kaurCafe.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(kaurCafe)
        res.render('kaurCafe', { kaurCafe })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/osteriaMozza.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(osteriaMozza)
        res.render('osteriaMozza', { osteriaMozza })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/chiSpacca.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(chiSpacca)
        res.render('chiSpacca', { chiSpacca })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/anticoNuovo.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(anticoNuovo)
        res.render('anticoNuovo', { anticoNuovo })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/cafeSantorini.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(cafeSantorini)
        res.render('cafeSantorini', { cafeSantorini })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/piccoloParadiso.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(piccoloParadiso)
        res.render('piccoloParadiso', { piccoloParadiso })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})

app.get('/joesFalafel.ejs', async (req, res) => {
    try{
        const restaurant = await Restaurant.find(joesFalafel)
        res.render('joesFalafel', { joesFalafel })
    } catch(error){
        res.status(500).send('Internal Server Error')
    }
})
//Connect to the port
app.listen( PORT, () => {
    console.log(`app is listening to ${PORT}`)
})

