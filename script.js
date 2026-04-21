document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let cliente = document.getElementById("cliente").value;
    let telefono = document.getElementById("telefono").value;
    let recojo = document.getElementById("recojo").value;
    let entrega = document.getElementById("entrega").value;
    let pedido = document.getElementById("pedido").value;
    let costo = document.getElementById("costo").value;
    let pago = document.getElementById("pago").value;
    let obs = document.getElementById("obs").value;
    let motorizado = document.getElementById("motorizado").value;

    let mensaje = 
"🚚 *NUEVO PEDIDO - HUÁNUCO FLASH*\n\n" +
"👤 Cliente: " + cliente + "\n" +
"📞 Teléfono: " + telefono + "\n\n" +
"📍 Recojo: " + recojo + "\n" +
"🏁 Entrega: " + entrega + "\n\n" +
"📦 Pedido: " + pedido + "\n\n" +
"💰 Costo: " + costo + "\n" +
"💳 Pago: " + pago + "\n\n" +
"📝 Obs: " + obs;

    let url = "https://wa.me/" + motorizado + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});
