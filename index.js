let resultArr = [];
const keyboardEn = [{ symbol: '`', keyCode: 'backquote' }, { symbol: '1', keyCode: 'digit1' }, { symbol: '2', keyCode: 'digit2' }, { symbol: '3', keyCode: 'digit3' }, { symbol: '4', keyCode: 'digit4' }, { symbol: '5', keyCode: 'digit5' }, { symbol: '6', keyCode: 'digit6' }, { symbol: '7', keyCode: 'digit7' }, { symbol: '8', keyCode: 'digit8' }, { symbol: '9', keyCode: 'digit9' }, { symbol: '0', keyCode: 'digit0' }, {symbol: '-', keyCode: 'minus' }, {symbol: '=', keyCode: 'equal' }, { symbol: 'BACKSPACE', keyCode: 'backspace' }, { symbol: 'TAB', keyCode: 'tab' }, { symbol: 'q', keyCode: 'keyq' }, { symbol: 'w', keyCode: 'keyw' }, { symbol: 'e', keyCode: 'keye' }, { symbol: 'r', keyCode: 'keyr' }, { symbol: 't', keyCode: 'keyt' }, { symbol: 'y', keyCode: 'keyy' }, { symbol: 'u', keyCode: 'keyu' }, { symbol: 'i', keyCode: 'keyi' }, { symbol: 'o', keyCode: 'keyo' }, { symbol: 'p', keyCode: 'keyp' }, { symbol: '[', keyCode: 'bracketleft' }, { symbol: ']', keyCode: 'bracketright' }, { symbol: '\\',  keyCode: 'backslash' }, { symbol: 'DEL', keyCode: 'delete' }, { symbol: 'CAPS LOCK', keyCode: 'capslock' }, { symbol: 'a', keyCode: 'keya' }, { symbol: 's', keyCode: 'keys' }, {  symbol: 'd', keyCode: 'keyd' }, { symbol: 'f', keyCode: 'keyf' }, { symbol: 'g', keyCode: 'keyg' }, { symbol: 'h', keyCode: 'keyh' }, { symbol: 'j', keyCode: 'keyj' }, { symbol: 'k', keyCode: 'keyk' }, { symbol: 'l', keyCode: 'keyl' }, { symbol: ';', keyCode: 'semicolon' }, { symbol: '\'', keyCode: 'quote' }, { symbol: 'ENTER', keyCode: 'enter' }, { symbol: 'SHIFT', keyCode: 'shiftleft' }, { symbol: 'z', keyCode: 'keyz' }, { symbol: 'x', keyCode: 'keyx' }, { symbol: 'c', keyCode: 'keyc' }, { symbol: 'v', keyCode: 'keyv' }, { symbol: 'b', keyCode: 'keyb' }, { symbol: 'n', keyCode: 'keyn' }, { symbol: 'm', keyCode: 'keym' }, { symbol: ',', keyCode: 'comma' }, { symbol: '.', keyCode: 'period' }, { symbol: '/', keyCode: 'slash' }, { symbol: '▲', keyCode: 'arrowup' }, { symbol: 'SHIFT', keyCode: 'shiftright' }, { symbol: 'CTRL', keyCode: 'controlleft' }, { symbol: 'WIN', keyCode: 'metaleft' }, { symbol: 'ALT', keyCode: 'altleft' }, { symbol: ' ', keyCode: 'space' }, { symbol: 'ALT', keyCode: 'altright' }, { symbol: '◄', keyCode: 'arrowleft' }, { symbol: '▼', keyCode: 'arrowdown' }, { symbol: '►', keyCode: 'arrowright' }, { symbol: 'CTRL', keyCode: 'controlright' }, ];

