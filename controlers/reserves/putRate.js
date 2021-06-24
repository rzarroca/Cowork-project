const { updateRegistration } = require('../../helpers/dbHelpers');
const { validation } = require('../../helpers/schemaHelpers');
const { putRateSchema } = require('../../schemas/reserveSchema');
const { compareAsc } = require('date-fns');

const putRate = async (req, res, next) => {
	try {
		const { id } = req.query;
		const rate = req.body;
		const { fecha_fin, puntuacion_usuario } = req.infoReserve;

		if (puntuacion_usuario) {
			const error = new Error(
				'El usuario ya ha puntuado la reserva anteriormente'
			);
			error.httpStatus = 403;
			throw error;
		}

		if (!rate) {
			const error = new Error('Falta puntuacion');
			error.httpStatus = 400;
			throw error;
		}

		await validation(putRateSchema, rate);

		const now = new Date();
		if (compareAsc(fecha_fin, now) === 1) {
			const error = new Error(
				'Puedes puntuar una vez finalice la reserva'
			);
			error.httpStatus = 403;
			throw error;
		}

		await updateRegistration('reservas', id, rate);

		console.log('Reserva puntuada, id reserva:', id);
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = putRate;
