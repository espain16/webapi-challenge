const express = require('express');

const server = express();
server.use(express.json());

const hoggyPeople = [
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
	const chore = chores.find((chore) => chore.id === Number(req.params.id));
	if (chore) {
		res.status(200).json(chore);
	} else {
		res.status(404).json({ message: 'Could not find chore' });
	}
});

server.get('/chores', (req, res) => {
	const completed = req.query.completed;
	const filter = completed === 'true' ? true : false;
	if (completed) {
		const answer = chores.filter(chore.completed === filter);
		res.status(200).json(answer);
	} else {
		res.status(200).json(chores);
	}
});

server.get('hoggyPeople/:id/chores', (req, res) => {
	const hoggyPerson = hoggyPeople.find((hoggyPeopleId) => hoggyPeopleId.id === Number(req.params.id));
	const chore = chores.filter(choresId.assignedTo === person.id);
	if (hoggyPerson) {
		if (chore) {
			res.status(200).json(chore);
		} else {
			return [];
		}
	} else {
		res.status(400).json({ message: 'No Hogwarts persons present' });
	}
});

server.post('/chores', (req, res) => {
	const { id, description, assignedTo, completed } = req.body;
	const newChore = { id: choreId };
});

server.put('/chores/:id', (req, res) => {
	const chore = chores.find(todo => todo.id == req.params.id)
	if (chore) {
		res.status(200).json(chore);
	} else {
		Object.assign(chore, req.body);
		res.status(404).json({ message: " No chore with that id is present" })
	}
});


server.delete('/chores/:id', (req, res) => {
	chores = chores.filter((chore) => chore.id !== Number(req.params.id));
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('running on that 8000 though'));
