import { UserManagement } from './../../Management/user-management/user-management';
import { RentManagement } from './../../Management/rentIdols/Rent-management';
import * as rl from 'readline-sync';


import { FindIdol } from '../sub-menu-admin/find-Idol-menu';
import { SortIdol } from '../sub-menu-admin/sort-Idol-admin';
import { ShowIdolInformation } from '../sub-menu-admin/show-Idol-menu';


let idolManagement = new ShowIdolInformation();
let sortIdol = new SortIdol();
let findIdol = new FindIdol();
let rent =new RentManagement()
let idByUser = new UserManagement();

export class Rent {
    run() {
        let choice = -1;
        do {
            console.log('---Menu for Rent ---');
            console.log('1. Show Idol information');
            console.log('2. Find idol information');
            console.log('3. Sort idol information');
            console.log('4. Rent Idol by hour');
            
            console.log('0. Exit');
            choice = +rl.question('What do your choose?')
            switch (choice) {
                case 1: {
                    idolManagement.run()
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
                    let id = +rl.question('Enter your ID you want to rent');
                    console.table(rent.rentIdol(id))
                }
            }
        } while (choice != 0);


    }
}