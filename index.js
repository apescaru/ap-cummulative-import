export default class Accumulator {
    constructor() {
        this.data = {};
    }

    getData() {
        return this.data;
    }

    setData(category, data, spread = false) {
        this.checkIfCategoryIsString(category);
        if(spread === true && !(Array.isArray(data) || typeof data === "object" || typeof data === "string")) throw new TypeError("If spread is set to true, data must be an array, object or string");

        if(!this.data[category]) {
            this.data[category] = [];
        }

        if(spread === false) {
            this.data[category].push(data);
        } else {
            this.data[category] = [...this.data[category], ...data];
        }
    }

    findDataByCategory(category, cb) {
        this.checkIfCategoryIsString(category);
        return this.data[category].find(cb);
    }

    findAllDataGlobally(cb) {
        let res = [];

        for(const category of Object.keys(this.data)) {
            this.data[category].find((item) => {
                if(cb(item)) {
                    res.push(item);
                }
            })
        }

        return res;
    }

    findOneDataGlobally(cb) {
        for(const category of Object.keys(this.data)) {
            const found = this.findDataByCategory(category, cb);
            if(!found) {
                continue;
            } else {
                return found;
            }
        }
    }

    checkIfCategoryIsString(category) {
        if(typeof category === "string") return true;
        else throw new TypeError("Category must be a string");
    }
}