const keyboardRu = [{ symbol: 'ё', keyCode: 'backquote' }, { symbol: '1', keyCode: 'digit1' }, { symbol: '2', keyCode: 'digit2' }, { symbol: '3', keyCode: 'digit3' }, { symbol: '4', keyCode: 'digit4' }, { symbol: '5', keyCode: 'digit5' }, { symbol: '6', keyCode: 'digit6' }, { symbol: '7', keyCode: 'digit7' }, { symbol: '8', keyCode: 'digit8' }, { symbol: '9', keyCode: 'digit9' }, { symbol: '0', keyCode: 'digit0' }, {symbol: '-', keyCode: 'minus' }, {symbol: '=', keyCode: 'equal' }, { symbol: 'BACKSPACE', keyCode: 'backspace' }, { symbol: 'TAB', keyCode: 'tab' }, { symbol: 'й', keyCode: 'keyq' }, { symbol: 'ц', keyCode: 'keyw' }, { symbol: 'у', keyCode: 'keye' }, { symbol: 'к', keyCode: 'keyr' }, { symbol: 'е', keyCode: 'keyt' }, { symbol: 'н', keyCode: 'keyy' }, { symbol: 'г', keyCode: 'keyu' }, { symbol: 'ш', keyCode: 'keyi' }, { symbol: 'щ', keyCode: 'keyo' }, { symbol: 'з', keyCode: 'keyp' }, { symbol: 'х', keyCode: 'bracketleft' }, { symbol: 'ъ', keyCode: 'bracketright' }, { symbol: '\\',  keyCode: 'backslash' }, { symbol: 'DEL', keyCode: 'delete' }, { symbol: 'CAPS LOCK', keyCode: 'capslock' }, { symbol: 'ф', keyCode: 'keya' }, { symbol: 'ы', keyCode: 'keys' }, {  symbol: 'в', keyCode: 'keyd' }, { symbol: 'а', keyCode: 'keyf' }, { symbol: 'п', keyCode: 'keyg' }, { symbol: 'р', keyCode: 'keyh' }, { symbol: 'о', keyCode: 'keyj' }, { symbol: 'л', keyCode: 'keyk' }, { symbol: 'д', keyCode: 'keyl' }, { symbol: 'ж', keyCode: 'semicolon' }, { symbol: 'э', keyCode: 'quote' }, { symbol: 'ENTER', keyCode: 'enter' }, { symbol: 'SHIFT', keyCode: 'shiftleft' }, { symbol: 'я', keyCode: 'keyz' }, { symbol: 'ч', keyCode: 'keyx' }, { symbol: 'с', keyCode: 'keyc' }, { symbol: 'м', keyCode: 'keyv' }, { symbol: 'и', keyCode: 'keyb' }, { symbol: 'т', keyCode: 'keyn' }, { symbol: 'ь', keyCode: 'keym' }, { symbol: 'б', keyCode: 'comma' }, { symbol: 'ю', keyCode: 'period' }, { symbol: '.', keyCode: 'slash' }, { symbol: '▲', keyCode: 'arrowup' }, { symbol: 'SHIFT', keyCode: 'shiftright' }, { symbol: 'CTRL', keyCode: 'controlleft' }, { symbol: 'WIN', keyCode: 'metaleft' }, { symbol: 'ALT', keyCode: 'altleft' }, { symbol: ' ', keyCode: 'space' }, { symbol: 'ALT', keyCode: 'altright' }, { symbol: '◄', keyCode: 'arrowleft' }, { symbol: '▼', keyCode: 'arrowdown' }, { symbol: '►', keyCode: 'arrowright' }, { symbol: 'CTRL', keyCode: 'controlright' }, ];

