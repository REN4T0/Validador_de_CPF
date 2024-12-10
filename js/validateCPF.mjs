export class ValidateCPF {
    constructor(digits, verifiers) {
        Object.defineProperties(this, {
            digits: {
                value: digits,
                enumerable: true,
                writable: true,
                configurable: false
            },

            verifiers: {
                value: verifiers,
                enumerable: true,
                writable: false,
                configurable: false
            },
        });
    }

    findVerifiers() {
        const ARRAY_DIGITS = Array.from(this.digits);
        const MULTIPLY_DIGITS = ARRAY_DIGITS.map((value, index) => this.digits.length === 9 ? Number(value) * (index + 1) : Number(value) * (index));
        const SUM_DIGITS = MULTIPLY_DIGITS.reduce((acumulator, value) => acumulator += value);

        (SUM_DIGITS % 11) >= 10 ? this.digits += '0' : this.digits += String(SUM_DIGITS % 11);

        if (this.digits.length === 10) this.findVerifiers();
    }

    validate() {
        if (this.digits.length !== 9 || this.verifiers.length !== 2) throw new Error("Um CPF deve possuir 11 (onze) dígitos.");
        if (this.digits.match(/[a-zA-Z\W]/g) || this.verifiers.match(/[a-zA-Z\W]/g)) throw new Error("Um CPF deve possuir apenas números.");
        if (this.digits[0].repeat(this.digits.length) === this.digits) throw new Error("Números sequenciais detectados - CPF inválido.");

        this.findVerifiers();

        if (this.verifiers === this.digits.slice(-2, this.digits.length + 1)) {
            return {
                status: "Success",
                message: "CPF válido"
            }

        } else {
            throw new Error("CPF inválido");
        }
    }
}