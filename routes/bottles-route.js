
const express = require('express')
// import(require) the axios module - used for API calls
const axios = require('axios')

// we need to set up router, in order to keep our routes in other files.
const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('<h1>99 Bottles of Beer on the Wall</h1>')
// })

router.get("/:number", (req, res)=>{
    const numberBottles = req.params.number
    if(numberBottles > 0){
        if(numberBottles == 1){
            res.send(`<h1>${numberBottles} Bottle of beer on the Wall </h1>`)
        }else{
        res.send(`<h1>${numberBottles} Bottles of beer on the Wall </h1>`)
        }
} else {
    res.send(`<h1>There are no bottles left on the wall</h1>`)
}
})


module.exports = router