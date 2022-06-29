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
exports.UserMenu = void 0;
const admin_person_menu_1 = require("./../admin-menu/admin-person-menu");
const find_Idol_menu_1 = require("./../sub-menu-admin/find-Idol-menu");
const sort_Idol_admin_1 = require("./../sub-menu-admin/sort-Idol-admin");
const show_Idol_menu_1 = require("./../sub-menu-admin/show-Idol-menu");
const rl = __importStar(require("readline-sync"));
let idolManagement = new show_Idol_menu_1.ShowIdolInformation();
let sortIdol = new sort_Idol_admin_1.SortIdol();
let findIdol = new find_Idol_menu_1.FindIdol();
let joinMyCompany = new admin_person_menu_1.AdminMenu();
class UserMenu {
    runForUser() {
        let choice = -1;
        do {
            console.log('--- Menu fo User ---');
            console.log('1. Show Idol information');
            console.log('2. Find idol information');
            console.log('3. Sort idol information');
            console.log('4. Rent Idol of my company');
            console.log('5. Join in my company');
            console.log('0. Exit');
            choice = +rl.question('What do your choose?');
            switch (choice) {
                case 1: {
                    idolManagement.run();
                    break;
                }
                case 2: {
                    findIdol.runFind();
                    break;
                }
                case 3: {
                    sortIdol.runSort();
                    break;
                }
                case 4: {
                }
                case 5: {
                    joinMyCompany.addAnIDols();
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.UserMenu = UserMenu;
