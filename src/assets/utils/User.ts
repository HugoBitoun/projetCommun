import {Roles} from "./Roles";


export class User {

    email : string;    
    password? : string;    
    name? : string;
    lastName? : string;
    roles : Roles;
    uid? : string;
    associations? : string[];
    numberOfAssociations? : number;
    cours? : string[];


    constructor(values){
        this.email = values.email;            
        this.name = values.name;
        this.roles = {student : true};
    }
}