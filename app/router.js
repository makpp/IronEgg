'use strict'

module.exports = app =>{
    const { router, controller } = app;
    app.router.get('/home', controller.home.index);
    require('./router/robotWeb')(app);
};