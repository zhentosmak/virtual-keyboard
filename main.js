const keyboardSpec = {
  // Description: Key: [engCharCode, engSCharCode, engCCharCode,
  // rusCharCode, rusSCharCode, rusCCharCode, widthKoeff, altName]
  Backquote: [96, 126, 96, 1105, 1025, 1025, 1, ''],
  Digit1: [49, 33, 49, 49, 33, 49, 1, ''],
  Digit2: [50, 64, 50, 50, 34, 50, 1, ''],
  Digit3: [51, 35, 51, 51, 8470, 51, 1, ''],
  Digit4: [52, 36, 52, 52, 59, 52, 1, ''],
  Digit5: [53, 37, 53, 53, 37, 53, 1, ''],
  Digit6: [54, 94, 54, 54, 58, 54, 1, ''],
  Digit7: [55, 38, 55, 55, 63, 55, 1, ''],
  Digit8: [56, 42, 56, 56, 42, 56, 1, ''],
  Digit9: [57, 40, 57, 57, 40, 57, 1, ''],
  Digit0: [48, 41, 48, 48, 41, 48, 1, ''],
  Minus: [45, 95, 45, 45, 95, 45, 1, ''],
  Equal: [61, 43, 61, 61, 43, 61, 1, ''],
  Backspace: [0, 0, 0, 0, 0, 0, 2, 'Backspace'],
  Tab: [0, 0, 0, 0, 0, 0, 1, 'Tab'],
  KeyQ: [113, 81, 81, 1081, 1049, 1049, 1, ''],
  KeyW: [119, 87, 87, 1094, 1062, 1062, 1, ''],
  KeyE: [101, 69, 69, 1091, 1059, 1059, 1, ''],
  KeyR: [114, 82, 82, 1082, 1050, 1050, 1, ''],
  KeyT: [116, 84, 84, 1077, 1045, 1045, 1, ''],
  KeyY: [121, 89, 89, 1085, 1053, 1053, 1, ''],
  KeyU: [117, 85, 85, 1075, 1043, 1043, 1, ''],
  KeyI: [105, 73, 73, 1096, 1064, 1064, 1, ''],
  KeyO: [111, 79, 79, 1097, 1065, 1065, 1, ''],
  KeyP: [112, 80, 80, 1079, 1047, 1047, 1, ''],
  BracketLeft: [91, 123, 91, 1093, 1061, 1061, 1, ''],
  BracketRight: [93, 125, 93, 1098, 1066, 1066, 1, ''],
  Backslash: [92, 124, 92, 92, 47, 92, 1, ''],
  Delete: [0, 0, 0, 0, 0, 0, 1, 'Del'],
  CapsLock: [0, 0, 0, 0, 0, 0, 2, 'CapsLock'],
  KeyA: [97, 65, 65, 1092, 1060, 1060, 1, ''],
  KeyS: [115, 83, 83, 1099, 1067, 1067, 1, ''],
  KeyD: [100, 68, 68, 1074, 1042, 1042, 1, ''],
  KeyF: [102, 70, 70, 1072, 1040, 1040, 1, ''],
  KeyG: [103, 71, 71, 1087, 1055, 1055, 1, ''],
  KeyH: [104, 72, 72, 1088, 1056, 1056, 1, ''],
  KeyJ: [106, 74, 74, 1086, 1054, 1054, 1, ''],
  KeyK: [107, 75, 75, 1083, 1051, 1051, 1, ''],
  KeyL: [108, 76, 76, 1076, 1044, 1044, 1, ''],
  Semicolon: [59, 58, 59, 1078, 1046, 1046, 1, ''],
  Quote: [39, 34, 39, 1101, 1069, 1069, 1, ''],
  Enter: [0, 0, 0, 0, 0, 0, 2, 'Enter'],
  ShiftLeft: [0, 0, 0, 0, 0, 0, 3, 'Shift'],
  KeyZ: [122, 90, 90, 1103, 1071, 1071, 1, ''],
  KeyX: [120, 88, 88, 1095, 1063, 1063, 1, ''],
  KeyC: [99, 67, 67, 1089, 1057, 1057, 1, ''],
  KeyV: [118, 86, 86, 1084, 1052, 1052, 1, ''],
  KeyB: [98, 66, 66, 1080, 1048, 1048, 1, ''],
  KeyN: [110, 78, 78, 1090, 1058, 1058, 1, ''],
  KeyM: [109, 77, 77, 1100, 1068, 1068, 1, ''],
  Comma: [44, 60, 44, 1073, 1041, 1041, 1, ''],
  Period: [46, 62, 46, 1102, 1070, 1070, 1, ''],
  Slash: [47, 63, 47, 46, 44, 46, 1, ''],
  ArrowUp: [0, 0, 0, 0, 0, 0, 1, '▲'],
  ShiftRight: [0, 0, 0, 0, 0, 0, 1, 'Shift'],
  ControlLeft: [0, 0, 0, 0, 0, 0, 3, 'Ctrl'],
  MetaLeft: [0, 0, 0, 0, 0, 0, 1, 'Win'],
  AltLeft: [0, 0, 0, 0, 0, 0, 1, 'Alt'],
  Space: [32, 32, 32, 32, 32, 32, 5, ''],
  AltRight: [0, 0, 0, 0, 0, 0, 1, 'Alt'],
  ControlRight: [0, 0, 0, 0, 0, 0, 1, 'Ctrl'],
  ArrowLeft: [0, 0, 0, 0, 0, 0, 1, '◄'],
  ArrowDown: [0, 0, 0, 0, 0, 0, 1, '▼'],
  ArrowRight: [0, 0, 0, 0, 0, 0, 1, '►'],
};

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
document.body.append(textarea);
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);
const hint = document.createElement('p');
hint.className = 'hint';
hint.innerHTML = 'For change language press: Alt + Shift';
document.body.append(hint);
const hint2 = document.createElement('p');


