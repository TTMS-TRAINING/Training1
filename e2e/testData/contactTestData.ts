import { ContactData } from "../models/contactData";

export class ContactTestData {
    public static FullCorrectData: ContactData = new ContactData('Kamila', 'Socha-Hys', 'kamila@test.pl', '1234', 'Test message', true);
    public static WrongEmail: ContactData = new ContactData('Kamila', 'Socha-Hys', 'kamila', '1234', 'Test message', true);
    public static EmptyFields: ContactData = new ContactData('', '', '', '', '', false);
    public static WrongPhone: ContactData = new ContactData('Kamila', 'Socha-Hys', 'kama@test.com', 'abcd', 'Test message', true);

}