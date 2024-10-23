document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://positive-encouragement-production.up.railway.app/api/mensaje';

    document.getElementById('myForm').addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target);
        const name = formData.get('nombre');
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
                document.getElementById('thankYouMessage').textContent = `Gracias, ${name}!`; 
                $('#thankYouModal').modal('show'); 

                setTimeout(() => {
                    $('#thankYouModal').modal('hide');
                }, 3500); 

                event.target.reset(); 
            } else {
                alert('Hubo un problema al enviar el mensaje: ' + result.message);
            }
        } catch (error) {
            console.error('Error al enviar:', error);
            alert('Hubo un error al enviar el mensaje.');
        }
    });

   
    $('#thankYouModal').on('hidden.bs.modal', function () {
        clearTimeout();
    });
});