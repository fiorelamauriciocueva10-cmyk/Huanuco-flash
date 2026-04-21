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

    const fecha = new Date().toLocaleString("es-PE");

    const mensaje = `\u{1F680} NUEVO PEDIDO

\u{1F552} ${fecha}

\u{1F464} ${cliente}
\u{1F4DE} ${telefono}

\u{1F4CD} ${entrega}
\u{1F4CC} ${referencia}

\u{1F4E6} ${pedido}

\u{1F4B0} ${costo} - ${pago}

\u{1F4DD} ${obs}`;

    let url;

    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        url = "https://wa.me/" + motorizado + "?text=" + encodeURIComponent(mensaje);
    } else {
        url = "https://web.whatsapp.com/send?phone=" + motorizado + "&text=" + encodeURIComponent(mensaje);
    }

    window.open(url, "_blank");

    const nuevoPedido = {
        id: Date.now(),
        cliente,
        entrega,
        referencia,
        pedido,
        costo,
        pago,
        estado: "Pendiente"
    };

    guardarPedido(nuevoPedido);
    mostrarPedidos();

    document.getElementById("pedidoForm").reset();
});

function guardarPedido(pedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.unshift(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function mostrarPedidos() {
    const lista = document.getElementById("listaPedidos");
    lista.innerHTML = "";

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos.forEach(p => {
        const div = document.createElement("div");

        let color = "#facc15"; // Pendiente

        if (p.estado === "En camino") color = "#38bdf8";
        if (p.estado === "Entregado") color = "#22c55e";

        div.innerHTML = `
        <div class="pedido">
            <b>${p.cliente}</b> - ${p.pedido}<br>
            📍 ${p.entrega}<br>
            📌 ${p.referencia}<br>
            💰 ${p.costo} | ${p.pago}<br>

            <span style="color:${color}; font-weight:bold;">
                🟡 Estado: ${p.estado}
            </span><br><br>

            <button onclick="cambiarEstadoEnCamino(${p.id})">🚴 En camino</button>
            <button onclick="cambiarEstadoEntregado(${p.id})">✅ Entregado</button>
            <button onclick="eliminarPedido(${p.id})">❌ Eliminar</button>
        </div>
        `;

        lista.appendChild(div);
    });
}

function cambiarEstadoEnCamino(id) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos"));

    pedidos = pedidos.map(p => {
        if (p.id === id) p.estado = "En camino";
        return p;
    });

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    mostrarPedidos();
}

function cambiarEstadoEntregado(id) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos"));

    pedidos = pedidos.map(p => {
        if (p.id === id) p.estado = "Entregado";
        return p;
    });

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    mostrarPedidos();
}

function eliminarPedido(id) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos"));

    pedidos = pedidos.filter(p => p.id !== id);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    mostrarPedidos();
}

mostrarPedidos();