import { Person } from '../../model/person';
import { IManagement } from '../I-Management';

export class Idol implements IManagement<Person>{

    private static _idol: Person[] = [
        new Person(1, 'Cho Yeo-jeong', 22, 'Korean', '163 cm', '49 kg', 500.000 ),
        new Person(2, 'Yua Mikami', 30, 'Japanese', '159 cm', '52 kg', 100.000),
        new Person(3, 'Ánh Bảo', 19, 'Việt Nam', '158 cm', '50 kg', 400.000 ),
    ];
    public static id = 3;
    getAll(): Person[] {

        return Idol._idol;
    }
    createNew(t: Person): void {
        Idol.id++;
        t.id = Idol.id;
        Idol._idol.push(t);
    }
    updateById(id: number, newPerson: Person): void {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol[index] = newPerson;
        }

    }
    removeById(id: number): void {
        let index = this.findById(id);
        if (index != -1) {
            Idol._idol.splice(index, 1);
        }
    }
    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < Idol._idol.length; i++) {
            if (id == Idol._idol[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }




    findByPerson(id: number): any {
        let index = -1;
        for (let i = 0; i < Idol._idol.length; i++) {
            if (id == Idol._idol[i].id) {
                index = i;
                break;
            }
        }
        return Idol._idol[index];
    }




    findByAge(age: number): any {
        let personByAge = [];
        for (let i = 0; i < Idol._idol.length; i++) {
            if (age == Idol._idol[i].age) {
                personByAge.push(Idol._idol[i])
            }
        }
        console.table(personByAge);
    }
    findbyCountry(country: string): any {
        let personBycountry = [];
        for (let i = 0; i < Idol._idol.length; i++) {
            if (country.toLocaleUpperCase() == Idol._idol[i].country.toLocaleUpperCase()) {
                personBycountry.push(Idol._idol[i])
            }
        }
        console.table(personBycountry);
    }
    sortByAgeUp(): void {
        let sortByAgeUp = Idol._idol.sort((a, b) => a.age - b.age);
        console.table(sortByAgeUp);
    }
    sortByAgeDown(): void {
        let sortByAgeDown = Idol._idol.sort((a, b) => -a.age + b.age);
        console.table(sortByAgeDown);
    }
    sortbyHireUp(): void {
    let sortbyHireUp = Idol._idol.sort((a, b) => a.hire_by_hour - b.hire_by_hour);
        console.table(sortbyHireUp);
    } 
    sortbyHireDown(): void {
        let sortbyHireDown = Idol._idol.sort((a, b) => -a.hire_by_hour + b.hire_by_hour);
            console.table(sortbyHireDown);
        } 

    }
        
    

