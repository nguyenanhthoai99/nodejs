const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => res.render('courses/show', { course }))
            .catch(next);
    }
}

module.exports = new CourseController();
