import { AdminMenu } from './../admin-menu/admin-person-menu';
import { Rent } from './Rent-user-menu';
import { ShowIdolInformation } from './../sub-menu-admin/show-Idol-menu';
import * as rl from 'readline-sync';

let rent = new Rent
let addAnIDols = new AdminMenu()
export class UserMenu {
    runForUser() {
        let choice = -1;
        do {

            console.log('--- Menu for User ---');
            console.log('1. For Rent');
            console.log('2. For Register');
            console.log('0. Exit');

            choice = +rl.question('What do your choose?')
            switch (choice) {
                case 1: {
                    rent.run();
                    break;
                }
                case 2: {
                    addAnIDols.addAnIDols()
                    break;
                }
            }

        } while (choice != 0);

    }
}