var path = require('path');

// Separamos en variables independientes los elementos de la variable de entorno DATABASE_URL
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name 	= (url[6]|| null);
var user 		= (url[2]|| null);
var pwd			= (url[3]|| null);
var protocol 	= (url[1]|| null);
var dialect 	= (url[1]|| null);
var port 		= (url[5]|| null);
var host 		= (url[4]|| null);
var storage	= process.env.DATABASE_STORAGE;

// Cargamos modelo ORM
var Sequelize 	= require('sequelize');
//Creamos y conectamos con la DB SQLite
var sequelize = new Sequelize(DB_name, user, pwd,
			{	dialect: 	dialect,
				protocol: 	protocol,
				port: 		port, 
				host: 		host,
			 	storage: 	storage,
			 	omitNull: 	true
			 }
		);

// Importamos la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
// Exportamos la definición de la tabla Quiz

// sequelize.sync() crea e inicializa  la tabla de preguntas en la DB
sequelize.sync().then(function() {
	//esta parte se ejecuta en caso de exito al crear la tabla
	Quiz.count().then(function(count){
		// contamos los elementos de la tabla y si está vacia (count === 0) la iniciamos
		if (count === 0) {
			Quiz.create({
				pregunta: 'Capital de Italia',
				respuesta: "Roma", 
			}).then(function(){console.log('Base de Datos inicializada')});
		}
	});
	exports.Quiz = Quiz;
});