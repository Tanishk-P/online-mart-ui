import { IInputError } from "../models/IInputError";

export function validateEmail(email: string): boolean {
    const emailValidator = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'gmi');
    return emailValidator.test(email);
}

export function getErrorText(key: string, error: IInputError[]): string | undefined {
    const err: IInputError[] = Object.assign([], error);
    const index = err.findIndex((errorItem: IInputError) => {
        if (errorItem.name === key) {
            return 1
        } else {
            return 0
        }
    })
    return err?.[index]?.errorText || undefined;
}

export function validateContact(contact: number | undefined): boolean {
    const contactString = String(contact)
    const contactValidator = new RegExp(/^\+?[0-9]{1,3}[-\s\.]?([0-9]{3,4}[-\s\.]?){2}[0-9]{3,4}$/g);
    return contactValidator.test(contactString);
}