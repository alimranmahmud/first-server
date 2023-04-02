const express = require('express')
const app = express()
const cors = require("cors");
app.use(cors())
const port = process.env.Port || 5000;
const productData = require("./Data.json")
app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/product', (req, res) => {
    res.send(productData)
})
app.get('/single/:id', (req, res) => {
    const id = req.params.id;
    const singledata = productData.find(p => p.id == id)
    res.send(singledata)
})
app.get('/category/:searchname', (req, res) => {
    const name = req.params.searchname;
    const filtername = productData.filter(c => c.category == name)
    res.send(filtername)
    console.log(req.params.searchname)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



module.exports = app;