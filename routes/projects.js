const router = require('express').Router();
const {
    getHomePage,
    getProject,
    updateProject,
    deleteProject,
    createProject,
    getAllProjects,
} = require('../controllers/projects');
const { validateProject } = require('../middleware/validate');

router.get('/', getHomePage);
router
    .route('/project')
    .get(getAllProjects)
    .post(validateProject, createProject);

router
    .route('/project/:id')
    .get(getProject)
    .patch(validateProject, updateProject)
    .delete(deleteProject);

module.exports = router;
