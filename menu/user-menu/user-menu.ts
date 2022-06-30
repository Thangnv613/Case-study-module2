import { User } from './../../model/User';
import { AdminMenu } from './../admin-menu/admin-person-menu';
import { Rent } from './Rent-user-menu';
import * as rl from 'readline-sync';

let rent = new Rent
let addAnIDols = new AdminMenu()
export class UserMenu {
    runForUser(user: User) {
        let choice = -1;
        do {

            console.log('--- Menu for User ---');
            console.log('1. For Rent');
            console.log('2. For Register');
            console.log('0. Exit');

            choice = +rl.question('What do your choose?')
            switch (choice) {
                case 1: {
                    let id = user.id
                    rent.run(id);
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
