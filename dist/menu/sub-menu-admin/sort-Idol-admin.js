"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortIdol = void 0;
const Idols_Management_1 = require("./../../Management/admin-managenment/Idols-Management");
const rl = __importStar(require("readline-sync"));
let sortIdol = new Idols_Management_1.Idol();
var menuSort;
(function (menuSort) {
    menuSort[menuSort["SORT_IDOL_BY_AGE_UP"] = 1] = "SORT_IDOL_BY_AGE_UP";
    menuSort[menuSort["SORT_IDOL_BY_AGE_DOWN"] = 2] = "SORT_IDOL_BY_AGE_DOWN";
    menuSort[menuSort["SORT_IDOL_BY_HIRE_UP"] = 3] = "SORT_IDOL_BY_HIRE_UP";
    menuSort[menuSort["SORT_IDOL_BY_HIRE_DOWN"] = 4] = "SORT_IDOL_BY_HIRE_DOWN";
})(menuSort || (menuSort = {}));
class SortIdol {
    runSort() {
        let choice = -1;
        do {
            console.log('1. Sort Idols information by age up.');
            console.log('2. Sort Idols information by age down.');
            console.log('3. Sort Idols information by rent up.');
            console.log('4. Sort Idols information by rent down.');
            console.log('0. Exit');
            choice = +rl.question('What do your choose?');
            switch (choice) {
                case menuSort.SORT_IDOL_BY_AGE_UP: {
                    sortByAgeUp();
                    break;
                }
                case menuSort.SORT_IDOL_BY_AGE_DOWN: {
                    sortByAgeDown();
                    break;
                }
                case menuSort.SORT_IDOL_BY_HIRE_UP: {
                    sortbyHireUp();
                    break;
                }
                case menuSort.SORT_IDOL_BY_HIRE_DOWN: {
                    sortbyHireDown();
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.SortIdol = SortIdol;
function sortByAgeDown() {
    console.log('\n---Sort Idols information by age down---]\n');
    let sortByAgeUp = sortIdol.sortByAgeDown();
    console.table(sortByAgeUp + '\n');
}
function sortByAgeUp() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByAgeDown = sortIdol.sortByAgeUp();
    console.table(sortByAgeDown + '\n');
}
function sortbyHireUp() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByHireUp = sortIdol.sortbyHireUp();
    console.table(sortByHireUp + '\n');
}
function sortbyHireDown() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByHireDown = sortIdol.sortbyHireDown();
    console.table(sortByHireDown + '\n');
}
