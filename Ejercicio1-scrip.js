document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    document.getElementById("errorMessages").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errorMessages = [];

    if (nombre === "") {
        errorMessages.push("El nombre es obligatorio.");
    }

    if (email === "") {
        errorMessages.push("El correo electrónico es obligatorio.");
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errorMessages.push("El correo electrónico no es válido.");
    }

    if (password === "") {
        errorMessages.push("La contraseña es obligatoria.");
    } else if (password.length < 6) {
        errorMessages.push("La contraseña debe tener al menos 6 caracteres.");
    }

    if (errorMessages.length > 0) {
        const errorDiv = document.getElementById("errorMessages");
        errorMessages.forEach(message => {
            const p = document.createElement("p");
            p.textContent = message;
            p.classList.add("error");
            errorDiv.appendChild(p);
        });
    } else {
        const successDiv = document.getElementById("successMessage");
        const successMessage = document.createElement("p");
        successMessage.textContent = "Formulario enviado correctamente.";
        successMessage.classList.add("success");
        successDiv.appendChild(successMessage);

        console.log("Nombre:", nombre);
        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
    }
});
