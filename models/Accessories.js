const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    cubes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'cubes',
    }],
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
});

module.exports = mongoose.model('accessories', accessoriesSchema);
