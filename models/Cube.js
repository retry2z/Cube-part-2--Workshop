const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10,


    },
    accessory: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Accessories',
    }],
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
});

module.exports = mongoose.model('Cubes', cubeSchema);
