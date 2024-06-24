const Project = require('../models/Project');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/custom-error');

// Получение всех проектов
const getAllProjects = asyncWrapper(async (req, res) => {
    const projects = await Project.find({});
    res.status(200).json({ projects });
});

const getProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params;
    const project = await Project.findOne({ _id: projectID });
    if (!project) {
        return next(createCustomError(`No project with id: ${projectID}`, 404));
    }
    res.status(200).json({ project });
});

// Создание нового проекта
const createProject = asyncWrapper(async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json({ project });
});

// Обновление проекта по ID
const updateProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params;
    const project = await Project.findOneAndUpdate(
        { _id: projectID },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!project) {
        return next(createCustomError(`No project with id: ${projectID}`, 404));
    }
    res.status(200).json({ project });
});

// Удаление проекта по ID
const deleteProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params;

    const project = await Project.findByIdAndDelete(projectID);

    if (!project) {
        return next(createCustomError(`No project with id: ${projectID}`, 404));
    }

    res.json({ message: 'Project deleted successfully' });
});

const getHomePage = (req, res) => {
    res.render('index', {
        title: 'NodeMaster',
        projects: Project,
    });
};

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getHomePage,
};
