
function calcular() {

    let notas = [];
    let total = 0;

    let nombre = document.getElementById("nombre").value.trim();
    let curso = document.getElementById("curso").value.trim();
    let programa = document.getElementById("programa").value.trim();

    // Validar los datos del estudiante

    if (nombre === "" || curso === "" || programa === "") {
        alert("Por favor complete todos los datos del estudiante.");
        return;
    }

    // Ingresar y guardar las cinco notas

    for (let i = 1; i <= 5; i++) {

        let nota = document.getElementById("nota" + i).value;

        if (nota === "") {
            alert("Debe ingresar las cinco notas.");
            return;
        }

        nota = parseFloat(nota);

        if (isNaN(nota) || nota < 0 || nota > 5) {
            alert("Las notas deben estar entre 0 y 5.");
            return;
        }

        notas.push(nota);

        total = total + nota;
    }

    // Calcular promedio

    let resultado = total / 5;

    let mensaje = document.getElementById("resultado");

    mensaje.classList.remove("oculto");
    mensaje.classList.remove("aprobado", "reprobado");

    // Evaluar si el estudiante aprobó o reprobó

    if (resultado >= 3.0) {

        mensaje.classList.add("aprobado");

        mensaje.innerHTML = `
            <span class="estado-final">✓ ESTUDIANTE APROBADO</span>

            <h2>Resultado académico</h2>

            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Semestre:</strong> ${curso}</p>
            <p><strong>Programa:</strong> ${programa}</p>
            <p><strong>Notas:</strong> ${notas.join(" | ")}</p>

            <div class="promedio">${resultado.toFixed(2)}</div>

            <p>Promedio final del estudiante</p>

            <p>El estudiante aprobó satisfactoriamente su semestre.</p>
        `;

    } else {

        mensaje.classList.add("reprobado");

        mensaje.innerHTML = `
            <span class="estado-final">✕ ESTUDIANTE REPROBADO</span>

            <h2>Resultado académico</h2>

            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Semestre:</strong> ${curso}</p>
            <p><strong>Programa:</strong> ${programa}</p>
            <p><strong>Notas:</strong> ${notas.join(" | ")}</p>

            <div class="promedio">${resultado.toFixed(2)}</div>

            <p>Promedio final del estudiante</p>

            <p>El estudiante no alcanzó la nota mínima aprobatoria.</p>
        `;
    }

    mensaje.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
