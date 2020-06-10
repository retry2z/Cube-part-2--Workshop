const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
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
        ref: 'Cubes',
    }],
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
});

module.exports = mongoose.model('Accessories', accessoriesSchema);
