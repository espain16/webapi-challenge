const express = require('express');

const server = express();
server.use(express.json());

let data = [
	{
		id: 0,
		name: 'Mike Fierce',
		chores: [
			{
				id: 1,
				description: 'wash the dishes and vaccum the floor',
				notes: 'make sure you wash the dishes thoroughly and vaccum every room',
				assignedTo: 1,
				completed: true
			},
			{
				id: 2,
				description: 'power wash the house',
				notes: 'dont spray anyone or anything other then the house and avoid the windows',
				assignedTo: 1,
				completed: false
			}
		]
	}
];
server.listen(8000, () => console.log('API is running on port 8000'));
