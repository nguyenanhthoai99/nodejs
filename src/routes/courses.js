const express = require('express');
const router = express.Router();

const CourseControllers = require('../app/controllers/CoursesController');

router.get('/create', CourseControllers.create);
router.post('/store', CourseControllers.store);
router.get('/:slug', CourseControllers.show);

module.exports = router;
