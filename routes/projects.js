const router = require('express').Router();
const {
    getHomePage,
    getProject,
    updateProject,
    deleteProject,
    createProject,
    getAllProjects,
} = require('../controllers/projects');

router.get('/', getHomePage);
router.route('/project').get(getAllProjects).post(createProject);

router
    .route('/project/:id')
    .get(getProject)
    .patch(updateProject)
    .delete(deleteProject);

module.exports = router;
