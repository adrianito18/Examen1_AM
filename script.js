document.getElementById('btnCalcular').addEventListener('click', calcular);

function calcular (){

    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const cuota = parseInt(document.getElementById('cuotas').value);

    if (isNaN(precio)|| isNaN(cantidad) || precio <= 0 || cantidad <=0)
    {
        alert('Ingrese un precio y una cantidad mayores que cero')
        return;
    }

    const total = precio * cantidad;
    const monto_cada_cuota = total / cuota;






    document.getElementById('resultado').innerHTML=`    
        Total de la compra: S/ ${total} <br>
        Número de cuotas: ${cuota} <br>
       <strong> Monto de cada cuota: S/ ${monto_cada_cuota.toFixed(2)}</strong> <br>`;










}