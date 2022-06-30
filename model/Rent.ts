import { Person } from './person';
export class RentIdols{
    private _id: number = 0 ;
    private _person: Person;


	constructor(id: number , person: Person) {
		this._id = id;
		this._person = person;
	}

    public get id(): number  {
		return this._id;
	}

    public get person(): Person {
		return this._person;
	}

    public set id(value: number ) {
		this._id = value;
	}

    public set person(value: Person) {
		this._person = value;
	}
	
  
}1