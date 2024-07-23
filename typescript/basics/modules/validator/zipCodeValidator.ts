import { Validator } from "./validator";

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const zipCodeRegex = /^\d{5}([-]|\s*)?(\d{4})?$/;

        return zipCodeRegex.test(s);
    }
}

export{ ZipCodeValidator };