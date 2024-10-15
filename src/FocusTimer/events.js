import * as elements from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    elements.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != 'function') {
            return;
        }

        actions[action]();
    });
}

export function registerMusicSelection() {
    elements.musicSelection.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != 'function') {
            return;
        }

        actions[action]();
    });    
}

export function registerTimer() {
    elements.timer.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != 'function') {
            return;
        }

        if(action == 'editMinutes') {
            elements.minutes.addEventListener('focus', () => {
                elements.minutes.textContent = "";
            });

            elements.minutes.onkeypress = (event) => /\d/.test(event.key);
            
            elements.minutes.addEventListener('blur', (event) => {
                let time = event.currentTarget.textContent;                
        
                time = time > 60 ? 60 : time;                
        
                state.minutes = time;
        
                updateDisplay();
                elements.minutes.removeAttribute('contenteditable');
            });
        }

        if(action == 'editSeconds') {
            elements.seconds.addEventListener('focus', () => {
                elements.seconds.textContent = "";
            });

            elements.seconds.onkeypress = (event) => /\d/.test(event.key);

            elements.seconds.addEventListener('blur', (event) => {
                let time = event.currentTarget.textContent;
        
                time = time > 59 ? 59 : time;
        
                state.seconds = time;

                updateDisplay();
                elements.seconds.removeAttribute('contenteditable');
            });
        }
        actions[action]();
    });    
}