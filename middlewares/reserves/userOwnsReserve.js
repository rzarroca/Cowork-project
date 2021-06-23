const { getRegistrations } = require('../../helpers/dbHelpers');

const userOwnsReserve = async (req, res, next) => {
	try {
		const { id } = req.query;
		const { idUser: id_usuario } = req.userAuth;

		const searchObject = {
			id,
			id_usuario,
		};

		const result = await getRegistrations('reservas', searchObject);

		if (result.length === 0) {
			const error = new Error(
				'Usuario no autorizado para solicitar reserva.'
			);
			error.httpStatus = 401;
			throw error;
		}

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = userOwnsReserve;
