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

    let mensaje = `🚀 NUEVO PEDIDO - HUÁNUCO FLASH

👤 Cliente: ${cliente}
📞 Teléfono: ${telefono}

📍 Recojo: ${recojo}
📍 Entrega: ${entrega}

📦 Pedido: ${pedido}

💰 Costo: ${costo}
💳 Pago: ${pago}

📝 Obs: ${obs}`;

    let url = "https://wa.me/" + motorizado + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});
