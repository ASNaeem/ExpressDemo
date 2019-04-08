const express = require('express'),
app = express(),
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine","pug");

app.get('/', (req, res) => {
    res.render('index', {pretty: true});
})

app.listen(3000, 'localhost', () => console.log('Server started'))