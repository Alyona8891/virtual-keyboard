import {keyboardEn, keyboardRu, keyboardEnShift, keyboardRuShift} from './components/layots.js';
import {createBtn} from './components/button.js';
import {changeTextareaValue, textAreaBlock} from './components/change-textarea-value.js';

let resultArr = [];

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
    let arrElems = document.querySelectorAll('.btn__top-block');
    arrElems.forEach((el, i) => {
    
    let elemCapsLock = document.querySelector('#capslock')
      if(el.parentNode !== elemCapsLock) {
        if(el.innerText.length === 1 && capsLockNum) {
          el.innerText = resultArr[i].symbol.toUpperCase();
        } else if (el.innerText.length === 1 && !capsLockNum) {
          el.innerText = resultArr[i].symbol.toLowerCase();
        }
      }
    })
    localStorage.lang = 'ru';
  } else {
    resultArr = keyboardEn;
    let arrElems = document.querySelectorAll('.btn__top-block');
    arrElems.forEach((el, i) => {
    let elemCapsLock = document.querySelector('#capslock')
      if(el.parentNode !== elemCapsLock) {
        if(el.innerText.length === 1 && capsLockNum) {
          el.innerText = resultArr[i].symbol.toUpperCase();
        } else if (el.innerText.length === 1 && !capsLockNum) {
          el.innerText = resultArr[i].symbol.toLowerCase();
        }
      }
    })
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