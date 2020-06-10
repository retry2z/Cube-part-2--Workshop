const Accessories = require('../models/Accessories');

const accessory = {
    async  add(input) {
        try {
            const data = new Accessories(input);
            return await data.save();
        }
        catch (err) {
            console.error(err);
        }
    },

    async remove(id) {
        try {
            return await Accessories.deleteOne({ _id: id });
        }
        catch (err) {
            console.error(err);
        }
    },

    async list() {
        try {
            return await Accessories.find().lean();
        }
        catch (err) {
            console.error(err);
        }
    },

    async  details(id) {
        try {
            return await Accessories.findById(id).populate('accessory').lean();
        }
        catch (err) {
            console.error(err);
        }
    },

    async edit(id, data) {
        try {
            return await Accessories.updateOne({ _id: id }, { $addToSet: { accessory: data } });
        }
        catch (err) {
            console.error(err);
        }
    },
}

module.exports = accessory;