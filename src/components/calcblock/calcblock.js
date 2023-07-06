import './calcblock.scss';

const fieldPower = document.querySelector('.calcblock__power');
const fieldDays = document.querySelector('.calcblock__days');

const throwValidateError = (element, text) => {
  const error = `<div class="error">${text}</div>`;
  element.insertAdjacentHTML('beforebegin', error);
};

const syncInputs = (field) => {
  const powerInput = field.querySelector('input[type=number]');
  const powerRange = field.querySelector('input[type=range]');

  powerInput.value = powerRange.value;

  powerRange.addEventListener('input', (evt) => {
    powerInput.value = evt.target.value;
  });

  powerInput.addEventListener('input', (evt) => {
    // if (evt.target.value > powerInput.max) {
    //   throwValidateError(powerRange, 'Error!!!');
    // }
    powerRange.value = evt.target.value;
  });
};

syncInputs(fieldPower);
syncInputs(fieldDays);
