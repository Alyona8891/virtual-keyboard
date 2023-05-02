import { btnBlockHandler } from './button-block-handler.js';

const btnClickSound = new Audio();
btnClickSound.src = './source/2.mp3';
btnClickSound.volume = 0.05;

export function createBtn(
  a,
  c,
  classBlockColor,
  classTopColor,
  classBlockSize,
  classTopSize,
  capsLock,
) {
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
