const targetCard = document.querySelectorAll(".card");

document.addEventListener("load", open);

function open() {
    targetCard[0].click();
    console.log("check");
}