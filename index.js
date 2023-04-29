const keyboard = [{ row1: '~', row2: '`' }, { row1: '!', row2: '1' }, { row1: '@', row2: '2' }, { row1: '#', row2: '3' }, { row1: '$', row2: '4' }, { row1: '%', row2: '5' }, { row1: '^', row2: '6' }, { row1: '&', row2: '7' }, { row1: '*', row2: '8' }, { row1: '(', row2: '9' }, { row1: ')', row2: '0' }, { row1: '_', row2: '-' }, { row1: '+', row2: '=' }, { row1: null, row2: 'BACKSPACE' }, { row1: null, row2: 'TAB' }, { row1: null, row2: 'Q' }, { row1: null, row2: 'W' }, { row1: null, row2: 'E' }, { row1: null, row2: 'R' }, { row1: null, row2: 'T' }, { row1: null, row2: 'Y' }, { row1: null, row2: 'U' }, { row1: null, row2: 'I' }, { row1: null, row2: 'O' }, { row1: null, row2: 'P' }, { row1: null, row2: '[' }, { row1: null, row2: ']' }, { row1: '|', row2: '\\' }, { row1: null, row2: 'DEL' }, { row1: null, row2: 'CAPS LOCK' }, { row1: null, row2: 'A' }, { row1: null, row2: 'S' }, { row1: null, row2: 'D' }, { row1: null, row2: 'F' }, { row1: null, row2: 'G' }, { row1: null, row2: 'H' }, { row1: null, row2: 'J' }, { row1: null, row2: 'K' }, { row1: null, row2: 'L' }, { row1: null, row2: ';' }, { row1: '"', row2: '\'' }, { row1: null, row2: 'ENTER' }, { row1: null, row2: 'SHIFT' }, { row1: null, row2: '\\' }, { row1: null, row2: 'Z' }, { row1: null, row2: 'X' }, { row1: null, row2: 'C' }, { row1: null, row2: 'V' }, { row1: null, row2: 'B' }, { row1: null, row2: 'N' }, { row1: null, row2: 'M' }, { row1: null, row2: '.' }, { row1: null, row2: ',' }, { row1: null, row2: '/' }, { row1: null, row2: '▲' }, { row1: null, row2: 'SHIFT' }, { row1: null, row2: 'CTRL' }, { row1: null, row2: 'WIN' }, { row1: null, row2: 'ALT' }, { row1: null, row2: null }, { row1: null, row2: 'ALT' }, { row1: null, row2: 'CTRL' }, { row1: null, row2: '◀' }, { row1: null, row2: '▼' }, { row1: null, row2: '▶' }];

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
const keyboardBlock = document.createElement('div');
keyboardBlock.className = 'main-page__keyboard-block keyboard-block';
main.append(keyboardBlock);
const keyboardInnerBlock = document.createElement('div');
keyboardInnerBlock.className = 'keyboard-block__inner-block';
keyboardBlock.append(keyboardInnerBlock);


/*function createKeyboard(arr) {

}*/

function createBtn(a, b, classBlockColor, classTopColor, classBlockSize, classTopSize) {
  const btnBlock = document.createElement('div');
  btnBlock.className = `keyboard-block__btn btn ${classBlockSize} ${classBlockColor}`;
  const btnTopBlock = document.createElement('div');
  btnTopBlock.className = `btn__top-block ${classTopSize} ${classTopColor}`;
  btnBlock.append(btnTopBlock);
  const btnBlockRow1 = document.createElement('div');
  btnBlockRow1.className = 'btn__row1';
  const btnBlockRow2 = document.createElement('div');
  btnBlockRow2.className = 'btn__row2';
  if (a === null) {
    btnBlockRow2.classList.add('btn__row1_one-row');
  }
  btnBlockRow1.innerText = a;
  btnBlockRow2.innerText = b;
  btnTopBlock.append(btnBlockRow1);
  btnTopBlock.append(btnBlockRow2);
  return btnBlock;
}
for (let i = 0; i < keyboard.length; i += 1) {
  if (i === 0 || i === 54 || i === 62 || i === 63 || i === 64) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_orange', 'btn__top-block_orange'));
  } else if (i === 13 || i === 42) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_blue', 'btn__top-block_blue', 'btn_backspace-size', 'btn__top-block_backspace-size'));
  } else if (i === 14 || i === 56 || i === 61) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_blue', 'btn__top-block_blue', 'btn_tab-size', 'btn__top-block_tab-size'));
  } else if (i === 28 || i === 55 || i === 57 || i === 58 || i === 60) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_blue', 'btn__top-block_blue'));
  } else if (i === 29) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_orange', 'btn__top-block_orange', 'btn_backspace-size', 'btn__top-block_backspace-size'));
  } else if (i === 41) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_orange', 'btn__top-block_orange', 'btn_enter-size', 'btn__top-block_enter-size'));
  } else if (i === 59) {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2, 'btn_orange', 'btn__top-block_orange', 'btn_space-size', 'btn__top-block_space-size'));
  } else {
    keyboardInnerBlock.append(createBtn(keyboard[i].row1, keyboard[i].row2));
  }
}