let isShift = false;
let isCapsLock = false;
let prevKey = '';
const LANG_ENG = 0;
const LANG_RUS = 3;
let lang = +localStorage.getItem('lang');

class Button {
  constructor(key, lng) {
    const value = keyboardSpec[key];
    const charCode = value[0 + lng];
    const widthKoef = value[6];
    const altName = value[7];
    this.button = document.createElement('button');
    this.button.className = 'button';
    this.button.id = key;
    this.button.innerHTML = altName || String.fromCharCode(charCode);
    this.button.style.height = 'calc((100% - 50px) / 5)';
    this.button.style.width = `calc((100% - 150px) / 15 * ${widthKoef} + (${widthKoef} - 1) * 10px)`;
  }
}

Object.keys(keyboardSpec).forEach((key) => {
  if (Object.prototype.hasOwnProperty.call(keyboardSpec, key)) {
    keyboard.append((new Button(key, lang)).button);
  }
});

const buttons = document.querySelectorAll('.button');

function activeKey(key) {
  if (((key !== 'ShiftLeft') || (key !== 'ShiftRight')) && ((prevKey === 'AltLeft') || (prevKey === 'AltRight'))) {
    document.querySelector(`#${prevKey}`).classList.remove('button--active');
  }
  if (Object.prototype.hasOwnProperty.call(keyboardSpec, key) && key !== 'CapsLock'
    && key !== 'ShiftLeft' && key !== 'ShiftRight' && key !== 'AltLeft' && key !== 'AltRight') {
    const button = document.querySelector(`#${key}`);
    button.classList.toggle('button--active');
    setTimeout(() => {
      button.classList.toggle('button--active');
    }, 100);
    if (keyboardSpec[key][7] === '' || key === 'ArrowUp' || key === 'ArrowDown') {
      textarea.setRangeText(button.innerHTML, textarea.selectionStart, textarea.selectionEnd);
      textarea.selectionStart += 1;
    }
    if (key === 'Backspace') {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
    }
    if (key === 'Tab') {
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd);
      textarea.selectionStart += 1;
    }
    if (key === 'Delete') {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
    }
    if (key === 'Enter') {
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd);
      textarea.selectionStart += 1;
    }
    if (key === 'ArrowLeft') {
      textarea.selectionStart -= 1;
      textarea.selectionEnd = textarea.selectionStart;
    }
    if (key === 'ArrowRight') {
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
    }
    textarea.focus();
  }

  if (Object.prototype.hasOwnProperty.call(keyboardSpec, key) && (key === 'CapsLock'
    || key === 'ShiftLeft' || key === 'ShiftRight' || key === 'AltLeft' || key === 'AltRight')) {
    const button = document.querySelector(`#${key}`);
    button.classList.toggle('button--active');
    if (((key === 'ShiftLeft') || (key === 'ShiftRight')) && ((prevKey === 'AltLeft') || (prevKey === 'AltRight'))) {
      lang = lang ? LANG_ENG : LANG_RUS;
      localStorage.removeItem('lang');
      localStorage.setItem('lang', lang);
      document.querySelector(`#${prevKey}`).classList.remove('button--active');
      setTimeout(() => {
        button.classList.toggle('button--active');
      }, 100);
      isShift = !isShift;
    }
    if (key === 'CapsLock') {
      isCapsLock = !isCapsLock;
    }
    if ((key === 'ShiftLeft') || (key === 'ShiftRight')) {
      isShift = !isShift;
    }

    buttons.forEach((e) => {
      const value = keyboardSpec[e.id];
      let charCode = value[0 + lang];
      if (isCapsLock) {
        charCode = value[2 + lang];
      }
      if (isShift) {
        charCode = value[1 + lang];
      }
      const altName = value[7];
      const btn = e;
      btn.innerHTML = altName || String.fromCharCode(charCode);
    });
  }
  prevKey = key;
}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  activeKey(e.code);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    activeKey(e.target.id);
  }
});