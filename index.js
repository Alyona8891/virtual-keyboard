const keyboard = [{ row2: '`', keyCode: 'backquote' }, { row2: '1', keyCode: 'digit1' }, { row2: '2', keyCode: 'digit2' }, { row2: '3', keyCode: 'digit3' }, { row2: '4', keyCode: 'digit4' }, { row2: '5', keyCode: 'digit5' }, { row2: '6', keyCode: 'digit6' }, { row2: '7', keyCode: 'digit7' }, { row2: '8', keyCode: 'digit8' }, { row2: '9', keyCode: 'digit9' }, { row2: '0', keyCode: 'digit0' }, {row2: '-', keyCode: 'minus' }, {row2: '=', keyCode: 'equal' }, { row2: 'BACKSPACE', keyCode: 'backspace' }, { row2: 'TAB', keyCode: 'tab' }, { row2: 'Q', keyCode: 'keyq' }, { row2: 'W', keyCode: 'keyw' }, { row2: 'E', keyCode: 'keye' }, { row2: 'R', keyCode: 'keyr' }, { row2: 'T', keyCode: 'keyt' }, { row2: 'Y', keyCode: 'keyy' }, { row2: 'U', keyCode: 'keyu' }, { row2: 'I', keyCode: 'keyi' }, { row2: 'O', keyCode: 'keyo' }, { row2: 'P', keyCode: 'keyp' }, { row2: '[', keyCode: 'bracketleft' }, { row2: ']', keyCode: 'bracketright' }, { row2: '\\',  keyCode: 'backslash' }, { row2: 'DEL', keyCode: 'delete' }, { row2: 'CAPS LOCK', keyCode: 'capslock' }, { row2: 'A', keyCode: 'keya' }, { row2: 'S', keyCode: 'keys' }, {  row2: 'D', keyCode: 'keyd' }, { row2: 'F', keyCode: 'keyf' }, { row2: 'G', keyCode: 'keyg' }, { row2: 'H', keyCode: 'keyh' }, { row2: 'J', keyCode: 'keyj' }, { row2: 'K', keyCode: 'keyk' }, { row2: 'L', keyCode: 'keyl' }, { row2: ';', keyCode: 'semicolon' }, { row2: '\'', keyCode: 'quote' }, { row2: 'ENTER', keyCode: 'enter' }, { row2: 'SHIFT', keyCode: 'shiftleft' }, { row2: 'Z', keyCode: 'keyz' }, { row2: 'X', keyCode: 'keyx' }, { row2: 'C', keyCode: 'keyc' }, { row2: 'V', keyCode: 'keyv' }, { row2: 'B', keyCode: 'keyb' }, { row2: 'N', keyCode: 'keyn' }, { row2: 'M', keyCode: 'keym' }, { row2: '.', keyCode: 'comma' }, { row2: ',', keyCode: 'period' }, { row2: '/', keyCode: 'slash' }, { row2: '▲', keyCode: 'arrowup' }, { row2: 'SHIFT', keyCode: 'shiftright' }, { row2: 'CTRL', keyCode: 'controlleft' }, { row2: 'WIN', keyCode: 'metaleft' }, { row2: 'ALT', keyCode: 'altleft' }, { row2: ' ', keyCode: 'space' }, { row2: 'ALT', keyCode: 'altright' }, { row2: '◄', keyCode: 'arrowleft' }, { row2: '▼', keyCode: 'arrowdown' }, { row2: '►', keyCode: 'arrowright' }, { row2: 'CTRL', keyCode: 'controlright' }, ];

