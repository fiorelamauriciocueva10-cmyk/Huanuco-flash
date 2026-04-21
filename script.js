document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const telefono = document.getElementById("telefono").value;
    const recojo = document.getElementById("recojo").value;
    const entrega = document.getElementById("entrega").value;
    const pedido = document.getElementById("pedido").value;
    const costo = document.getElementById("costo").value;
    const pago = document.getElementById("pago").value;
    const obs = document.getElementById("obs").value;
    const motorizado = document.getElementById("motorizado").value;

    const mensaje = `🚀 *NUEVO PEDIDO - HUÁNUCO FLASH* 🚀

👤 Cliente: ${cliente}
📞 Teléfono: ${telefono}

📍 Recojo: ${recojo}
🏁 Entrega: ${entrega}

📦 Pedido: ${pedido}

💰 Costo: ${costo}
💳 Pago: ${pago}

📝 Obs: ${obs}`;

    const url = `https://wa.me/${motorizado}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});