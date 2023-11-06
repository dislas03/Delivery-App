const mongoose = require('mongoose');
const error = require('mongoose/lib/error');
const { Restaurant } = require('../models/restaurants');
const { DB_URL } = require('../db/connection');

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => {
    console.log('Connected');
}) .catch((err) => {
    console.log(err)
});

const createRestaurant = async (req, res) => {
    try{
        const newRestaurant = new Restaurant(restaurantData)
        const savedRestaurant = await newRestaurant.save();
        return savedRestaurant; 
    } catch (error) {
        console.error(error);
    }
};

const getAllRestaurants = async (req, res) => {
    try{
        const restaurants = await Restaurant.find();
        return restaurants;
    } catch (error) {
        console.error(error);
    }
};

const getRestaurantById = async (req, res) => {
    try{
        const restaurant = await Restaurant.findById(restaurantID);
        return restaurant;
    } catch (error) {
        console.error(error);
    }
};

const updateRestaurantById = async (req, res) => {
    try{
        const updatedRestaurant = await Restaurant.findByIdAndUpdate( restaurantId, updatedData, { new: true } );
        return updatedRestaurant
    } catch (error) {
        console.error(error)
    }
}

const deleteRestaurantById = async (req, res) => {
    try{ 
        const deletedRestaurant = await Restaurant.findByIdAndRemove(restaurantId);
        return deletedRestaurant;
    } catch(error) {
        console.error(error)
    }
};

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById
};