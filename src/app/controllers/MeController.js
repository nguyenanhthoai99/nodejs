const Course = require('../models/Course');

class MeController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}).lean(), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', { deletedCount, courses }),
            )
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findDeleted({})
            .lean()
            .then((courses) => res.render('me/trash-courses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
