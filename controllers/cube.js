const Product = require('../models/Cube');

const cube = {
    async  add(input) {
        try {
            const data = new Product(input);
            return await data.save();
        }
        catch (err) {
            console.error(err);
        }
    },

    async remove(id) {
        try {
            return await Product.deleteOne({ _id: id });
        }
        catch (err) {
            console.error(err);
        }
    },

    async list() {
        try {
            return await Product.find().lean();
        }
        catch (err) {
            console.error(err);
        }
    },

    async  details(id) {
        try {
            return await Product.findById(id).lean();
        }
        catch (err) {
            console.error(err);
        }
    },

    async  edit(id, data) {
        try {
            return await Product.updateOne({ _id: id }, data);
        }
        catch (err) {
            console.error(err);
        }
    },
}

module.exports = cube;