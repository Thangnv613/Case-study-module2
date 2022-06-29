"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentManagement = void 0;
class RentManagement {
    getAll() {
        return RentManagement.rentIdol;
    }
    createNew(t) {
        RentManagement.id++;
        t.id = RentManagement.id;
        RentManagement.rentIdol.push(t);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < RentManagement.rentIdol.length; i++) {
            if (id == RentManagement.rentIdol[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    removeById(id) {
        let index = this.findById(id);
        RentManagement.rentIdol.splice(index, 1);
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            RentManagement.rentIdol[index] = t;
        }
    }
    ////////////////////////////////////////////////////////////////
    findByAge(age) {
        return 0;
    }
    findbyCountry(country) {
        return '';
    }
    sortByAgeDown() { }
    sortByAgeUp() {
    }
    sortbyHireUp() {
    }
    sortbyHireDown() {
    }
}
exports.RentManagement = RentManagement;
RentManagement.id = 0;
RentManagement.rentIdol = [];
