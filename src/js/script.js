window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
       const target = event.target;
       
       if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if(target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
       }
    });

    //timer

    const deadline = '2024-12-31';

    function getTimeRemaining(deadline) {
        const t = Date.parse(deadline) - new Date(),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60)

        return {
            'total': t,
            'd': days,
            'h': hours,
            'min': minutes,
            'sec': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function deсNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function setClock(selector, deadline) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              daysText = timer.querySelector('#days__text'),
              hoursText = timer.querySelector('#hours__text'),
              minutesText = timer.querySelector('#minutes__text'),
              secondsText = timer.querySelector('#seconds__text'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
              
        function updateClock() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.d);
            hours.innerHTML = getZero(t.h);
            minutes.innerHTML = getZero(t.min);
            seconds.innerHTML = getZero(t.sec);

            daysText.textContent = deсNum(t.d, ['день', 'дня', 'дней']);
            hoursText.textContent = deсNum(t.h, ['час', 'часа', 'часов']);
            minutesText.textContent = deсNum(t.min, ['минута', 'минуты', 'минут']);
            secondsText.textContent = deсNum(t.sec, ['секунда', 'секунды', 'секунд']);

            if (t.total <= 0) {
                clearImmediate(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
});