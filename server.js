var express = require('express');

var app  = express();
const port = 3000

app.use(express.static(__dirname));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));