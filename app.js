const agregar = (valor) => {
    document.getElementById('display').value += valor
}

const borrar = () => {
    document.getElementById('display').value = ''
}




const calcular = () => {
    const display = document.getElementById('display');

    try {
        const resultado = eval(display.value);
        if (!isNaN(resultado)) {
            display.value = resultado;
        } else {
            display.value = 'Error (x)';
        }
    } catch (error) {
        display.value = 'Error (x)';
    }
}


