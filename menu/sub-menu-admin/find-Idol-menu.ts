import { Idol } from './../../Management/admin-managenment/Idols-Management';
import * as rl from 'readline-sync';
let findIdol = new Idol();


export class FindIdol {
    runFind() {
        let choice = -1;
        do {
            console.log('1. Find Idols information by country');
            console.log('2. Find Idols information by age');
            console.log('0. Exit');
            choice = +rl.question('What do you choose?');
            switch (choice) {
                case 1: {
                    console.log('--- Idols information by country ---');
                    let country = rl.question('\n Enter the country code you want to find.\n')
                    findIdol.findbyCountry(country)
                    break;
                }
                case 2: {
                    console.log(' --- Find Idols information by age ---');
                    let age = +rl.question('\nEnter the age you want to find.\n')
                    findIdol.findByAge(age);
                    break;   
                }
            }
        } while (choice != 0);
    }
}