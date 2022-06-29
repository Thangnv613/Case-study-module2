import { FindIdol } from '../sub-menu-admin/find-Idol-menu';
import { SortIdol } from '../sub-menu-admin/sort-Idol-admin';
import { Person } from '../../model/person';
import { Idol } from '../../Management/admin-managenment/Idols-Management';
import { ShowIdolInformation } from '../sub-menu-admin/show-Idol-menu';
import * as rl from 'readline-sync';


let addIdolInfomation = new Idol();
let updateIdolInformation = new Idol();
let dismissIdol = new Idol();

enum menu {
    SHOW_IDOL = 1,
    ADD_IDOL = 2,
    UPDATE_IDOL = 3,
    DISMISS_IDOL = 4,
    FIND_IDOL = 5,
    SORT_IDOL = 6
}

export class AdminMenu {
    private showIdolInformation = new ShowIdolInformation();
    private sortIdol = new SortIdol();
    private findIdol = new FindIdol();

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
                    updateIolInformation()
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
        let person = new Person(id, name, age, country, height, weight, hire_by_hour);
        addIdolInfomation.createNew(person);
    }
}
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
    let indexValue = +rl.question('Enter the ID you want to edit.')
    let index = updateIdolInformation.findById(indexValue);
    if (index == -1) {
        console.log('\nNhap lai di ong chau.\n');
    }
    else {
        let idol = updateIdolInformation.getAll()[index]
        console.log(idol);
        let name = rl.question('Enter your name: ');
        let age = +rl.question('Enter your age: ');
        let country = rl.question('Enter your country: ');
        let height = rl.question('Enter your height: ');
        let weight = rl.question('Enter your weight: ');
        let hire_by_hour = +rl.question('Enter your measurements: ');
        let person = new Person(indexValue, name, age, country, height, weight, hire_by_hour);
        updateIdolInformation.updateById(indexValue, person);
    }
}

