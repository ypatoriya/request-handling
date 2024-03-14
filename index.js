const userData = require('./users')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello")

})

//for params
function id(userId) {
    const user = userData.find(user => user.id === parseInt(userId));
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

//for query
app.get('/search', (req, res) => {
    try {
        const query = req.query.name;
        const results = userData.filter(user => {
            return user.name.toLowerCase().includes(query.toLowerCase());
        });

        res.json(results);
    } catch (error) {
        res.send("error");
    }
});


app.post('/userid', (req, res) => {

    try {
        let { id, dob, email, username, name } = req.body;

        let resx = userData.filter((val) => {
            if (val.id === id || val.dob === dob || val.email === email || val.username === username || val.name === name) {
                return val
            }
        })
        res.status(200).json(resx);

    } catch (error) {
        res.send(error.message);
    }
})

//using params
app.get('/user/:id', (req, res) => {
    try {
        let resx = id(req.params.id);
        res.json(resx);
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})

