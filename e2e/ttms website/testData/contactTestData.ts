import { ContactData } from "../models/contactData";

export class ContactTestData {
    public static CorrectAllData: ContactData = new ContactData('Lucas','Vasquez','0700','lv17@rm.com','Test\nmessage', true);
    public static CorrectRequiredData: ContactData = new ContactData('Lucas','Vasquez','','lv17@rm.com','', true);
    public static NoConsent: ContactData = new ContactData('Lucas','Vasquez','0700','lv17@rm.com','Test\nmessage', false);
    public static IncorrectPhone: ContactData = new ContactData('Lucas','Vasquez','abcd','lv17@rm.com','Test\nmessage', true);
    public static IncorrectEmail: ContactData = new ContactData('Lucas','Vasquez','0700','lv17rm.com','Test\nmessage', true);
}