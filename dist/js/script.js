import timer from './modules/timer';
import tabs from './modules/tabs';
import cards from './modules/cards';
import slider from './modules/slider';
import calculator from './modules/calculator';
import forms from './modules/forms';
import modal from './modules/modal';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 15000);
    const deadline = '2024-12-31';

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', deadline);
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper'
    });
});