// window.addEventListener('DOMContentLoaded', () => {
//     //tabs
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(content => {
//             content.classList.add('hide');
//             content.classList.remove('show', 'fade');
//         });

//         tabs.forEach(tab => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//        const target = event.target;
       
//        if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((tab, i) => {
//                 if(target == tab) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//        }
//     });

//     //timer

//     const deadline = '2024-12-31';

//     function getTimeRemaining(deadline) {
//         const t = Date.parse(deadline) - new Date(),
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'd': days,
//             'h': hours,
//             'min': minutes,
//             'sec': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, deadline) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);

//         updateClock();
              
//         function updateClock() {
//             const t = getTimeRemaining(deadline);

//             days.innerHTML = getZero(t.d);
//             hours.innerHTML = getZero(t.h);
//             minutes.innerHTML = getZero(t.min);
//             seconds.innerHTML = getZero(t.sec);

//             if (t.total <= 0) {
//                 clearImmediate(timeInterval);
//             }
//         }
//     }

//     setClock('.timer', deadline);
// });

const decCache = [],
      decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}
console.log(decOfNum(5, ['секунда', 'секунды', 'секунд']))
