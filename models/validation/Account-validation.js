module.exports = class Account {
    constructor(data) {
        this.init(data);
    }

    init(data) {
        for (const key in data) {
            this['_' + key] = data[key];
        }
    }

    set _password(data) {
        const pattern = /\w{6,}/g;
        if (pattern.test(data)) {
            this.password = data;
        } else {
            throw new TypeError('Password must have 6 symbols at least');
        }
    }

    set _email(data) {
        const patternLength = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
        if (!patternLength.test(data)) {
            throw new TypeError('Invalid email address');
        }
        this.email = data;
    }

    set _displayName(data) {
        if (!!data) {
            const patternLength = /^.{5,20}$/g;
            if (!patternLength.test(data)) {
                throw new TypeError('Name must be between 5 and 20 characters long');
            }

            const pattern = /^[a-zA-Z]+$/g;
            if (pattern.test(data)) {
                this.name = data;
            } else {
                throw new TypeError('Name must contain only Latin characters');
            }
        }

        this.name = '';
    }

    set _imageUrl(data) {
        if (!!data) {
            const pattern = /^(http|https):/g;
            if (pattern.test(data)) {
                this.imageUrl = data;
            } else {
                throw new TypeError('Invalid url');
            }

        }

        this.imageUrl = '';
    }
}
