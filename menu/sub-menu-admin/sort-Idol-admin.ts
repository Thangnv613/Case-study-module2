import { Idol } from './../../Management/admin-managenment/Idols-Management';
import * as rl from 'readline-sync';

let sortIdol = new Idol()
enum menuSort {
    SORT_IDOL_BY_AGE_UP = 1,
    SORT_IDOL_BY_AGE_DOWN = 2,
    SORT_IDOL_BY_HIRE_UP = 3,
    SORT_IDOL_BY_HIRE_DOWN = 4,
}

export class SortIdol {
    runSort() {
        let choice = -1;
        do {
            console.log('1. Sort Idols information by age up.');
            console.log('2. Sort Idols information by age down.');
            console.log('3. Sort Idols information by rent up.');
            console.log('4. Sort Idols information by rent down.');
            console.log('0. Exit');
            choice = +rl.question('What do your choose?')
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
function sortByAgeDown() {
    console.log('\n---Sort Idols information by age down---]\n');
    let sortByAgeUp = sortIdol.sortByAgeDown();
    console.table(sortByAgeUp+'\n');
}

function sortByAgeUp() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByAgeDown = sortIdol.sortByAgeUp();
    console.table(sortByAgeDown+'\n');
}
function sortbyHireUp() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByHireUp = sortIdol.sortbyHireUp();
    console.table(sortByHireUp+'\n');
}
function sortbyHireDown() {
    console.log('\n---Sort Idols information by age up---]\n');
    let sortByHireDown = sortIdol.sortbyHireDown();
    console.table(sortByHireDown+'\n');
}