const language = new Language();
const translationService = new TranslationService(language);
const textarea = new Textarea();
const keyboard = new Keyboard(language, translationService, textarea);

textarea.textarea.addEventListener('click', () => {
  textarea.cursorPosition = textarea.textarea.selectionStart;
});

document.addEventListener('keydown', (e) => {
  keyboard.pressKey(e);
});
document.addEventListener('keyup', (e) => {
  keyboard.releaseKey(e);
});

keyboard.shifts.forEach((shift) => shift.addEventListener('mousedown', () => {
  keyboard.shiftSymbols();
  keyboard.shiftLetters();
}));

keyboard.shifts.forEach((shift) => shift.addEventListener('mouseup', (e) => {
  const key = e.target;
  keyboard.determineUpKey(key);
}));

keyboard.keyboard.addEventListener('click', (e) => {
  keyboard.identifyKey(e);
});

keyboard.updateTranslation();