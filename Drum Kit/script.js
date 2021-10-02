window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.code}"]`)
    const key = document.querySelector(`.key[data-key = "${e.code}"]`);
    if (!audio) {return;}
    audio.currentTime = 0;//rewind to the start
    audio.play()
    key.classList.add('playing')
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend",removeTransition));