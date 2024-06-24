const { check, validationResult } = require('express-validator');

const validateProject = [
    check('name').not().isEmpty().withMessage("Project's name is empty"),
    check('link').not().isEmpty().withMessage("Project's link is empty"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateProject };
