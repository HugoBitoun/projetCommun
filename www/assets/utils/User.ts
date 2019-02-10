import {Roles} from "./Roles";


export class User {

    email : string;    
    password? : string;    
    name? : string;
    famillyName? : string;
    firstName? : string;
    roles? : Roles;
    uid? : string;
    associations? : string[];

    constructor(values){
        this.email = values.email;            
        this.name = values.name;
        this.roles = {student : true};
    }
}