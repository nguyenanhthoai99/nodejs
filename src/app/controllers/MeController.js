const Course = require('../models/Course');

class MeController {
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        if (res.locals._sort.enabled) {
            courseQuery = courseQuery.sort({
                [res.locals._sort.column]: res.locals._sort.type,
            });
        }

        Promise.all([courseQuery.lean(), Course.countDocumentsDeleted()])
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
