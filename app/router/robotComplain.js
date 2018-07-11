'use strict'

module.exports = app =>{
    app.router.post('/getComplainByCitys', app.controller.complain.getComplainByCitys);
	
	app.router.get('/getComplainByCitysGet', app.controller.complain.getComplainByCitysGet);
};