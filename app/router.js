'use strict'

module.exports = app =>{
    const { router, controller } = app;
    app.router.get('/home', controller.home.index);
    // app.router.post('/complain', controller.complain.getCompalinByCitys);
    require('./router/robotWeb')(app);
    require('./router/robotComplain')(app);
};