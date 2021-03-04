//SLIDES//
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

const sliderNext = function () {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
}

const sliderPrev = function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
}

btnNext.addEventListener('click',  sliderNext);
btnPrev.addEventListener('click',  sliderPrev);

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
//Timer
const block = document.getElementById('time');
const endDateMs = (new Date('2021-03-25')).getTime();
console.log(block);

function calculateEstimation() {
    const currentDateMs = new Date().getTime();

    if (currentDateMs >= endDateMs) {
        const text = 'Акция закончилась';
        setTimerText(text);
        return false;
    }

    const estimate = endDateMs - currentDateMs - 3 * 60 * 60 * 1000;

    const estimateSeconds = Math.floor(estimate / 1000);
    const estimateMinutes = Math.floor(estimateSeconds / 60);
    const estimateHours = Math.floor(estimateMinutes / 60);
    const estimateDays = Math.floor(estimateHours / 24);

    render(estimateSeconds % 60, estimateMinutes % 60, estimateHours % 24, estimateDays);
    return true;
}

function render(estimateSeconds, estimateMinutes, estimateHours, estimateDays) {
    estimateSeconds = estimateSeconds < 10 ? `0${estimateSeconds}` : estimateSeconds;
    estimateMinutes = estimateMinutes < 10 ? `0${estimateMinutes}` : estimateMinutes;
    estimateHours = estimateHours < 10 ? `0${estimateHours}` : estimateHours;
    estimateDays = estimateDaysText(estimateDays);

    setTimerText(`${estimateDays} ${estimateHours}:${estimateMinutes}:${estimateSeconds}`);
}

function setTimerText(text) {
    block.textContent = text;
}

const estimateDaysText = (estimateDays) => {
        const lastNumber = estimateDays % 10;
        if (lastNumber < 5 && lastNumber > 1){
            return `${estimateDays} дня`;
        } else if (lastNumber === 1){
            return `${estimateDays} день`;
        } else {
            return `${estimateDays} дней`;
        }
}

if (calculateEstimation()) {
    setInterval(calculateEstimation, 1000);
}

const telInput = document.getElementById('telInput');

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue= false;
}
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

