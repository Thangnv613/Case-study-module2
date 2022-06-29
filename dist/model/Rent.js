"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentIdols = void 0;
class RentIdols {
    constructor() {
        this._id = 0;
        this._person = [];
    }
    get id() {
        return this._id;
    }
    get person() {
        return this._person;
    }
    set id(value) {
        this._id = value;
    }
    set person(value) {
        this._person = value;
    }
}
exports.RentIdols = RentIdols;
1;
