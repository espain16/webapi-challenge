const express = require('express');

const server = express();
server.use(express.json());

let people = [
	{
		id: 0,
		name: 'Maverick Jones'
	},

	{
		id: 1,
		name: 'Aaron Jones'
	},
	{
		id: 2,
		name: 'Tas Mcgowen'
	}
];

server.listen(8000, () => console.log('API is running on port 8000'));
