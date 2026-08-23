document.addEventListener("DOMContentLoaded", () => {
	const formulario = document.querySelector("form");

	if (!formulario) {
		return;
	}

	formulario.addEventListener("submit", (evento) => {
		evento.preventDefault();

		const nombre = document.querySelector("#nombre");
		const correo = document.querySelector("#correo");
		const mensaje = document.querySelector("#mensaje");

		if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
			alert("Completa todos los campos antes de enviar el mensaje.");
			return;
		}

		if (!correo.validity.valid) {
			alert("Escribe un correo electrónico válido.");
			correo.focus();
			return;
		}

		alert(`Gracias, ${nombre.value.trim()}. Tu mensaje fue enviado correctamente.`);
		formulario.reset();
	});
});
