const { getRegistrations } = require('../../helpers/dbHelpers');

const getAdmin = async (req, res, next) => {
	try {
		const { id } = req.query;
		const { correo } = req.body;

		let objectSearch = { correo: `${correo}` };
		if (id) objectSearch = { id: `${id}` };

		const result = await getRegistrations('administradores', objectSearch);

		if (result.length === 0) {
			const error = new Error('El administrador no existe.');
			error.httpStatus = 404;
			throw error;
		}

		res.status(200);
		res.send({
			status: 'ok',
			adminData: result[0],
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAdmin;
