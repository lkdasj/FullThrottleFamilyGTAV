document.getElementById('opciones').addEventListener('change', function() {
    var selectedValue = this.value;

    // Verifica que se haya seleccionado una opción válida
    if (selectedValue) {
        fetch(selectedValue)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('contenido-cargado').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el contenido:', error);
                document.getElementById('contenido-cargado').innerHTML = '<p>Error al cargar el contenido. Intenta nuevamente.</p>';
            });
    }
});