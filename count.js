

    let nombreClics = 0;

    function comptage() {
        nombreClics++;
    document.getElementById("nombreClics").textContent = nombreClics;
}

    document.getElementById("boutonClic").addEventListener("click", comptage);

    document.getElementById("desactiver").addEventListener("click");
// document.getElementById("boutonClic").removeEventListener("click", comptage);
