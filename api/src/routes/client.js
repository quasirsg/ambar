const server = require("express").Router();
const { Client,Service } = require("../db.js");


server.get('/', (req, res, next) => {
	Client.findAll()
		.then((clients) => {
			if (clients === null)return res.status(404).json({ message: 'No hay Clientes' });

			return res.status(200).json({ 
                message:'Estos son los clientes que existen',
                clients
            });
		})
		.catch(next);
});

server.get("/:id", (req, res, next) => {
	var { id } = req.params;

	Client.findOne({ where: { id } })
		.then((client) => {

			if (!client) return res.status(404).json({ message: 'El cliente no existe' });

			return res.status(200).json({ client });
		})
		.catch(next);
});

server.post('/', (req, res, next) => {
	const { name, surname, adress, dni, phone_number } = req.body;

	if (!name || !surname || !adress || !dni||!phone_number)
		return res.status(400).json({ message: 'A parameter is missing' });

	Client.create({
		name,
		surname,
		adress,
		dni,
		phone_number
	})
		.then(client => {
			return res.status(200).json(client)
		})
		.catch(next)
});

server.put('/:id', (req, res, next) => {
	let { id } = req.params;
	let update = req.body;

	Client.findOne({ where: { id } })
		.then(client => {
			if (!client) return res.status(404).json({ message: 'Client doesnt exist' });
			
			client.update(update)
				.then(clientUpdate => {
					
					return res.status(200).json({
						new:clientUpdate
					})
				})
		})
		.catch(next)
});

server.delete('/:id', (req, res, next) => {
	let { id } = req.params;

	Client.findOne({ where: { id } })
		.then(client => {

			if (!client) return res.status(404).json({ message: 'Cleinte doesnt exist' })

			client.destroy(client)
				.then(() => {
					return res.status(200).json({ message: 'Cliente deleted' })
				})

		}).catch(next)
});

module.exports = server;
