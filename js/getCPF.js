import { Get } from "./validateCPF.js";
import { showAlert } from "./assets/alert.js";

document.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    let el = e.target;

    if(el.classList.contains("send")){
        const UNVALIDATED_CPF = document.querySelector("input").value;
        const NINE_DIGITS = UNVALIDATED_CPF.slice(0,-2);
        const TWO_VERIFIERS = UNVALIDATED_CPF.slice(-2, UNVALIDATED_CPF.length);
        
        const CPF = new Get(NINE_DIGITS, TWO_VERIFIERS);

        try {
            const RESULT = CPF.validate();
            showAlert(RESULT.message);
        } catch (er) {
            showAlert(er.message);
        }
    }
})