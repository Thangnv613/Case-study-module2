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
exports.AdminMenu = void 0;
const find_Idol_menu_1 = require("../sub-menu-admin/find-Idol-menu");
const sort_Idol_admin_1 = require("../sub-menu-admin/sort-Idol-admin");
const person_1 = require("../../model/person");
const Idols_Management_1 = require("../../Management/admin-managenment/Idols-Management");
const show_Idol_menu_1 = require("../sub-menu-admin/show-Idol-menu");
const rl = __importStar(require("readline-sync"));
let addIdolInfomation = new Idols_Management_1.Idol();
let updateIdolInformation = new Idols_Management_1.Idol();
let dismissIdol = new Idols_Management_1.Idol();
var menu;
(function (menu) {
    menu[menu["SHOW_IDOL"] = 1] = "SHOW_IDOL";
    menu[menu["ADD_IDOL"] = 2] = "ADD_IDOL";
    menu[menu["UPDATE_IDOL"] = 3] = "UPDATE_IDOL";
    menu[menu["DISMISS_IDOL"] = 4] = "DISMISS_IDOL";
    menu[menu["FIND_IDOL"] = 5] = "FIND_IDOL";
    menu[menu["SORT_IDOL"] = 6] = "SORT_IDOL";
})(menu || (menu = {}));
class AdminMenu {
    constructor() {
        this.showIdolInformation = new show_Idol_menu_1.ShowIdolInformation();
        this.sortIdol = new sort_Idol_admin_1.SortIdol();
        this.findIdol = new find_Idol_menu_1.FindIdol();
    }
    runforIdol() {
        let choice = -1;
        do {
            menuForAdmin();
            choice = +rl.question('What do you choose?');
            switch (choice) {
                case menu.SHOW_IDOL: {
                    console.log('---Show information about Idols ---');
                    this.showIdolInformation.run();
                    break;
                }
                case menu.ADD_IDOL: {
                    this.addAnIDols();
                    break;
                }
                case menu.UPDATE_IDOL: {
                    console.log('--- Update information about idols ---');
                    updateIolInformation();
                    break;
                }
                case menu.DISMISS_IDOL: {
                    DismisAIdol();
                    break;
                }
                case menu.FIND_IDOL: {
                    console.log(' --- Find Idols information by age ---');
                    this.findIdol.runFind();
                    break;
                }
                case menu.SORT_IDOL: {
                    console.log('---Sort Idols information ---');
                    this.sortIdol.runSort();
                }
            }
        } while (choice != 0);
    }
    addAnIDols() {
        let name = rl.question('Enter your name: ');
        let id = 0;
        let age = +rl.question('Enter your age: ');
        let country = rl.question('Enter your country: ');
        let height = rl.question('Enter your height: ');
        let weight = rl.question('Enter your weight: ');
        let hire_by_hour = +rl.question('Enter your price you want: ');
        let person = new person_1.Person(id, name, age, country, height, weight, hire_by_hour);
        addIdolInfomation.createNew(person);
    }
}
exports.AdminMenu = AdminMenu;
function menuForAdmin() {
    console.log('---Idol Management---');
    console.log('1. Show information about Idols ');
    console.log('2. Add information about an idols ');
    console.log('3. Update information about idols');
    console.log('4. Dismiss information about an idol');
    console.log('5. Find information about Idols');
    console.log('6. Sort information about Idols');
    console.log('0. Exit');
}
function DismisAIdol() {
    console.log('--- Dismiss an Idol ---');
    let id = +rl.question('\nEnter the ID you want to edit.\n');
    if (id == -1) {
        console.log('Nhap lai di ong chau');
    }
    else {
        dismissIdol.removeById(id);
        console.log('\n--- Dismiss successfully ---\n');
    }
}
function updateIolInformation() {
    let indexValue = +rl.question('Enter the ID you want to edit.');
    let index = updateIdolInformation.findById(indexValue);
    if (index == -1) {
        console.log('\nNhap lai di ong chau.\n');
    }
    else {
        let idol = updateIdolInformation.getAll()[index];
        console.log(idol);
        let name = rl.question('Enter your name: ');
        let age = +rl.question('Enter your age: ');
        let country = rl.question('Enter your country: ');
        let height = rl.question('Enter your height: ');
        let weight = rl.question('Enter your weight: ');
        let hire_by_hour = +rl.question('Enter your measurements: ');
        let person = new person_1.Person(indexValue, name, age, country, height, weight, hire_by_hour);
        updateIdolInformation.updateById(indexValue, person);
    }
}
