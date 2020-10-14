const server = require("express").Router();
const { Client,Service } = require("../db.js");


server.get('/', (req, res, next) => {
	Service.findAll()
		.then((services) => {
			if (services.length === 0)return res.status(404).json({ message: 'No hay Servicios' });

			return res.status(200).json({ 
                message:'Estos son los servicios que existen',
                services
            });
		})
		.catch(next);
});

server.get("/:id", (req, res, next) => {
	var { id } = req.params;

	Service.findAll({ 
        where: { clientId:id },
        include:[{model:Client,as:'client'}]
    })
		.then((services) => {

			if (!services) return res.status(404).json({ message: 'El cliente no tiene servicios' });

			return res.status(200).json({ services });
		})
		.catch(next);
});

server.post('/', (req, res, next) => {
	const { device, model,imei, description, replacement,total,clientId } = req.body;

	if (!device || !model || !imei || !description||!replacement || !total ||!clientId)
		return res.status(400).json({ message: 'A parameter is missing' });

	Service.create({
		device,
		model,
		imei,
		description,
        replacement,
        total,
        clientId
	})
		.then(service => {
			return res.status(200).json(service)
		})
		.catch(next)
});

server.put('/:id', (req, res, next) => {
	let { id } = req.params;
	let update = req.body;

	Service.findOne({ where: { id } })
		.then(service => {
			if (!service) return res.status(404).json({ message: 'Service doesnt exist' });
			
			service.update(update)
				.then(serviceUpdate => {
					
					return res.status(200).json({
						new:serviceUpdate
					})
				})
		})
		.catch(next)
});

server.delete('/:id', (req, res, next) => {
	let { id } = req.params;

	Service.findOne({ where: { id } })
		.then(service => {

			if (!service) return res.status(404).json({ message: 'Client doesnt exist' })

			service.destroy(service)
				.then(() => {
					return res.status(200).json({ message: 'Service deleted' })
				})

		}).catch(next)
});

module.exports = server;
