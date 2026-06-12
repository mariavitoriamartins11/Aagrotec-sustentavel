
document.getElementById("waterForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Captura os valores
    const banho = parseFloat(document.getElementById("banho").value);
    const torneira = parseFloat(document.getElementById("torneira").value);
    const lava = parseFloat(document.getElementById("lava").value);

    const banhosDia = parseInt(document.getElementById("banhosDia").value);
    const torneirasDia = parseInt(document.getElementById("torneirasDia").value);
    const lavagensDia = parseInt(document.getElementById("lavagensDia").value);

    // Calcula consumo diário
    const total = (banho * banhosDia) + (torneira * torneirasDia) + (lava * lavagensDia);

    // Exibe resultado
    document.getElementById("resultado").innerText = `Consumo diário total: ${total.toFixed(2)} litros.`;
});
