import {Messages} from "./Messages";

export class Cours {
    id: string;
    name: string;
    description: string
    messages: Messages[];
    isSubscriber?: boolean;
    image?: string;
}