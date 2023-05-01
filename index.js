let resultArr = [];
const keyboard = [{ row2: '`', keyCode: 'backquote' }, { row2: '1', keyCode: 'digit1' }, { row2: '2', keyCode: 'digit2' }, { row2: '3', keyCode: 'digit3' }, { row2: '4', keyCode: 'digit4' }, { row2: '5', keyCode: 'digit5' }, { row2: '6', keyCode: 'digit6' }, { row2: '7', keyCode: 'digit7' }, { row2: '8', keyCode: 'digit8' }, { row2: '9', keyCode: 'digit9' }, { row2: '0', keyCode: 'digit0' }, {row2: '-', keyCode: 'minus' }, {row2: '=', keyCode: 'equal' }, { row2: 'BACKSPACE', keyCode: 'backspace' }, { row2: 'TAB', keyCode: 'tab' }, { row2: 'q', keyCode: 'keyq' }, { row2: 'w', keyCode: 'keyw' }, { row2: 'e', keyCode: 'keye' }, { row2: 'r', keyCode: 'keyr' }, { row2: 't', keyCode: 'keyt' }, { row2: 'y', keyCode: 'keyy' }, { row2: 'u', keyCode: 'keyu' }, { row2: 'i', keyCode: 'keyi' }, { row2: 'o', keyCode: 'keyo' }, { row2: 'p', keyCode: 'keyp' }, { row2: '[', keyCode: 'bracketleft' }, { row2: ']', keyCode: 'bracketright' }, { row2: '\\',  keyCode: 'backslash' }, { row2: 'DEL', keyCode: 'delete' }, { row2: 'CAPS LOCK', keyCode: 'capslock' }, { row2: 'a', keyCode: 'keya' }, { row2: 's', keyCode: 'keys' }, {  row2: 'd', keyCode: 'keyd' }, { row2: 'f', keyCode: 'keyf' }, { row2: 'g', keyCode: 'keyg' }, { row2: 'h', keyCode: 'keyh' }, { row2: 'j', keyCode: 'keyj' }, { row2: 'k', keyCode: 'keyk' }, { row2: 'l', keyCode: 'keyl' }, { row2: ';', keyCode: 'semicolon' }, { row2: '\'', keyCode: 'quote' }, { row2: 'ENTER', keyCode: 'enter' }, { row2: 'SHIFT', keyCode: 'shiftleft' }, { row2: 'z', keyCode: 'keyz' }, { row2: 'x', keyCode: 'keyx' }, { row2: 'c', keyCode: 'keyc' }, { row2: 'v', keyCode: 'keyv' }, { row2: 'b', keyCode: 'keyb' }, { row2: 'n', keyCode: 'keyn' }, { row2: 'm', keyCode: 'keym' }, { row2: ',', keyCode: 'comma' }, { row2: '.', keyCode: 'period' }, { row2: '/', keyCode: 'slash' }, { row2: '▲', keyCode: 'arrowup' }, { row2: 'SHIFT', keyCode: 'shiftright' }, { row2: 'CTRL', keyCode: 'controlleft' }, { row2: 'WIN', keyCode: 'metaleft' }, { row2: 'ALT', keyCode: 'altleft' }, { row2: ' ', keyCode: 'space' }, { row2: 'ALT', keyCode: 'altright' }, { row2: '◄', keyCode: 'arrowleft' }, { row2: '▼', keyCode: 'arrowdown' }, { row2: '►', keyCode: 'arrowright' }, { row2: 'CTRL', keyCode: 'controlright' }, ];

