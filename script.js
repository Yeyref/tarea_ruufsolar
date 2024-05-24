document.getElementById('formSolar').addEventListener('submit', function (event) {
    event.preventDefault();

    const anchoTecho = parseFloat(document.getElementById('ancho_techo').value);
    const largoTecho = parseFloat(document.getElementById('largo_techo').value);
    const anchoPanel = parseFloat(document.getElementById('ancho_panel').value);
    const largoPanel = parseFloat(document.getElementById('largo_panel').value);

    const areaTecho = anchoTecho * largoTecho;
    const areaPanel = anchoPanel * largoPanel;

    const numPaneles = Math.floor(areaTecho / areaPanel);

    document.getElementById('resultado').textContent = `El número de paneles que caben en un techo de ${areaTecho}mts² es: ${numPaneles}`;

    const newInput = document.createElement('input');
    newInput.type = 'submit';
    newInput.name = 'limpiar';
    newInput.value = 'Limpiar Formulario';
    newInput.id = 'formReset'

    document.getElementById('limpiar').appendChild(newInput);

    document.getElementById('formReset').addEventListener('click', function () {
        document.getElementById('formSolar').reset();
        document.getElementById('resultado').textContent = '';
        document.getElementById('limpiar').removeChild(newInput);
    });

    
})
