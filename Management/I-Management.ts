export interface IManagement<T>{
    getAll(): T[];
    createNew(t:T): void;
    updateById(id: number,t:T): void;
    findById(id: number): number;
    findByAge(age: number): number;
    findbyCountry(country: string): string;
    removeById(id : number): void;

    sortByAgeDown(): void;
    sortByAgeUp():void;
    sortbyHireUp(): void;
    sortbyHireDown(): void;

} 