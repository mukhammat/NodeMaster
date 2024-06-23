const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more then 20 characters'],
    },
    project: {
        type: String,
        default: false,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('Projects', projectSchema);
