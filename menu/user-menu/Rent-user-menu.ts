import { RentIdols } from './../../model/Rent';
import { Idol } from './../../Management/admin-managenment/Idols-Management';
import { RentedIdol } from './Rentted-menu';
import { RentManagement } from './../../Management/rentIdols/Rent-management';
import * as rl from 'readline-sync';


import { FindIdol } from '../sub-menu-admin/find-Idol-menu';
import { SortIdol } from '../sub-menu-admin/sort-Idol-admin';
import { ShowIdolInformation } from '../sub-menu-admin/show-Idol-menu';


let idolManagement = new ShowIdolInformation();
let sortIdol = new SortIdol();
let findIdol = new FindIdol();

export class Rent {
    private rentedIdol = new RentedIdol();
    private rentManagement = new RentManagement();
    private idol = new Idol();
    run(UserId: number) {
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

                    let id = +rl.question('Enter ID you want to rent: ');

                    let idol = this.idol.findByPerson(id);
                    let cart = new RentIdols(UserId, idol)
                    this.rentManagement.createNew(cart)
                    console.table(cart);
                    

                    this.rentedIdol.run();

                }
            }
        } while (choice != 0);


    }
}