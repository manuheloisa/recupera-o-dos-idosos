// Abre o modal e insere os textos dinamicamente
function abrirModal(titulo, texto) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-texto').innerText = texto;
    document.getElementById('modalInfo').style.display = 'block';
}

// Fecha o modal e interrompe a leitura se estiver rodando
function fecharModal() {
    document.getElementById('modalInfo').style.display = 'none';
    window.speechSynthesis.cancel(); // Para a voz ao fechar
}

// Função de leitura de texto (Text-to-Speech)
function lerTexto() {
    // Interrompe qualquer leitura anterior
    window.speechSynthesis.cancel();

    const textoParaLer = document.getElementById('modal-texto').innerText;
    const fala = new SpeechSynthesisUtterance(textoParaLer);
    
    // Configura o idioma para Português do Brasil
    fala.lang = 'pt-BR';
    fala.rate = 1.0; // Velocidade da voz
    
    window.speechSynthesis.speak(fala);
}