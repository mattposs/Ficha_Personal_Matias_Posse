const boton = document.getElementById("theme-toggle");
const icono = document.getElementById("icono-tema");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icono.src = "./img/sol.svg";
}

boton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icono.src = "./img/sol.svg";
        localStorage.setItem("theme", "dark");
    } else {
        icono.src = "./img/luna.svg";
        localStorage.setItem("theme", "light");
    }
});
