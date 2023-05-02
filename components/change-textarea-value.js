export const textAreaBlock = document.createElement('textarea');
export function changeTextareaValue(key) {
  let position = textAreaBlock.selectionStart;
  if (key === 'BACKSPACE') {
    const k = textAreaBlock;
    k.value = k.value.slice(0, position - 1) + k.value.slice(position);
    k.selectionStart = position - 1;
    k.selectionEnd = position - 1;
  } else if (key === 'DEL') {
    const k = textAreaBlock;
    k.value = k.value.slice(0, position) + k.value.slice(position + 1);
    k.selectionStart = position;
    k.selectionEnd = position;
  } else if (key === 'ENTER') {
    const k = textAreaBlock;
    position = k.selectionStart;
    k.value = `${k.value.slice(0, position)}\n${k.value.slice(position)}`;
    k.selectionStart = position + 1;
    k.selectionEnd = position + 1;
  } else if (key === 'TAB') {
    const k = textAreaBlock;
    position = k.selectionStart;
    k.value = `${k.value.slice(0, position)}  ${k.value.slice(position)}`;
    k.selectionStart = position + 2;
    k.selectionEnd = position + 2;
  } else if (!(key === 'SHIFT' || key === 'ALT' || key === 'CTRL' || key === 'WIN' || key === 'CAPS LOCK')) {
    const k = textAreaBlock;
    position = k.selectionStart;
    k.value = k.value.slice(0, position) + key + k.value.slice(position);
    k.selectionStart = position + 1;
    k.selectionEnd = position + 1;
  }
  textAreaBlock.focus();
}
