import { Negociacaocontroller } from "./controllers/negociacao-controller.js"; //n esquecer do .js
const controller = new Negociacaocontroller;
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