const keyboardEnShift = [{ symbol: '~', keyCode: 'backquote' }, { symbol: '!', keyCode: 'digit1' }, { symbol: '@', keyCode: 'digit2' }, { symbol: '#', keyCode: 'digit3' }, { symbol: '$', keyCode: 'digit4' }, { symbol: '%', keyCode: 'digit5' }, { symbol: '^', keyCode: 'digit6' }, { symbol: '&', keyCode: 'digit7' }, { symbol: '*', keyCode: 'digit8' }, { symbol: '(', keyCode: 'digit9' }, { symbol: ')', keyCode: 'digit0' }, {symbol: '_', keyCode: 'minus' }, {symbol: '+', keyCode: 'equal' }, { symbol: 'BACKSPACE', keyCode: 'backspace' }, { symbol: 'TAB', keyCode: 'tab' }, { symbol: 'q', keyCode: 'keyq' }, { symbol: 'w', keyCode: 'keyw' }, { symbol: 'e', keyCode: 'keye' }, { symbol: 'r', keyCode: 'keyr' }, { symbol: 't', keyCode: 'keyt' }, { symbol: 'y', keyCode: 'keyy' }, { symbol: 'u', keyCode: 'keyu' }, { symbol: 'i', keyCode: 'keyi' }, { symbol: 'o', keyCode: 'keyo' }, { symbol: 'p', keyCode: 'keyp' }, { symbol: '{', keyCode: 'bracketleft' }, { symbol: '}', keyCode: 'bracketright' }, { symbol: '|',  keyCode: 'backslash' }, { symbol: 'DEL', keyCode: 'delete' }, { symbol: 'CAPS LOCK', keyCode: 'capslock' }, { symbol: 'a', keyCode: 'keya' }, { symbol: 's', keyCode: 'keys' }, {  symbol: 'd', keyCode: 'keyd' }, { symbol: 'f', keyCode: 'keyf' }, { symbol: 'g', keyCode: 'keyg' }, { symbol: 'h', keyCode: 'keyh' }, { symbol: 'j', keyCode: 'keyj' }, { symbol: 'k', keyCode: 'keyk' }, { symbol: 'l', keyCode: 'keyl' }, { symbol: ':', keyCode: 'semicolon' }, { symbol: '"', keyCode: 'quote' }, { symbol: 'ENTER', keyCode: 'enter' }, { symbol: 'SHIFT', keyCode: 'shiftleft' }, { symbol: 'z', keyCode: 'keyz' }, { symbol: 'x', keyCode: 'keyx' }, { symbol: 'c', keyCode: 'keyc' }, { symbol: 'v', keyCode: 'keyv' }, { symbol: 'b', keyCode: 'keyb' }, { symbol: 'n', keyCode: 'keyn' }, { symbol: 'm', keyCode: 'keym' }, { symbol: '<', keyCode: 'comma' }, { symbol: '>', keyCode: 'period' }, { symbol: '?', keyCode: 'slash' }, { symbol: '▲', keyCode: 'arrowup' }, { symbol: 'SHIFT', keyCode: 'shiftright' }, { symbol: 'CTRL', keyCode: 'controlleft' }, { symbol: 'WIN', keyCode: 'metaleft' }, { symbol: 'ALT', keyCode: 'altleft' }, { symbol: ' ', keyCode: 'space' }, { symbol: 'ALT', keyCode: 'altright' }, { symbol: '◄', keyCode: 'arrowleft' }, { symbol: '▼', keyCode: 'arrowdown' }, { symbol: '►', keyCode: 'arrowright' }, { symbol: 'CTRL', keyCode: 'controlright' }, ];

const keyboardRuShift = [{ symbol: 'ё', keyCode: 'backquote' }, { symbol: '!', keyCode: 'digit1' }, { symbol: '"', keyCode: 'digit2' }, { symbol: '№', keyCode: 'digit3' }, { symbol: ';', keyCode: 'digit4' }, { symbol: '%', keyCode: 'digit5' }, { symbol: ':', keyCode: 'digit6' }, { symbol: '?', keyCode: 'digit7' }, { symbol: '*', keyCode: 'digit8' }, { symbol: '(', keyCode: 'digit9' }, { symbol: ')', keyCode: 'digit0' }, {symbol: '_', keyCode: 'minus' }, {symbol: '+', keyCode: 'equal' }, { symbol: 'BACKSPACE', keyCode: 'backspace' }, { symbol: 'TAB', keyCode: 'tab' }, { symbol: 'й', keyCode: 'keyq' }, { symbol: 'ц', keyCode: 'keyw' }, { symbol: 'у', keyCode: 'keye' }, { symbol: 'к', keyCode: 'keyr' }, { symbol: 'е', keyCode: 'keyt' }, { symbol: 'н', keyCode: 'keyy' }, { symbol: 'г', keyCode: 'keyu' }, { symbol: 'ш', keyCode: 'keyi' }, { symbol: 'щ', keyCode: 'keyo' }, { symbol: 'з', keyCode: 'keyp' }, { symbol: 'х', keyCode: 'bracketleft' }, { symbol: 'ъ', keyCode: 'bracketright' }, { symbol: '/',  keyCode: 'backslash' }, { symbol: 'DEL', keyCode: 'delete' }, { symbol: 'CAPS LOCK', keyCode: 'capslock' }, { symbol: 'ф', keyCode: 'keya' }, { symbol: 'ы', keyCode: 'keys' }, {  symbol: 'в', keyCode: 'keyd' }, { symbol: 'а', keyCode: 'keyf' }, { symbol: 'п', keyCode: 'keyg' }, { symbol: 'р', keyCode: 'keyh' }, { symbol: 'о', keyCode: 'keyj' }, { symbol: 'л', keyCode: 'keyk' }, { symbol: 'д', keyCode: 'keyl' }, { symbol: 'ж', keyCode: 'semicolon' }, { symbol: 'э', keyCode: 'quote' }, { symbol: 'ENTER', keyCode: 'enter' }, { symbol: 'SHIFT', keyCode: 'shiftleft' }, { symbol: 'я', keyCode: 'keyz' }, { symbol: 'ч', keyCode: 'keyx' }, { symbol: 'с', keyCode: 'keyc' }, { symbol: 'м', keyCode: 'keyv' }, { symbol: 'и', keyCode: 'keyb' }, { symbol: 'т', keyCode: 'keyn' }, { symbol: 'ь', keyCode: 'keym' }, { symbol: 'б', keyCode: 'comma' }, { symbol: 'ю', keyCode: 'period' }, { symbol: ',', keyCode: 'slash' }, { symbol: '▲', keyCode: 'arrowup' }, { symbol: 'SHIFT', keyCode: 'shiftright' }, { symbol: 'CTRL', keyCode: 'controlleft' }, { symbol: 'WIN', keyCode: 'metaleft' }, { symbol: 'ALT', keyCode: 'altleft' }, { symbol: ' ', keyCode: 'space' }, { symbol: 'ALT', keyCode: 'altright' }, { symbol: '◄', keyCode: 'arrowleft' }, { symbol: '▼', keyCode: 'arrowdown' }, { symbol: '►', keyCode: 'arrowright' }, { symbol: 'CTRL', keyCode: 'controlright' }, ];

