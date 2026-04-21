document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const telefono = document.getElementById("telefono").value;
    const recojo = document.getElementById("recojo").value;
    const entrega = document.getElementById("entrega").value;
    const referencia = document.getElementById("referencia").value;
    const pedido = document.getElementById("pedido").value;
    const costo = document.getElementById("costo").value;
    const pago = document.getElementById("pago").value;
    const obs = document.getElementById("obs").value;
    const motorizado = document.getElementById("motorizado").value;

    const mensaje = 
    "NUEVO PEDIDO - HUANUCO FLASH\n\n" +
    "Cliente: " + cliente + "\n" +
    "Teléfono: " + telefono + "\n\n" +
    "Recojo: " + recojo + "\n\n" +
    "Entrega: " + entrega + "\n" +
    "Referencia: " + referencia + "\n\n" +
    "Pedido: " + pedido + "\n\n" +
    "Costo: " + costo + "\n" +
    "Pago: " + pago + "\n\n" +
    "Obs: " + obs;

    const url = "https://wa.me/" + motorizado + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});