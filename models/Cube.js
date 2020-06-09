

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this._name = name;
        this._description = description;
        this._imageUrl = imageUrl;
        this._difficulty = difficulty;
    }

    set _name(input) {
        this.name = input;
    }

    set _description(input) {
        this.description = input;
    }

    set _imageUrl(input) {
        this.imageUrl = input;
    }

    set _difficulty(input) {
        this.difficulty = input;
    }
}

module.exports = Cube;