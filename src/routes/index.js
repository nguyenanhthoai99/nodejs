const newRouter = require('./news');
const coursesRouter = require('./courses');
const homeRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', homeRouter);
}

module.exports = route;
