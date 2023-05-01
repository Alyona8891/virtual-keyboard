export const textAreaBlock = document.createElement('textarea');
export function changeTextareaValue(key) {
  
  let position = textAreaBlock.selectionStart;
  
  if (key === 'BACKSPACE') {
    textAreaBlock.value = textAreaBlock.value.slice(0, position - 1) + textAreaBlock.value.slice(position);
    textAreaBlock.selectionStart = position - 1;
    textAreaBlock.selectionEnd = position - 1;
  } else if (key === 'DEL') {
    textAreaBlock.value = textAreaBlock.value.slice(0, position) + textAreaBlock.value.slice(position + 1);
    textAreaBlock.selectionStart = position;
    textAreaBlock.selectionEnd = position;
  } else if (key === 'ENTER') {
    position = textAreaBlock.selectionStart;
    textAreaBlock.value = textAreaBlock.value.slice(0, position) + '\n' + textAreaBlock.value.slice(position);
    textAreaBlock.selectionStart = position + 1;
    textAreaBlock.selectionEnd = position + 1;
  } else if (key === 'TAB') {
    position = textAreaBlock.selectionStart;
    textAreaBlock.value = textAreaBlock.value.slice(0, position) + '  ' + textAreaBlock.value.slice(position);
    textAreaBlock.selectionStart = position + 2;
    textAreaBlock.selectionEnd = position + 2;
  } else if (key === 'SHIFT' || key === 'ALT' || key === 'CTRL' || key === 'WIN' || key === 'CAPS LOCK') {
    console.log();
  } else {
    position = textAreaBlock.selectionStart;
    textAreaBlock.value = textAreaBlock.value.slice(0, position) + key + textAreaBlock.value.slice(position);
    textAreaBlock.selectionStart = position + 1;
    textAreaBlock.selectionEnd = position + 1;
  }
  
  textAreaBlock.focus();
}