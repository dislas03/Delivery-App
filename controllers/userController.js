const mongoose = require('mongoose')
const error = require('mongoose/lib/error');
const { User } =  require('../models/user');
const { DB_URL } = require('../db/connection');

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => {
    console.log('Connected');
}) .catch((err) => {
    console.log(err)
});

const createUser = async (req, res) => {
    try { 
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.redirect('../restHome')
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Client error'})
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Client error'})
    }
};

const getUserById = async (req, res) => {
    try { 
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User can not be found' });
        } else {
            res.json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Client error'})
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        if (!updatedUser) {
            res.status(404).json({ error: 'User can not be found' });
        } else {
            res.json(updatedUser);
        } 
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Client error' })
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) {
            res.status(404).json({ error: 'User can not be found' })
        } else {
            res.json({ message: 'User was deleted successfully' })
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Client error' })
    }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser }