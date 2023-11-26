const sliderLine = document.querySelector('.sliderLine');
let offset = 0;

document.querySelector('#fwd').addEventListener('click', function () {
    offset += 420;
    if (offset > 2100) offset = 0;
    sliderLine.style.right = offset + 'px';
});

document.querySelector('#back').addEventListener('click', function () {
    offset -= 420;
    if (offset < 0) offset = 2100;
    sliderLine.style.right = offset + 'px';
});