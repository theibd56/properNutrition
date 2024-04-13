window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          slider = require('./modules/slider'),
          calculator = require('./modules/calculator'),
          forms = require('./modules/forms');

    tabs();
    modal();
    timer();
    cards();
    slider();
    calculator();
    forms();
});