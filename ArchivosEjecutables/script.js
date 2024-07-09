// PRIMERO LLAMAREMOS A LA FUNCIÓN PARA AÑADIR CEROS A CADA RANGO DE HORARIO Y FECHA...

function addZero(x)
{
    if (x < 10)
    {
        x = '0' + x;
    }
    return x;
}

// LLAMAREMOS A LA FUNCIÓN PARA CONFIGURAR EL RELOJ MEDIANTE HORAS, MINUTOS Y SEGUNDOS MÁS LA FECHA ACTUAL...

setInterval(function()
{
    let dateInstance = new Date();

    // LE VAMOS A CONFIGURAR LAS HORAS, LOS MINUTOS Y SEGUNDOS...

    let hour = dateInstance.getHours();
    let minute = dateInstance.getMinutes();
    let second = dateInstance.getSeconds();

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    // LUEGO, CONFIGURAMOS LA FECHA ACTUAL...

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[ dateInstance.getDay() ];
    let today = dateInstance.getDate();
    let month = months[ dateInstance.getMonth() ];
    let fullYear = dateInstance.getFullYear();
});