var express = require('express');
var bodyParser = require('body-parser');


var app  = express();
const port = 3000

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var messages = [
	{name: "john", message: "hello"},
	{name: "ceci", message: "hi"}
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/messages', (req, res) => {
	res.send(messages);
});

app.post('/messages', (req, res) => {
	messages.push(req.body);
	res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));