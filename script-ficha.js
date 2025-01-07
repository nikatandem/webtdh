let sliderInterval; // Para controlar el intervalo del slider

function openDetails(id) {
    const details = document.getElementById("project-details");
    details.style.display = "flex";
    details.classList.add("zoom-in");
    document.body.classList.add("details-open"); // Activar fondo oscuro

    details.scrollIntoView({ behavior: "smooth", block: "center" });
}


function closeDetails() {
    const details = document.getElementById("project-details");
    details.classList.remove("zoom-in");
    details.style.display = "none";
    document.body.classList.remove("details-open"); // Desactivar fondo oscuro
}


function startSlider() {
    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    let currentIndex = 0;

    sliderInterval = setInterval(() => {
        // Ocultar todas las imágenes
        images.forEach((img) => (img.style.display = "none"));

        // Mostrar la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 3000); // Cambiar cada 3 segundos
}

// Cerrar al hacer clic fuera de la ficha
document.addEventListener("click", function (event) {
    const details = document.getElementById("project-details");
    if (
        details.style.display === "flex" &&
        !details.contains(event.target) &&
        !event.target.closest(".btn-saber-mas")
    ) {
        closeDetails();
    }
});

// Asociar botones "Saber más" a la apertura de detalles
document.querySelectorAll(".btn-saber-mas").forEach((btn) => {
    btn.addEventListener("click", function () {
        const projectId = this.getAttribute("data-id");
        openDetails(projectId);
    });
});
