import { ValidateCPF } from "./validateCPF.mjs";
import { getGeneratedCPF } from "./generateCPF.mjs";
import { showAlert } from "./assets/alert.js";

document.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    let el = e.target;

    if(el.classList.contains("send")){
        const UNVALIDATED_CPF = document.querySelector("input").value;
        const NINE_DIGITS = UNVALIDATED_CPF.slice(0,-2);
        const TWO_VERIFIERS = UNVALIDATED_CPF.slice(-2, UNVALIDATED_CPF.length);
        
        const CPF = new ValidateCPF(NINE_DIGITS, TWO_VERIFIERS);

        try {
            const RESULT = CPF.validate();
            showAlert(RESULT.message);
        } catch (er) {
            showAlert(er.message);
        }
    }

    if(el.classList.contains("generate")){
        try {
            const NEW_CPF = getGeneratedCPF();
            document.querySelector("#new-cpf").value = NEW_CPF;
        } catch (er) {
            showAlert("Infelizmente, ocorreu um erro. Pedimos desculpas pelo incoveniente");
        }
    }

    if(el.classList.contains("generator")) window.location = "./pages/CPFgenerator.html";
    if(el.classList.contains("validator")) window.location = "../index.html";
})