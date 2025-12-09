const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class SiteController {
    async index(req, res, next) {
        // Course.find({})
        //     .then(courses => res.render('home', { courses: mutipleMongooseToObject(courses) }))
        //     .catch(next);
        // //  res.render('home');

        Course.find({})
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
