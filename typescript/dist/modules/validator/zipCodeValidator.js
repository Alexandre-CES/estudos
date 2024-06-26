"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isValid(s) {
        const zipCodeRegex = /^\d{5}([-]|\s*)?(\d{4})?$/;
        return zipCodeRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
