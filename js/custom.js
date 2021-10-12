const targetCard = document.querySelectorAll(".card");

document.addEventListener("load", open);
targetCard[0].addEventListener("click", () => { console.log("click") })

function open() {
    targetCard[0].click();
    console.log("check");
}