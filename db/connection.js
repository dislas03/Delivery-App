require("dotenv").config()

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ir0olgy.mongodb.net/WAD-Dashers?retryWrites=true&w=majority`

const PORT = process.env.PORT || 3000;

module.exports = { DB_URL, PORT};