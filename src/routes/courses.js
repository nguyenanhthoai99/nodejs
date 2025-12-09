const express = require('express');
const router = express.Router();

const CourseControllers = require('../app/controllers/CoursesController');

router.get('/:slug', CourseControllers.show);

module.exports = router;
