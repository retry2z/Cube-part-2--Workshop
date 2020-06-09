const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: Number },
});

module.exports = mongoose.model('Accessories', accessoriesSchema);
