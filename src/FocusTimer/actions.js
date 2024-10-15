import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();

    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running');
    timer.updateDisplay();

    sounds.buttonPressAudio.play();
}

export function addFiveMinutes() {
    
        let minutes = Number(elements.minutes.textContent);
        let seconds = Number(elements.seconds.textContent);
        
        if(minutes < 60 && (minutes + 5) < 60) {
            minutes += 5;
        } else if ((minutes + 5) > 60) {
            minutes += 60 - minutes;
        }
      
        timer.updateDisplay(minutes, seconds);

}

export function removeFiveMinutes() {

    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
        
    if(minutes > 0 && (minutes - 5) > 0) {
        minutes -= 5;
    } else if ((minutes - 5) < 0) {
        minutes = 0;
    }

    timer.updateDisplay(minutes, seconds);
}

export function editMinutes() {
    if(state.isRunning == false) {
        elements.minutes.setAttribute('contenteditable', true);
        elements.minutes.focus();
    }
    
}

export function editSeconds() {
    if(state.isRunning == false) {
        elements.seconds.setAttribute('contenteditable', true);
        elements.seconds.focus();
    }
    
}

export function soundTree() {
    const button = elements.musicSelection.querySelector('[data-action="soundTree"]');
    
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        state.ambientMusic = 'tree';
        sounds.bgFloresta.play();
        

    } else {
        state.ambientMusic = null;
        sounds.bgFloresta.pause();
        
    }
}

export function soundRain() {
    const button = elements.musicSelection.querySelector('[data-action="soundRain"]');
    
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        state.ambientMusic = 'tree';
        sounds.bgChuva.play();
        

    } else {
        state.ambientMusic = null;
        sounds.bgChuva.pause();
        
    }
}

export function soundStorefront() {
    const button = elements.musicSelection.querySelector('[data-action="soundStorefront"]');
    
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        state.ambientMusic = 'tree';
        sounds.bgCafeteria.play();
        

    } else {
        state.ambientMusic = null;
        sounds.bgCafeteria.pause();
        
    }
}

export function soundCampfire() {
    const button = elements.musicSelection.querySelector('[data-action="soundCampfire"]');
    
    button.classList.toggle('selected');
    if (button.classList.contains('selected')) {
        state.ambientMusic = 'tree';
        sounds.bgLareira.play();
        

    } else {
        state.ambientMusic = null;
        sounds.bgLareira.pause();
        
    }
}