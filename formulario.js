document.getElementById("contacto-form").addEventListener("submit", function(event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Validar campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor complete todos los campos del formulario.");
        return;
    }

    // Si todos los campos están completos, enviar el formulario
    enviarFormulario();
});

function enviarFormulario() {
    // Aquí puedes agregar código para enviar el formulario
    // por ejemplo, utilizando AJAX
    alert("Formulario enviado correctamente");
    // Puedes redirigir al usuario a otra página después del envío si lo deseas
    // window.location.href = "pagina-de-confirmacion.html";
}
