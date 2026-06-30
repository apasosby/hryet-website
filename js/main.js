document.addEventListener("DOMContentLoaded", () => {

    console.log("HRYET iniciado");

    const botones = document.querySelectorAll("button");

    botones.forEach((boton) => {

        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.05)";
        });

        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
        });

    });

});
function iniciarDashboard(){

    console.log("Dashboard iniciado");

}
