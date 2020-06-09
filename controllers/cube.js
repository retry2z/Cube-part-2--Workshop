const Cube = require('../models/Cube');
const Repository = require('./Repository');
const db = new Repository();


const cube = {
    add(input) {
        const { name, description, imageUrl, difficultyLevel } = input;
        const data = new Cube(name, description, imageUrl, difficultyLevel);
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