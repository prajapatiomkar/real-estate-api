const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({
    origin:"*",
}))
const autoComplete = require('./data/auto-complete.json');
const agenciesList = require('./data/agencies/list.json');
const agenciesGetListing = require('./data/agencies/get-listing.json');
const propertiesDetail = require('./data/properties/detail.json');
const propertiesListForSale = require('./data/properties/list-for-sale.json')
const propertiesListForRent = require('./data/properties/list-for-rent.json')

app.get("/",(req,res)=>{
    res.send("welcome to the Real Estate Api made by Prajapati omkar")
})

app.get('/auto-complete', (req, res) => {
    res.send(autoComplete)
})

app.get('/agencies/list/for-sale', (req, res) => {
    res.send(propertiesListForSale)
})
app.get('/agencies/list/for-rent', (req, res) => {
    res.send(propertiesListForRent)
})

app.get('/agencies/get-listing', (req, res) => {
    res.send(agenciesGetListing)
})

app.get('/properties/detail', (req, res) => {
    res.send(propertiesDetail)
})

app.get('/properties/list', (req, res) => {
    res.send(propertiesList)
})



app.listen(process.env.PORT || 3000)