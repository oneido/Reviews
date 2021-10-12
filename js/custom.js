const targetCard = document.querySelectorAll(".card");

window.addEventListener("load", open);
targetCard[0].addEventListener("click", () => {
    document.querySelector("body > div > div > div.wrapper > div:nth-child(1) > div > svg > image").click();
    console.log("click")
})

function open() {
    targetCard[0].click();
    console.log("check");
}