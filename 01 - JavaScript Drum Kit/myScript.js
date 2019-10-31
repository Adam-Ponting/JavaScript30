// declares functions
function playSound(e) { // receive event as is from eventlistener
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // returns first matching element
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // returns first matching element

    if (!audio) return; // if not an audio key, exit

    audio.currentTime = 0; // rewinds audio (for spamming buttons)
    audio.play(); // plays audio file

    key.classList.add('playing');
}
function removeTransition(e) { // recieves event as from eventlistener
    if (e.propertyName !== 'transform') return; // skips if not transforming
    this.classList.remove('playing'); // removes class
    // this. is equal to what is called against it, addeventlistener was called and key was called against it so this. is the key
}

const keys = document.querySelectorAll('.key'); // get all .key elements
keys.forEach(key => key.addEventListener('transitionend', removeTransition) // for each key element on transitionend, run the removeTransition function
);
window.addEventListener('keydown', playSound) // event listener on window, receives event as an object but default