const keyboardRu = [{ row2: 'ё', keyCode: 'backquote' }, { row2: '1', keyCode: 'digit1' }, { row2: '2', keyCode: 'digit2' }, { row2: '3', keyCode: 'digit3' }, { row2: '4', keyCode: 'digit4' }, { row2: '5', keyCode: 'digit5' }, { row2: '6', keyCode: 'digit6' }, { row2: '7', keyCode: 'digit7' }, { row2: '8', keyCode: 'digit8' }, { row2: '9', keyCode: 'digit9' }, { row2: '0', keyCode: 'digit0' }, {row2: '-', keyCode: 'minus' }, {row2: '=', keyCode: 'equal' }, { row2: 'BACKSPACE', keyCode: 'backspace' }, { row2: 'TAB', keyCode: 'tab' }, { row2: 'й', keyCode: 'keyq' }, { row2: 'ц', keyCode: 'keyw' }, { row2: 'у', keyCode: 'keye' }, { row2: 'k', keyCode: 'keyr' }, { row2: 'е', keyCode: 'keyt' }, { row2: 'н', keyCode: 'keyy' }, { row2: 'г', keyCode: 'keyu' }, { row2: 'ш', keyCode: 'keyi' }, { row2: 'щ', keyCode: 'keyo' }, { row2: 'з', keyCode: 'keyp' }, { row2: 'х', keyCode: 'bracketleft' }, { row2: 'ъ', keyCode: 'bracketright' }, { row2: '\\',  keyCode: 'backslash' }, { row2: 'DEL', keyCode: 'delete' }, { row2: 'CAPS LOCK', keyCode: 'capslock' }, { row2: 'ф', keyCode: 'keya' }, { row2: 'ы', keyCode: 'keys' }, {  row2: 'в', keyCode: 'keyd' }, { row2: 'а', keyCode: 'keyf' }, { row2: 'п', keyCode: 'keyg' }, { row2: 'р', keyCode: 'keyh' }, { row2: 'о', keyCode: 'keyj' }, { row2: 'л', keyCode: 'keyk' }, { row2: 'д', keyCode: 'keyl' }, { row2: 'ж', keyCode: 'semicolon' }, { row2: '\'', keyCode: 'quote' }, { row2: 'ENTER', keyCode: 'enter' }, { row2: 'SHIFT', keyCode: 'shiftleft' }, { row2: 'я', keyCode: 'keyz' }, { row2: 'ч', keyCode: 'keyx' }, { row2: 'с', keyCode: 'keyc' }, { row2: 'м', keyCode: 'keyv' }, { row2: 'и', keyCode: 'keyb' }, { row2: 'т', keyCode: 'keyn' }, { row2: 'ь', keyCode: 'keym' }, { row2: 'б', keyCode: 'comma' }, { row2: 'ю', keyCode: 'period' }, { row2: '/', keyCode: 'slash' }, { row2: '▲', keyCode: 'arrowup' }, { row2: 'SHIFT', keyCode: 'shiftright' }, { row2: 'CTRL', keyCode: 'controlleft' }, { row2: 'WIN', keyCode: 'metaleft' }, { row2: 'ALT', keyCode: 'altleft' }, { row2: ' ', keyCode: 'space' }, { row2: 'ALT', keyCode: 'altright' }, { row2: '◄', keyCode: 'arrowleft' }, { row2: '▼', keyCode: 'arrowdown' }, { row2: '►', keyCode: 'arrowright' }, { row2: 'CTRL', keyCode: 'controlright' }, ];
resultArr = keyboardRu;

const keyboard2 = [{ row1: '~', row2: '`', keyCode: 'backquote' }, { row1: '!', row2: '1', keyCode: 'digit1' }, { row1: '@', row2: '2', keyCode: 'digit2' }, { row1: '#', row2: '3', keyCode: 'digit3' }, { row1: '$', row2: '4', keyCode: 'digit4' }, { row1: '%', row2: '5', keyCode: 'digit5' }, { row1: '^', row2: '6', keyCode: 'digit6' }, { row1: '&', row2: '7', keyCode: 'digit7' }, { row1: '*', row2: '8', keyCode: 'digit8' }, { row1: '(', row2: '9', keyCode: 'digit9' }, { row1: ')', row2: '0', keyCode: 'digit0' }, { row1: '_', row2: '-', keyCode: 'minus' }, { row1: '+', row2: '=', keyCode: 'equal' }, { row1: null, row2: 'BACKSPACE', keyCode: 'backspace' }, { row1: null, row2: 'TAB', keyCode: 'tab' }, { row1: null, row2: 'Q', keyCode: 'keyq' }, { row1: null, row2: 'W', keyCode: 'keyw' }, { row1: null, row2: 'E', keyCode: 'keye' }, { row1: null, row2: 'R', keyCode: 'keyr' }, { row1: null, row2: 'T', keyCode: 'keyt' }, { row1: null, row2: 'Y', keyCode: 'keyy' }, { row1: null, row2: 'U', keyCode: 'keyu' }, { row1: null, row2: 'I', keyCode: 'keyi' }, { row1: null, row2: 'O', keyCode: 'keyo' }, { row1: null, row2: 'P', keyCode: 'keyp' }, { row1: null, row2: '[', keyCode: 'bracketleft' }, { row1: null, row2: ']', keyCode: 'bracketright' }, { row1: '|', row2: '\\',  keyCode: 'backslash' }, { row1: null, row2: 'DEL', keyCode: 'delete' }, { row1: null, row2: 'CAPS LOCK', keyCode: 'capslock' }, { row1: null, row2: 'A', keyCode: 'keya' }, { row1: null, row2: 'S', keyCode: 'keys' }, { row1: null, row2: 'D', keyCode: 'keyd' }, { row1: null, row2: 'F', keyCode: 'keyf' }, { row1: null, row2: 'G', keyCode: 'keyg' }, { row1: null, row2: 'H', keyCode: 'keyh' }, { row1: null, row2: 'J', keyCode: 'keyj' }, { row1: null, row2: 'K', keyCode: 'keyk' }, { row1: null, row2: 'L', keyCode: 'keyl' }, { row1: null, row2: ';', keyCode: 'semicolon' }, { row1: '"', row2: '\'', keyCode: 'quote' }, { row1: null, row2: 'ENTER', keyCode: 'enter' }, { row1: null, row2: 'SHIFT', keyCode: 'shiftleft' }, { row1: null, row2: 'Z', keyCode: 'keyz' }, { row1: null, row2: 'X', keyCode: 'keyx' }, { row1: null, row2: 'C', keyCode: 'keyc' }, { row1: null, row2: 'V', keyCode: 'keyv' }, { row1: null, row2: 'B', keyCode: 'keyb' }, { row1: null, row2: 'N', keyCode: 'keyn' }, { row1: null, row2: 'M', keyCode: 'keym' }, { row1: null, row2: '.', keyCode: 'comma' }, { row1: null, row2: ',', keyCode: 'period' }, { row1: null, row2: '/', keyCode: 'slash' }, { row1: null, row2: '▲', keyCode: 'arrowup' }, { row1: null, row2: 'SHIFT', keyCode: 'shiftright' }, { row1: null, row2: 'CTRL', keyCode: 'controlleft' }, { row1: null, row2: 'WIN', keyCode: 'metaleft' }, { row1: null, row2: 'ALT', keyCode: 'altleft' }, { row1: null, row2: ' ', keyCode: 'space' }, { row1: null, row2: 'ALT', keyCode: 'altright' }, { row1: null, row2: '◄', keyCode: 'arrowleft' }, { row1: null, row2: '▼', keyCode: 'arrowdown' }, { row1: null, row2: '►', keyCode: 'arrowright' }, { row1: null, row2: 'CTRL', keyCode: 'controlright' }, ];


