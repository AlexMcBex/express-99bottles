//1. require express module
const express = require('express')

//2. import axios
const axios = require('axios')

//3. save working app
const app = express()

//4. register routes 

const bottleRoutes = require('./routes/bottles-route')
app.use('', bottleRoutes)

//5. home route
app.get("/", (req, res)=>{
    res.send(`<h1>99 Bottles of beer on the Wall </h1>`)
})

//6. other routes
// app.get("/:number", (req, res)=>{
//     const numberBottles = req.params.number
//     if(numberBottles > 0){
//         if(numberBottles == 1){
//             res.send(`<h1>${numberBottles} Bottle of beer on the Wall </h1>`)
//         }else{
//         res.send(`<h1>${numberBottles} Bottles of beer on the Wall </h1>`)
//         }
// } else {
//     res.send(`<h1>There are no bottles left on the wall</h1>`)
// }
// })


//x. catch all routes - error 404
app.get('*', (req, res)=>{
    res.send("404 - page doesn't exists")
})

//last. main entrypoint
app.listen(3000, ()=>{
    console.log("server running. ctrl+C: stop   server")
})