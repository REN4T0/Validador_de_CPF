export function showAlert(msg){
    document.querySelector("p").innerText = msg;
    document.querySelector("div").style.right = "2vw";

    setTimeout(()=>{
        document.querySelector("div").style.right = "-20vw";
    }, 3000);
}