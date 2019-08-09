const express = require('express');

const server = express();
server.use(express.json());

const people = [
	{
		id: 0,
		name: 'Harry Potter'
	},
	{
		id: 1,
		name: 'Luna Lovegood'
	}
];

let chores = [];
let choreId = 1;

server.get('/chores', (req, res) => {
	const completed = req.query.completed;

	if (completed) {
		let filter = false;
		if (completed === 'true') {
			filter = true;
		} else {
			filter = false;
		}
		const result = chores.filter((chore) => chore.completed === filter);
	}
	res.status(200).json(chores);
});

server.get('/chores/:id', (req, res) => {
	const chore = chores.find((chore) => chore.id === req.params);
});
server.post('/chores', (req, res) => {});
server.put('/', (req, res) => {});
server.delete('/chores', (req, res) => {});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('running on that 8000 though'));
