const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
let token = 'EAAEpbBN4NYcBO1DuYFnzZCCQvDBBOUQREkIc3lR69QTcnOuEulCFi6UIdZA0X2bZADM536ZClqBOuvZA8OobsnClVzIb2FEgRR9OOVY6dDda0pkL4y14j4AoJiYkME6Dc5ihrJ8LsP2JMvrZBfI0Co3vf45pZBXUHkuGbW7YmRJKlNaANKFrgXJFns8pZBiBDRp3uZCuXF76QtJ8t420pwjcwguGhtkxgQs8fcrO5ywNEGBnp1CsZAR3TMR0GG7jpZCe0ZC2GAZDZD';

fetch('https://graph.facebook.com/me?fields=age_range,friends', {
    method: 'GET',
    headers: new Headers({
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
    })
}).then(response => response.json())
  .then(json => console.log(json));
