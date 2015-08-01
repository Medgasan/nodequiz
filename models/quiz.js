// Definición del modelo Quiz

module.exports = function (secuelize, DataTypes) {
	return secuelize.define('Quiz', 
	{	pregunta: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> falta pregunta"}}
		},
		respuesta: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> falta respuesta"}}
		},
		tema: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> falta tema"}}
		},

	});
}