// Definición del modelo de Comments con validación

module.exports = fuction(sequelize, DataTypes) {
	return sequelize.define(
		'Comment', 
		{
			texto: {
				type: DataType.STRONG,
				validate: {
					notEmpty: {
						msg : "-> Introduce tu comentario"
					}
				}
			}
		}
	);
}