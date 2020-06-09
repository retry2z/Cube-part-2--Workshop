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
        // return db.delete(id);
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
        // return db.get(id);
    },

    async  edit(id, data) {
        // return db.put(id, data);
    },
}

module.exports = cube;