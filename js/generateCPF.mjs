import { ValidateCPF } from "./validateCPF.mjs";

class GenerateCPF extends ValidateCPF {
    constructor(digits) {
        super(digits);
    }

    validate() {
        return this.digits[0].repeat(this.digits.length) === this.digits;
    }

    static generateNineDigits() {
        let nineDigits = new String();

        do {
            nineDigits += String(Math.round(Math.random() * (9 - 0) + 0));
        } while (nineDigits.length < 9);

        return nineDigits;
    }
}

export function getGeneratedCPF() {
    const CPF_OBJECT = new GenerateCPF(GenerateCPF.generateNineDigits());

    if (CPF_OBJECT.validate()) getGeneratedCPF();

    CPF_OBJECT.findVerifiers();
    const { digits: GENERATED_CPF } = CPF_OBJECT;
    return GENERATED_CPF;
}