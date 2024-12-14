function openSideBar() {
    document.querySelector(".back").style = `
            opacity: 1;
            z-index: 1;
        `;

        document.querySelector("header").style = `
            left: 0rem;
        `;
}

function closeSideBar() {
    document.querySelector(".back").style = `
        opacity: 0;
        z-index: -1;
    `;

    document.querySelector("header").style = `
        left: -50rem;
    `;
}

document.addEventListener("click", e => {
    let el = e.target

    if(el.classList.contains("open")) openSideBar();

    if(el.classList.contains("close")) closeSideBar();
});