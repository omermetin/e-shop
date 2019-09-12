const routeLogin = require('./loginRoutes')
  ;
const routeIndex = require('./indexRoutes')
  ;



module.exports = function(app){
    app.use('/login', routeLogin);
    app.use('/', routeIndex);
}