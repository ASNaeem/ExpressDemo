const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors');
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.set("view engine","pug");

app.get('/', (req, res) => {
    res.json({Name: 'Naeem', Id: 34, Dept: 'CSE'})
})

app.post('/', (req, res) => {
    console.log(req.body.username)
    res.redirect(`/user/${req.body.username}`)
})
app.get('/user/:username', (req, res) => {
    res.send(req.params.username)
})

app.get('/about',(req, res) => {
    res.render("about",{pretty: false});
})
app.get('/*', (req, res)=>{
    res.send("request not found: 404")
})
app.listen(3001, 'localhost', () => console.log('Server started'))