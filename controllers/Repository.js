const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');


class Repository {
    filePath = path.normalize(path.join(__dirname, '../data/database.json'));

    constructor() {
    }

    post(input) {
        fs.readFile(this.filePath, (err, data) => {
            if (err) {
                console.error(err);
                return
            }

            const parsedData = JSON.parse(data);
            parsedData.push(
                {
                    id: v4(),
                    ...input
                }
            );

            fs.writeFileSync(this.filePath, JSON.stringify(parsedData));
        });
    }

    get(id) {
        const data = JSON.parse(fs.readFileSync(this.filePath));


        if (id) {
            return data.find(x => x.id === id);
        }

        return data;
    }

    delete(id) {

    }

    put(id,data) {

    }
}

module.exports = Repository;