const container = document.querySelector("#container");

const red = document.createElement("p");
red.classList.add("para");
red.textContent= "Hi, I'm red!";

container.appendChild(red);

const button = document.querySelector("#alertButton");
button.addEventListener("click", () => {
    alert("Hello World!");
})