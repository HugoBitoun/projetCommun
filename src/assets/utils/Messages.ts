import Timestamp = firebase.firestore.Timestamp;

export class Messages {
    message: string;
    date?: Timestamp;
    idUser: string;
}