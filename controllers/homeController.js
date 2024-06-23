const projects = require('../models/projectModel');

exports.getHomePage = (req, res) => {
    res.render('index', {
        title: 'NodeMaster',
        projects: projects,
    });
};
