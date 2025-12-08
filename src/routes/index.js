const newRouter = require('./news');
const homeRouter = require('./site')

function route(app) { 
   app.use('/news', newRouter);
   app.use('/',homeRouter)
}

module.exports = route;