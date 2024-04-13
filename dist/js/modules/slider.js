function slider() {
    
    const slider = document.querySelector('.offer__slider'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = slidesWrapper.querySelector('.offer__slider-inner'),
          slides = slidesField.querySelectorAll('.offer__slide'),
          widthSlide = window.getComputedStyle(slidesWrapper).width;
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');

    let slideIndex = 1,
        offset = 0;

    function indicatorsOpacity() {
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[slideIndex - 1].style.opacity = 1;
    }

    function zeroToSliderOffer() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    }

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = widthSlide;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dotsArr = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dots = document.createElement('li');
        dots.setAttribute('data-slide-to', i + 1);
        dots.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dots.style.opacity = 1;
        }
        indicators.append(dots);
        dotsArr.push(dots);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(widthSlide) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(widthSlide);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        zeroToSliderOffer();
        indicatorsOpacity();
    });

    prev.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits(widthSlide) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(widthSlide);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        zeroToSliderOffer();
        indicatorsOpacity();
    });

    dotsArr.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(widthSlide) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            zeroToSliderOffer();
            indicatorsOpacity();
        })
    })
}

module.exports = slider;