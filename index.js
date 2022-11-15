const express = require('express')
const app = express()
const autoComplete = require('./data/auto-complete.json');
const agenciesList = require('./data/agencies/list.json');
const agenciesGetListing = require('./data/agencies/get-listing.json');
const propertiesDetail = require('./data/properties/detail.json');
const propertiesList = require('./data/properties/list.json');



app.get('/auto-complete', (req, res) => {
    res.send(autoComplete)
})

app.get('/agencies/list', (req, res) => {
    res.send(agenciesList)
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