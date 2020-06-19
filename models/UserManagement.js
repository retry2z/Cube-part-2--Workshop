const user = require('./User');

class UserManagement {
    constructor(data) {
        this.uid = data._id;
        this.name = data.name || '';
        this.imageUrl = data.imageUrl || '';
        this.email = data.email;
        this.collection = user;
    }

    async add(data) {
        try {
            return await new this.collection(data).save()
        }
        catch (err) {
            console.error(err);
        }
    }

    async remove() {
        try {
            return await this.collection.deleteOne({ _id: this.uid });
        }
        catch (err) {
            console.error(err);
        }
    }


    async details() {
        try {
            return await this.collection.findById(this.uid).lean();
        }
        catch (err) {
            console.error(err);
        }
    }

    async edit(data) {
        try {
            return await this.collection.updateOne({ _id: this.uid }, data);
        }
        catch (err) {
            console.error(err);
        }
    }

    async update(relationship, data) {
        try {
            return await this.collection.updateOne({ _id: this.uid }, { $addToSet: { [relationship]: data } });
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = UserManagement;