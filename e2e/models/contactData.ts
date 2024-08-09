export class ContactData {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;

    constructor (name: string,
        surname: string,
        email: string,
        phone: string,
        message: string,
        consent: boolean) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.message = message;
        this.consent = consent;
    }
}