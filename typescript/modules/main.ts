import { EmailValidator, ZipCodeValidator } from "./validator";

let email = 'test@example.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O email ${email} é válido?: ${result}`);

let zipCode = '12345';
let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid(zipCode);

console.log(`O zipCode ${zipCode} é válido?: ${result2}`);