const keyboard2 = [{ row1: '~', row2: '`', keyCode: 'backquote' }, { row1: '!', row2: '1', keyCode: 'digit1' }, { row1: '@', row2: '2', keyCode: 'digit2' }, { row1: '#', row2: '3', keyCode: 'digit3' }, { row1: '$', row2: '4', keyCode: 'digit4' }, { row1: '%', row2: '5', keyCode: 'digit5' }, { row1: '^', row2: '6', keyCode: 'digit6' }, { row1: '&', row2: '7', keyCode: 'digit7' }, { row1: '*', row2: '8', keyCode: 'digit8' }, { row1: '(', row2: '9', keyCode: 'digit9' }, { row1: ')', row2: '0', keyCode: 'digit0' }, { row1: '_', row2: '-', keyCode: 'minus' }, { row1: '+', row2: '=', keyCode: 'equal' }, { row1: null, row2: 'BACKSPACE', keyCode: 'backspace' }, { row1: null, row2: 'TAB', keyCode: 'tab' }, { row1: null, row2: 'Q', keyCode: 'keyq' }, { row1: null, row2: 'W', keyCode: 'keyw' }, { row1: null, row2: 'E', keyCode: 'keye' }, { row1: null, row2: 'R', keyCode: 'keyr' }, { row1: null, row2: 'T', keyCode: 'keyt' }, { row1: null, row2: 'Y', keyCode: 'keyy' }, { row1: null, row2: 'U', keyCode: 'keyu' }, { row1: null, row2: 'I', keyCode: 'keyi' }, { row1: null, row2: 'O', keyCode: 'keyo' }, { row1: null, row2: 'P', keyCode: 'keyp' }, { row1: null, row2: '[', keyCode: 'bracketleft' }, { row1: null, row2: ']', keyCode: 'bracketright' }, { row1: '|', row2: '\\',  keyCode: 'backslash' }, { row1: null, row2: 'DEL', keyCode: 'delete' }, { row1: null, row2: 'CAPS LOCK', keyCode: 'capslock' }, { row1: null, row2: 'A', keyCode: 'keya' }, { row1: null, row2: 'S', keyCode: 'keys' }, { row1: null, row2: 'D', keyCode: 'keyd' }, { row1: null, row2: 'F', keyCode: 'keyf' }, { row1: null, row2: 'G', keyCode: 'keyg' }, { row1: null, row2: 'H', keyCode: 'keyh' }, { row1: null, row2: 'J', keyCode: 'keyj' }, { row1: null, row2: 'K', keyCode: 'keyk' }, { row1: null, row2: 'L', keyCode: 'keyl' }, { row1: null, row2: ';', keyCode: 'semicolon' }, { row1: '"', row2: '\'', keyCode: 'quote' }, { row1: null, row2: 'ENTER', keyCode: 'enter' }, { row1: null, row2: 'SHIFT', keyCode: 'shiftleft' }, { row1: null, row2: 'Z', keyCode: 'keyz' }, { row1: null, row2: 'X', keyCode: 'keyx' }, { row1: null, row2: 'C', keyCode: 'keyc' }, { row1: null, row2: 'V', keyCode: 'keyv' }, { row1: null, row2: 'B', keyCode: 'keyb' }, { row1: null, row2: 'N', keyCode: 'keyn' }, { row1: null, row2: 'M', keyCode: 'keym' }, { row1: null, row2: '.', keyCode: 'comma' }, { row1: null, row2: ',', keyCode: 'period' }, { row1: null, row2: '/', keyCode: 'slash' }, { row1: null, row2: '▲', keyCode: 'arrowup' }, { row1: null, row2: 'SHIFT', keyCode: 'shiftright' }, { row1: null, row2: 'CTRL', keyCode: 'controlleft' }, { row1: null, row2: 'WIN', keyCode: 'metaleft' }, { row1: null, row2: 'ALT', keyCode: 'altleft' }, { row1: null, row2: ' ', keyCode: 'space' }, { row1: null, row2: 'ALT', keyCode: 'altright' }, { row1: null, row2: '◄', keyCode: 'arrowleft' }, { row1: null, row2: '▼', keyCode: 'arrowdown' }, { row1: null, row2: '►', keyCode: 'arrowright' }, { row1: null, row2: 'CTRL', keyCode: 'controlright' }, ];

