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
