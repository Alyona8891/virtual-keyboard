import { changeTextareaValue } from './change-textarea-value.js';

export function btnBlockHandler(event) {
  changeTextareaValue(event.target.textContent);
}
