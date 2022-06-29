import { UserManagement } from './../user-management/user-management';
import { RentIdols } from './../../model/Rent';
import { IRentManagement } from './I-Rent-management';

export class RentManagement implements IRentManagement {
    private static id: number = 0;
    private static rentIdol: RentIdols[] = [];
    getAll(): RentIdols[] {
        return RentManagement.rentIdol;
    }
    createNew(t: RentIdols): void {
        RentManagement.id++;
        t.id = RentManagement.id;
        RentManagement.rentIdol.push(t);
    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < RentManagement.rentIdol.length; i++) {
            if (id == RentManagement.rentIdol[i].id) {
                index = i;
                break;
            }
        } return index;
    }
    removeById(id: number): void {
        let index = this.findById(id);
        RentManagement.rentIdol.splice(index, 1);
    }
    updateById(id: number, t: RentIdols): void {
        let index = this.findById(id);
        if (index != -1) {
            RentManagement.rentIdol[index] = t;
        }
    }
    rentIdol(id: number): any {
        
    }
    ////////////////////////////////////////////////////////////////
    findByAge(age: number): number {
        return 0;
    }
    findbyCountry(country: string): string {
        return '';
    }
    sortByAgeDown(): void { }
    sortByAgeUp(): void {
    }
    sortbyHireUp(): void {
    }
    sortbyHireDown(): void {
    }


}