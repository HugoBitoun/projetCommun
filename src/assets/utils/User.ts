import {Roles} from "./Roles";


export class User {

    email : string;
    name? : string;
    roles : Roles;
    uid : string;
    associations? : string[];
    cours? : string[];

    constructor(values){

        this.email = values.email;
        this.name = values.name;
        this.roles = {student : true};
    }
}