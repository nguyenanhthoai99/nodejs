const newRouter = require('./news');
const coursesRouter = require('./courses');
const homeRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/', homeRouter);
}

module.exports = route;
