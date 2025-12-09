const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        Course.find({}, function (courses) {
            if (!err) res.json(courses);
            res.status(400).json({ error: 'Lỗi' });
        });
        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
