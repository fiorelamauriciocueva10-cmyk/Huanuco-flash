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

    const mensaje = `\u{1F680} *NUEVO PEDIDO - HUÁNUCO FLASH* \u{1F680}

\u{1F464} Cliente: ${cliente}
\u{1F4DE} Teléfono: ${telefono}

\u{1F4CD} Recojo: ${recojo}

\u{1F4CD} Entrega: ${entrega}
\u{1F4CC} Referencia: ${referencia}

\u{1F4E6} Pedido: ${pedido}

\u{1F4B0} Costo: ${costo}
\u{1F4B3} Pago: ${pago}

\u{1F4DD} Obs: ${obs}`;

    const url = "https://wa.me/" + motorizado + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
});
