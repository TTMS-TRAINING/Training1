export class ContactData {
    name: string;
    surname: string;
    phone: string;
    email: string;    
    message: string;
    consent: boolean;

    constructor (
        name: string,
        surname: string,        
        phone: string,
        email: string,
        message: string,
        consent: boolean) {
            this.name = name;
            this.surname = surname;
            this.phone = phone;
            this.email = email;
            this.message = message;
            this.consent = consent;
        }
}