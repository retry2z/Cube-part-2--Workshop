const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true,
    },
    accessories: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Accessories',
    }],
    cubes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Cubes',
    }],
});

module.exports = mongoose.model('Cubes', cubeSchema);