const textAreaBlock = document.createElement('textarea');
const btnClickSound = new Audio();
btnClickSound.src = './source/2.mp3';
btnClickSound.volume = 0.05;

function createKeyboard(arr) {
  document.body.className = 'page';
  const main = document.createElement('main');
  main.className = 'page__main-page main-page';
  document.body.prepend(main);
  if(!localStorage.lang) {
    localStorage.setItem('lang', 'en');
  }
  textAreaBlock.className = 'main-page__textarea-block textarea-block';
  main.append(textAreaBlock);
  textAreaBlock.focus();
  const keyboardBlock = document.createElement('div');
  keyboardBlock.className = 'main-page__keyboard-block keyboard-block';
  main.append(keyboardBlock);
  const keyboardInfo = document.createElement('p');
  keyboardInfo.className = 'main-page__text';
  keyboardInfo.innerText = 'Клавиатура создана в операционной системе Windows';
  main.append(keyboardInfo);
  const keyboardLangInfo = document.createElement('p');
  keyboardLangInfo.className = 'main-page__text';
  keyboardLangInfo.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
  main.append(keyboardLangInfo);
  const keyboardInnerBlock = document.createElement('div');
  keyboardInnerBlock.className = 'keyboard-block__inner-block';
  keyboardBlock.append(keyboardInnerBlock);
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0 || i === 53 || i === 61 || i === 62 || i === 60) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_orange', 'btn__top-block_orange'));
    } else if (i === 13 ) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
    } else if (i === 14 || i === 55 || i === 63) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_tab-size', 'btn__top-block_tab-size'));
    } else if (i === 28 || i === 56 || i === 57 || i === 59) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_blue', 'btn__top-block_blue'));
    } else if (i === 29) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_backspace-size', 'btn__top-block_backspace-size', 'capsLock'));
    } else if (i === 41) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_enter-size', 'btn__top-block_enter-size'));
    } else if (i === 42) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_enter-size', 'btn__top-block_enter-size'));
    } else if (i === 54) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
    } else if (i === 58) {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode, 'btn_orange', 'btn__top-block_orange', 'btn_space-size', 'btn__top-block_space-size'));
    } else {
      keyboardInnerBlock.append(createBtn(arr[i].symbol, arr[i].keyCode));
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
  btnBlock.addEventListener('click', () => btnClickSound.play());
  return btnBlock;
}

function btnBlockHandler(event) {
  changeTextareaValue(event.target.textContent);
}

