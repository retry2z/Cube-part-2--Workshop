class Repository {
    constructor(collection) {
        this.collection = collection;
    }

    async add(data) {
        try {
            const product = new this.collection(data);
            return await product.save();
        }
        catch (err) {
            console.error(err);
        }
    }

    async remove(id) {
        try {
            return await this.collection.deleteOne({ _id: id });
        }
        catch (err) {
            console.error(err);
        }
    }

    async list() {
        try {
            return await this.collection.find().lean();
        }
        catch (err) {
            console.error(err);
        }
    }

    async details(id, relationship) {
        try {
            return await this.collection.findById(id).populate(relationship).lean();
        }
        catch (err) {
            console.error(err);
        }
    }

    async edit(id, data) {
        try {
            return await this.collection.updateOne({ _id: id }, data);
        }
        catch (err) {
            console.error(err);
        }
    }

    async update(id, relationship, data) {
        try {
            return await this.collection.updateOne({ _id: id }, { $addToSet: { [relationship]: data } });
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = Repository;