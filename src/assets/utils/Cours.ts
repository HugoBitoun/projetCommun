import {Messages} from "./Messages";

export class Cours {
    id: String;
    name: String;
    description: String
    messages: Messages[];
    isSubscriber?: boolean;
    image?: String;
}