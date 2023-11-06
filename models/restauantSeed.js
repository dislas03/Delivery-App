const mongoose = require('mongoose')
const { Restaurant } = require('./restaurants.js');
const { DB_URL } = require('../db/connection');


mongoose
    .connect(DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true 
    }) .then (() => {
        console.log('mongo connected')
    }) .catch ((err) => {
        console.log(err);
    })

const twoSticks = new Restaurant({
    name: 'Two Sticks',
    menu: ["Spicy Ramen", "Pork Katsu", "Hosomaki"],
    phone: '1111111111',
    email: 'twosticks@twosticks.com'
});

const papaThai = new Restaurant({
    name: 'Papa Thai',
    menu: ["Pad Thai","Tom Yum Goong", "Khao Soi"],
    phone: '2222222222',
    email: 'papathai@papathai.com'
});

const shanghaiWok = new Restaurant({
    name: 'Shanghai Wok',
    menu: ["Xiao Long Bao", "Peking Duck", "Shanghai Fried Noodles"],
    phone: '3333333333',
    email: 'shanghaiwok@shanghaiwok.com'  
});

const ariSushi = new Restaurant({
    name: 'Ari Sushi',
    menu: ["Tako", "Temaki", "Ari's Dragon Roll"],
    phone: '4444444444',
    email: 'arisushi@arisushi.com'
});

const punjabiDhaba = new Restaurant({
    name: 'Punjabi Dhaba',
    menu: ["Rajma Curry", "Punjabi Chloe Masala", "Dal Makhani"],
    phone: '5555555555',
    email: 'punjabidhaba@punjabidhaba.com'
});

const tandooriBites = new Restaurant({
    name: 'Tandoori Bites',
    menu: ["Chicken Barrah", "Tandoori Roti", "Paneer Tandoori"],
    phone: '6666666666',
    email: 'tandooribites@tandooribites.com',
});

const kaurCafe = new Restaurant({
    name: 'Kaur Cafe',
    menu: ["Dal Makhani", "Mutton Curry", "Palak Paneer"],
    phone: '7777777777',
    email: 'kaurcafe@kaurcafe.com',
});

const osteriaMozza = new Restaurant({
    name: 'Osteria Mozza',
    menu: ["Burratina Pugliese", "Burricotta & Artichoke", "Smoked Mozzarella di Bufala"],
    phone: '8888888888',
    email: 'osteriamozza@osteriamozza.com',
});

const chiSpacca = new Restaurant({
    name: 'Chi Spacca',
    menu: ["Spacca Affettati Misti", "Salanova Lettuces", "Whole Branzino alla piastra"],
    phone: '9999999999',
    email: 'chispacca@chispacca.com',
});

const anticoNuovo = new Restaurant({
    name: 'Antico Nuovo',
    menu: ["Amberjack Crudo", "Pollo e Crostone", "Agnello Dorato"],
    phone: '1010101010',
    email: 'anticonuovo@anticonuovo.com',
});

const cafeSantorini = new Restaurant({
    name: 'Cafe Santorini',
    menu: ["Babaghanoush", "Borek & Spanakopita", "Fried Kubbe"],
    phone: '1212121212',
    email: 'cafesantorini@cafesantorini.com',
});

const piccoloParadiso = new Restaurant({
    name: 'Piccolo Paradiso',
    menu: ["Bresaola", "Polenta Soffice", "Carpaccio di Salmone"],
    phone: '1313131313',
    email: 'piccoloparadiso@piccoloparadiso.com',
});

const joesFalafel = new Restaurant({
    name: 'Joes Falafel',
    menu: ["Chicken Shawarma", "Beef Kabob", "Beef Kafta"],
    phone: '1414141414',
    email: 'joesfalafel@joesfalafel.com',
})

//inserts all of our restaurant into our database
async function run() {
    try{
        let arrayOfRest = [twoSticks, papaThai, shanghaiWok, ariSushi, punjabiDhaba, tandooriBites, kaurCafe, osteriaMozza, chiSpacca, anticoNuovo, cafeSantorini, piccoloParadiso, joesFalafel]
        
        const result = await Restaurant.insertMany(arrayOfRest)
        console.log(`${result.insertedCount} documents were inserted`)
    } finally {
        console.log(`${arrayOfRest}`)
    }
}
// run().catch(console.dir)

module.exports = { twoSticks, papaThai, shanghaiWok, ariSushi, punjabiDhaba, tandooriBites, kaurCafe, osteriaMozza, chiSpacca, anticoNuovo, cafeSantorini, piccoloParadiso, joesFalafel }