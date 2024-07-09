const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var amount = (req.body.amount);
    var result
    if (req.body.currency === 'usd') {
        result = amount * 0.27;
    } 
    else if (req.body.currency === 'eur') {
        result = amount * 0.25;
    } 
    else if (req.body.currency === 'omr') {
        result = amount * 0.10;
    }
    res.send("Converted amount is: " + result);
    });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});