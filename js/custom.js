const targetCard = document.querySelectorAll(".card");

window.addEventListener("load", open);
targetCard[0].addEventListener("click", () => { console.log("click") })

function open() {
    targetCard[0].click();
    console.log("check");
}