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

let chores = [
	{
		id: 1,
		description: 'Read the quibbler',
		assignedTo: 1,
		completed: true
	},
	{
		id: 2,
		description: 'Visit Dobby, may he rest in paradise',
		assignedTo: 1,
		completed: true
	}
];
let choreId = 1;

server.get('/chores', (req, res) => {
	res.status(200).json(chores);
});

server.get('/chores/:id', (req, res) => {
	const chore = chores.find((chore) => chore.id === Number(req.params));
});
server.post('/chores', (req, res) => {
	const { id, description, assignedTo, completed } = req.body;

	const newChore = { id: choreId };
});

server.put('/', (req, res) => {});
server.delete('/chores', (req, res) => {});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('running on that 8000 though'));
