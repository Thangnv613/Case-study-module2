import { RentManagement } from './../../Management/rentIdols/Rent-management';
import * as rl from 'readline-sync';
export class RentedIdol {
    private rentManagement = new RentManagement();
    run() {
        let choice = -1;

        do {
            console.log('1. Show Idol information rented');
            console.log('2. Delete Idol information rented');
            console.log('0. Exit');
            choice = +rl.question('What do your choose?')
            switch (choice) {
                case 1: {
                    console.log('--- Show Idol information rented ---');
                    let show = this.rentManagement.getAll()
                    console.table(show);
                    break;
                }
                case 2: {
                    console.log('--- Delete Idol information rented --- ');
                    let id = +rl.question('Are you sure you want to delete this Idol? (Please enter ID you want to delete: ');
                    this.rentManagement.removeById(id);
                    break;
                }
            }
        } while (choice != 0);
    }
}