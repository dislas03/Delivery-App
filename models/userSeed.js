const mongoose = require('mongoose')
const { User } = require('./user.js');
const { DB_URL } = require('../db/connection');


mongoose
    .connect(DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true 
    }) .then (() => {
        console.log('mongo connected')
    }) .catch ((err) => {
        console.log(err);
    })

const davidUser = new User({
    firstName: 'David',
    lastName: 'Islas',
    email: 'islasdavid@islasdavid.com',
    password: 'islasdavid'
});

const userOne = new User({
    firstName: 'Steven',
    lastName: 'Craig',
    email: 'stevencraig@stevencraig.com',
    password: 'stevencraig'
});

const userTwo = new User({
    firstName: 'Shelly',
    lastName: 'Williams', 
    email: 'shellywilliams@shellywilliams.com',
    password: 'shellywilliams'
});

const userThree = new User({
    firstName: 'Gary',
    lastName: 'Willma',
    email: 'garywillma@garywillma.com',
    password: 'garywillma'
});

async function run() {
    try{
        let arrayOfUsers = [davidUser, userOne, userTwo, userThree]
        
        const result = await User.insertMany(arrayOfUsers)
        console.log(`${result.length} documents were inserted`)
    } finally {
        console.log(`${arrayOfUsers}`)
    }
}
run()
    .then(() => {
        mongoose.connection.close();
    }) .catch((error) => {
        console.error(error)
    })