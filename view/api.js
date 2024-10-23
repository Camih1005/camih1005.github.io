document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://positive-encouragement-production.up.railway.app/api/mensaje';

    document.getElementById('myForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const formData = new FormData(event.target);
        const name = formData.get('nombre'); // Obtener el nombre del formulario
        const data = {
            nombre: name,
            correo: formData.get('correo'),
            mensaje: formData.get('mensaje'),
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Status de la respuesta:', response.status);
            const result = await response.json();
            console.log('Respuesta del servidor:', result);

            if (response.ok) {
                document.getElementById('thankYouMessage').textContent = `Gracias, ${name}!`; // Mostrar el nombre
                $('#thankYouModal').modal('show'); // Mostrar el modal

                // Cerrar el modal después de 5 segundos
                setTimeout(() => {
                    $('#thankYouModal').modal('hide');
                }, 3500); // 5000 milisegundos = 5 segundos

                event.target.reset(); // Limpia el formulario
            } else {
                alert('Hubo un problema al enviar el mensaje: ' + result.message);
            }
        } catch (error) {
            console.error('Error al enviar:', error);
            alert('Hubo un error al enviar el mensaje.');
        }
    });

    // Cerrar el modal al hacer clic fuera de él o al presionar la tecla Escape
    $('#thankYouModal').on('hidden.bs.modal', function () {
        clearTimeout();
    });
});