//Escutando elementos com Javascripts
//document é a perte que engloba todo o documento

//Pega a pagina e adiciona um evento e fica escutando
//Fique observando quando eu carregar a minha página e quando o conteudo
//estiver totalmente carregado da arvore dom de elemtnos, dispare determina funcao
document.addEventListener('DOMContentLoaded', () => {
  //Biblioteca GSAP

  let tl = new TimelineMax();

  //fromTo é uma func que vai de algum lugar para algum lugar
  //A classe que quero animar (target), o tempo, from e to
  tl.fromTo('.bg-loader', 1, {width: '100%'}, {width: '0%', delay: 5, ease: Expo.easeInOut});

  tl.fromTo('.bg-video', 
  2, 
  {width: '0%', opacity: 0}, 
  {width: '100%', opacity: 1, ease: Expo.easeInOut},
  '-=1');

  tl.fromTo('.logo', 
  0.2, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.nav-list', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.img-1', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.nav-social', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.text-info', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.buttons-ref', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.img-info', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');

  tl.fromTo('.con-2', 
  0.7, 
  //de cima pra baixo 
  {y: -50, opacity: 0}, 
  {y: 0, opacity: 1, ease: Expo.easeInOut},
  '-=0.5');
})