const { Router } = require('express');
const controller = require('./db-controller');
const router = Router();

router.get('/', controller.getProfs);
router.get('/', controller.getCourses);
router.post('/', controller.addProf);

module.exports = router;