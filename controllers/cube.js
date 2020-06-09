const Cube = require('../models/Cube');

const cube = {
    add() {
        const data = Cube(data);
        return db.post(data);
    },

    remove(id) {
        return db.delete(id);
    },

    list() {
        return db.get();
    },

    details(id) {
        return db.get(id);
    },

    edit(id, data) {
        return db.put(id, data);
    },
}

module.exports = cube;