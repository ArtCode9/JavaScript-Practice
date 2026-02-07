import { state } from './state.js';
import { renderHistory } from './ui.js';

export function addHistory(entry) {
   state.history.unshift(entry) // newest on top

   if(state.history.length > 10 ) {
      state.history.pop() // limit history
   }

   renderHistory()
}

export function clearHistory () {
   state.history = []
   renderHistory()
   console.warn(`History clear clicked!!`);
}

