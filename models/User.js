const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        type: String,
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

module.exports = mongoose.model('Users', userSchema);