function changeTextareaValue(key) {
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

document.addEventListener('keydown', changeKeydown);
function changeKeydown (event) {
  event.preventDefault();
  
  const arrBtn = document.querySelectorAll('.btn');

  arrBtn.forEach((el) => {
    if(event.code.toLowerCase() === el.id) {
      el.classList.add('btn_active');

      changeTextareaValue(el.innerText);
    }
  })
}

document.addEventListener('keyup', changeKeyUp);
function changeKeyUp (event) {
  const arrBtn = document.querySelectorAll('.btn');
  arrBtn.forEach((el) => {
    if(event.code.toLowerCase() === el.id) {
      el.classList.remove('btn_active');
    }
  })
}
createResultArr();
createKeyboard(resultArr);
const capsLock = document.querySelector('#capslock');
capsLock.addEventListener('click', handlerCapsLock);
let capsLockNum = false;

function createResultArr() {
  localStorage.lang === 'en'? resultArr = keyboardEn : resultArr = keyboardRu;
}

function handlerCapsLock() {
  const btnMarker = document.querySelector('.btn__marker');
  btnMarker.classList.toggle('btn__marker_active');
  createResultArr();
  if(!capsLockNum) {  
  resultArr.forEach(el => {
    let symbolProperty = el.symbol;
    el.symbol = symbolProperty.toUpperCase();
  });
  renameBtns(resultArr);
  capsLockNum = true;
  } else {
    resultArr.forEach(el => {
      let symbolProperty = el.symbol;
      if (el.symbol.length === 1) {
        el.symbol = symbolProperty.toLowerCase();
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
      el.innerText = arr[i].symbol;
    }
  })

}

function changeLanguage() {

  if (localStorage.getItem('lang') === 'en') {
    resultArr = keyboardRu;
    renameBtns(resultArr);
    localStorage.lang = 'ru';
  } else {
    resultArr = keyboardEn;
    renameBtns(resultArr);
    localStorage.lang = 'en';
  }

}

function handlerShift(code) {

  document.addEventListener('keydown', function(event) {
    
    if (event.code !== code) {
        return;
    }
    resultArr = keyboardEnShift;
    resultArr.forEach(el => {
    let symbolProperty = el.symbol;
    if (el.symbol.length === 1) {
      el.symbol = symbolProperty.toUpperCase();
    }
  });
    renameBtns(resultArr);
  });

  document.addEventListener('keyup', function(event) {
    if (event.code !== code) {
      return;
  }
    resultArr = keyboardEn;
    resultArr.forEach(el => {
    let symbolProperty = el.symbol;
    if (el.symbol.length === 1) {
      el.symbol = symbolProperty.toLowerCase();
    }
  });
  renameBtns(resultArr);
  });

}

runCtrlShift(changeLanguage, 'ControlLeft', 'AltLeft');
runCtrlShift(handlerCapsLock, 'CapsLock');
handlerShift('ShiftLeft');
handlerShift('ShiftRight');
const shiftleft = document.querySelector('#shiftleft');
const shiftright = document.querySelector('#shiftright');
shiftleft.addEventListener('mousedown', handlerShiftBtn1);
shiftleft.addEventListener('mouseup', handlerShiftBtn2);
shiftright.addEventListener('mousedown', handlerShiftBtn1);
shiftright.addEventListener('mouseup', handlerShiftBtn2);

function handlerShiftBtn1() { 

  if(localStorage.lang === 'en') {
    resultArr = keyboardEnShift;
  } else if (localStorage.lang === 'ru') {
    resultArr = keyboardRuShift;
  }
  resultArr.forEach(el => {
    let symbolProperty = el.symbol;
    if (el.symbol.length === 1 && capsLockNum === false) {
      el.symbol = symbolProperty.toUpperCase();
    } else if(el.symbol.length === 1 && capsLockNum === true) {
      el.symbol = symbolProperty.toLowerCase();
    }
  });
  renameBtns(resultArr);
}
function handlerShiftBtn2() { 

  if(localStorage.lang === 'en') {
    resultArr = keyboardEn;
  } else {
    resultArr = keyboardRu;
  }
  resultArr.forEach(el => {
    let symbolProperty = el.symbol;
    if (el.symbol.length === 1 && capsLockNum === false) {
      el.symbol = symbolProperty.toLowerCase();
    } else if(el.symbol.length === 1 && capsLockNum === true) {
      el.symbol = symbolProperty.toUpperCase();
    }
  });
  renameBtns(resultArr);
}