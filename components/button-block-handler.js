import { changeTextareaValue } from './change-textarea-value.js';

function btnBlockHandler(event) {
  changeTextareaValue(event.target.textContent);
}
export default btnBlockHandler;
