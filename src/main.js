const scroller = document.getElementById('scroller');
if (scroller) {
    const clone = scroller.innerHTML;
    scroller.innerHTML += clone;
}

const stages = document.querySelector('.scroll_stages');
if (stages) {
    stages.innerHTML += stages.innerHTML;
}