document.body.className = 'page';
const main = document.createElement('main');
main.className = 'page__main-page main-page';
document.body.prepend(main);
/*const header = document.createElement('header');
header.className = 'page__header-page';
document.body.prepend(header);*/
const textAreaBlock = document.createElement('textarea');
textAreaBlock.className = 'main-page__textarea-block textarea-block';
main.append(textAreaBlock);
textAreaBlock.focus();
const keyboardBlock = document.createElement('div');
keyboardBlock.className = 'main-page__keyboard-block keyboard-block';
main.append(keyboardBlock);
const keyboardInnerBlock = document.createElement('div');
keyboardInnerBlock.className = 'keyboard-block__inner-block';
keyboardBlock.append(keyboardInnerBlock);


/*function createKeyboard(arr) {

}*/

function createBtn(a, c, classBlockColor, classTopColor, classBlockSize, classTopSize, capsLock) {
  const btnBlock = document.createElement('div');
  btnBlock.className = 'keyboard-block__btn btn';
  btnBlock.id = c;
  if (classBlockSize) {
    btnBlock.classList.add(classBlockSize);
  }
  if (classBlockColor) {
    btnBlock.classList.add(classBlockColor);
  }
  const btnTopBlock = document.createElement('div');
  btnTopBlock.className = 'btn__top-block';
  if (classTopSize) {
    btnTopBlock.classList.add(classTopSize);
  }
  if (classTopColor) {
    btnTopBlock.classList.add(classTopColor);
  }
  btnBlock.append(btnTopBlock);
  
  btnTopBlock.innerText = a;

  if (capsLock) {
    const capsLockMarker = document.createElement('div');
    capsLockMarker.className = 'btn__marker';
    btnTopBlock.append(capsLockMarker);
  }
  btnBlock.addEventListener('click', function my() {
    const key = btnTopBlock.textContent;
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
      textAreaBlock.value = textAreaBlock.value.slice(0, position) + key.toLowerCase() + textAreaBlock.value.slice(position);
      textAreaBlock.selectionStart = position + 1;
      textAreaBlock.selectionEnd = position + 1;
    }
    textAreaBlock.focus();
  })
  return btnBlock;
}
for (let i = 0; i < keyboard.length; i += 1) {
  if (i === 0 || i === 53 || i === 61 || i === 62 || i === 60) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange'));
  } else if (i === 13 ) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
  } else if (i === 14 || i === 55 || i === 63) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_tab-size', 'btn__top-block_tab-size'));
  } else if (i === 28 || i === 56 || i === 57 || i === 59) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue'));
  } else if (i === 29) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_backspace-size', 'btn__top-block_backspace-size', 'capsLock'));
  } else if (i === 41) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_enter-size', 'btn__top-block_enter-size'));
  } else if (i === 42) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_enter-size', 'btn__top-block_enter-size'));
  } else if (i === 54) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
  } else if (i === 58) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_space-size', 'btn__top-block_space-size'));
  } else {
    keyboardInnerBlock.append(createBtn(keyboard[i].row2, keyboard[i].keyCode));
  }
}

document.addEventListener('keydown', function(event) {
  if(event.code === "Tab") {
    event.preventDefault();
    let position = textAreaBlock.selectionStart;
      textAreaBlock.value = textAreaBlock.value.slice(0, position) + '  ' + textAreaBlock.value.slice(position);
      textAreaBlock.selectionStart = position + 2;
      textAreaBlock.selectionEnd = position + 2;
  } else if(event.code === "MetaLeft") {
    event.preventDefault();
  }
  const arrBtn = document.querySelectorAll('.btn');
  arrBtn.forEach((el) => {
    if(event.code.toLowerCase() === el.id) {
      el.classList.add('btn_active');
    }
  })
});
document.addEventListener('keyup', function(event) {
  const arrBtn = document.querySelectorAll('.btn');
  arrBtn.forEach((el) => {
    if(event.code.toLowerCase() === el.id) {
      el.classList.remove('btn_active');
    }
  })
});