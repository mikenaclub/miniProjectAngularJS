module.exports = function(app){
	var index = require('../controllers/index.server.controller');
	app.all('/',index.render);
};