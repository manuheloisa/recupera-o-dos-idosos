const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalConteudo = document.getElementById('modal-conteudo');
const closeBtn = document.querySelector('.close-btn');
const btnLeitura = document.getElementById('btn-leitura');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitulo.innerText = card.dataset.titulo;
    modalConteudo.innerText = card.dataset.conteudo;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  window.speechSynthesis.cancel();
});

btnLeitura.addEventListener('click', () => {
  window.speechSynthesis.cancel();
  const texto = `${modalTitulo.innerText}. ${modalConteudo.innerText}`;
  const mensagem = new SpeechSynthesisUtterance(texto);
  mensagem.lang = 'pt-BR';
  window.speechSynthesis.speak(mensagem);
});