const textAreaBlock = document.createElement('textarea');

function createKeyboard(arr) {
  document.body.className = 'page';
  const main = document.createElement('main');
  main.className = 'page__main-page main-page';
  document.body.prepend(main);
  localStorage.setItem('lang', 'en');
  textAreaBlock.className = 'main-page__textarea-block textarea-block';
  main.append(textAreaBlock);
  textAreaBlock.focus();
  const keyboardBlock = document.createElement('div');
  keyboardBlock.className = 'main-page__keyboard-block keyboard-block';
  main.append(keyboardBlock);
  const keyboardInnerBlock = document.createElement('div');
  keyboardInnerBlock.className = 'keyboard-block__inner-block';
  keyboardBlock.append(keyboardInnerBlock);
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 0 || i === 53 || i === 61 || i === 62 || i === 60) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange'));
    } else if (i === 13 ) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
    } else if (i === 14 || i === 55 || i === 63) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_tab-size', 'btn__top-block_tab-size'));
    } else if (i === 28 || i === 56 || i === 57 || i === 59) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue'));
    } else if (i === 29) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_backspace-size', 'btn__top-block_backspace-size', 'capsLock'));
    } else if (i === 41) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_enter-size', 'btn__top-block_enter-size'));
    } else if (i === 42) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_enter-size', 'btn__top-block_enter-size'));
    } else if (i === 54) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
    } else if (i === 58) {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_space-size', 'btn__top-block_space-size'));
    } else {
      keyboardInnerBlock.append(createBtn(arr[i].row2, keyboard[i].keyCode));
    }
  }
}

function createBtn(a, c, classBlockColor, classTopColor, classBlockSize, classTopSize, capsLock) {

  const btnBlock = document.createElement('div');
  btnBlock.className = 'keyboard-block__btn btn';
  const btnTopBlock = document.createElement('div');
  btnTopBlock.className = 'btn__top-block';

  btnBlock.id = c;

  if (classBlockSize) {
    btnBlock.classList.add(classBlockSize);
  }
  if (classBlockColor) {
    btnBlock.classList.add(classBlockColor);
  }
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

  btnBlock.addEventListener('click', btnBlockHandler);
  return btnBlock;
}

function btnBlockHandler(event) {

  const key = event.target.textContent;
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

resultArr = keyboard;
createKeyboard(resultArr);
const capsLock = document.querySelector('#capslock');
capsLock.addEventListener('click', handlerCapsLock);
let capsLockNum = false;

function handlerCapsLock() {
  const btnMarker = document.querySelector('.btn__marker');
  btnMarker.classList.toggle('btn__marker_active');
  if(!capsLockNum) {  
  resultArr.forEach(el => {
    let row2Property = el.row2;
    el.row2 = row2Property.toUpperCase();
  });
  renameBtns(resultArr);
  capsLockNum = true;
  } else {
    resultArr.forEach(el => {
      let row2Property = el.row2;
      if (el.row2.length === 1) {
        el.row2 = row2Property.toLowerCase();
      }
    });
    renameBtns(resultArr)
    capsLockNum = false;
  }
}

function runCtrlShift(func, ...codes) {

  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

function renameBtns(arr) {
  let arrElems = document.querySelectorAll('.btn__top-block');

  arrElems.forEach((el, i) => {
    let elemCapsLock = document.querySelector('#capslock')
    if(el.parentNode !== elemCapsLock) {
      el.innerText = arr[i].row2;
    }
  })

}

function changeLanguage() {

  if (localStorage.getItem('lang') === 'en') {
    resultArr = keyboardRu;
    renameBtns(resultArr);
    localStorage.lang = 'ru';
  } else {
    resultArr = keyboard;
    renameBtns(resultArr);
    localStorage.lang = 'en';
  }

}

runCtrlShift(changeLanguage, 'ShiftLeft', 'ControlLeft');