import { User } from './../../model/User';
import { ROLE } from './../../model/e-role';
import { IManagement } from './../I-Management';



export class UserManagement implements IManagement<User> {
    public static users: User[] = [
        new User('Thang', 'Vanminh12', '0352335336', 'Thang')
    ];
    public static id: number = 1;
    constructor() {
        let admin = new User('admin', 'admin', 'admin@gmail.com', 'admin');
        admin.role = ROLE.ADMIN;
        admin.id = UserManagement.id;
        UserManagement.users.push(admin);
    }
    getAll(): User[] {
        return UserManagement.users;
    }
    createNew(t: User): void {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = ROLE.USER;
        UserManagement.users.push(t)
    }
    updateById(id: number, t: User): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    removeById(id: number): void {
        let index = this.findById(id)
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }
    findByUsername(username: string): User | null {
        for (let user of UserManagement.users) {
            if (user.username == username) {
                return user;
            }
        }
        return null;
    }
    findById(id: number): number {
        let index = -1
        for (let i = 0; index < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    isLogin(username: string, password: string): User | null {
        for (const user of UserManagement.users) {
            if (username == user.username && password == user.Password) {
                return user;
            }
        } return null;
    }
    findByAge(age: number): number {
        return age;
    }
    findbyCountry(country: string): string {
        return country;
    }

    sortByAgeDown(): void {
    }
    sortByAgeUp(): void {
    }
    sortbyHireUp(): void { }
    sortbyHireDown(): void { }


   
}



