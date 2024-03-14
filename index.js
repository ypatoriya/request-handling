const userData = require('./users')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello")

})

app.post('/userid', (req, res) => {

    try {
        let {id,dob,email,username,name} = req.body;
        //id = Number.parseInt(id);

        // if (isNaN(id)) {
        //     throw new Error("invalid id")
        // }
    
        let resx  = userData.filter((val)=>{
            if (val.id===id || val.dob ===dob || val.email ===email || val.username ===username || val.name ===name) {
                return val
            }
        })
        res.status(200).json(resx);

    } catch (error) {
        res.send(error.message);
    }
})



app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})


// app.get('/user/id:', (req, res) => {

//     try {
//         let resx = id(req.params.id)
//         res.json(resx);

//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.post('/dob', (req, res) => {

//     try {
//         let resx = dob(req.body.dob)
//         res.json(resx);

//     } catch (error) {
//         res.send(error.message);
//     }
// })
