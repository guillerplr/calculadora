localStorage.clear();

const calculadora = document.querySelector('.calculadora');
const display = document.querySelector('.display');
const teclas = document.querySelectorAll('.tecla');

let decimal = false;
let final = false;
let atual = [];

// (operator === '+' || operator === '-' || operator === 'x' || operator === '÷')

function toStorage(value, operator) {
  if (value === '') {
    atual.pop();
    atual.push(operator);
    localStorage.setItem('values', JSON.stringify(atual));
    calculadora.setAttribute('data-content', atual.join(' '));
  }
  value = +value;
  if (value != '' && !final) {
    atual = JSON.parse(localStorage.getItem('values'));
    if (!atual) {
      atual = [];
    }
    atual.push(value);
    atual.push(operator);
    localStorage.setItem('values', JSON.stringify(atual));
    if (atual.length > 3) {
      atual.pop();
      calculadora.setAttribute('data-content', atual.join(' ') + ' =');
      finaliza();
    } else {
      display.value = '';
      calculadora.setAttribute('data-content', atual.join(' '));
    }
  } else if (value != '' && final) {
    localStorage.clear();
    atual = [];
    atual.push(value);
    atual.push(operator);
    localStorage.setItem('values', JSON.stringify(atual));
    calculadora.setAttribute('data-content', atual.join(' '));
    display.value = '';
    final = false;
  }
}

function finaliza() {
  switch (atual[1]) {
    case '+':
      display.value =
        Math.round((Number(atual[0]) + Number(atual[2])) * 100) / 100;
      break;
    case '-':
      display.value =
        Math.round((Number(atual[0]) - Number(atual[2])) * 100) / 100;
      break;
    case 'x':
      display.value =
        Math.round(Number(atual[0]) * Number(atual[2]) * 100) / 100;
      break;
    case '÷':
      display.value =
        Math.round((Number(atual[0]) / Number(atual[2])) * 100) / 100;
      break;
    default:
      display.value('Erro ao finalizar');
      break;
  }

  final = true;
}

function animateClick(target) {
  target.classList.add('animate');
  setTimeout(() => {
    target.classList.remove('animate');
  }, [100]);
}

function handleClick({ target }) {
  animateClick(target);

  switch (target.innerHTML) {
    case '.':
      if (!decimal) {
        if (display.value.length === 0) {
          display.value += '0' + target.innerHTML;
          decimal = true;
        } else {
          display.value += target.innerHTML;
          decimal = true;
        }
      }
      break;
    case 'C':
      display.value = '';
      calculadora.setAttribute('data-content', '');
      localStorage.clear();
      decimal = false;
      break;
    case 'CE':
      if (!final) {
        display.value = '';
        decimal = false;
      }
      break;
    case '+':
      toStorage(display.value, '+');
      decimal = false;
      break;
    case '-':
      toStorage(display.value, '-');
      decimal = false;
      break;
    case '÷':
      toStorage(display.value, '÷');
      decimal = false;
      break;
    case 'x':
      toStorage(display.value, 'x');
      decimal = false;
      break;
    case '%':
      break;
    case '=':
      if (!final) {
        if (localStorage.getItem('values')) {
          toStorage(display.value, '=');
        }
      }
      break;
    default:
      if (!final) {
        if (display.value.length < 9) display.value += target.innerHTML;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = target.innerHTML;
        final = false;
      }
      break;
  }
}

function handleKey(event) {
  switch (event.keyCode) {
    case '.':
      if (!decimal) {
        if (display.value.length === 0) {
          display.value += '0' + target.innerHTML;
          decimal = true;
        } else {
          display.value += target.innerHTML;
          decimal = true;
        }
      }
      break;

    case 107:
      toStorage(display.value, '+');
      decimal = false;
      break;
    case 109:
      toStorage(display.value, '-');
      decimal = false;
      break;
    case 111:
      toStorage(display.value, '÷');
      decimal = false;
      break;
    case 106:
      toStorage(display.value, 'x');
      decimal = false;
      break;
    case '%':
      break;
    case 13:
      if (!final) {
        if (localStorage.getItem('values')) {
          toStorage(display.value, '=');
        }
      }
      break;

    case 96:
      if (!final) {
        if (display.value.length < 9) display.value += 0;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 0;
        final = false;
      }
      break;
    case 97:
      if (!final) {
        if (display.value.length < 9) display.value += 1;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 1;
        final = false;
      }
      break;
    case 98:
      if (!final) {
        if (display.value.length < 9) display.value += 2;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 2;
        final = false;
      }
      break;
    case 99:
      if (!final) {
        if (display.value.length < 9) display.value += 3;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 3;
        final = false;
      }
      break;
    case 100:
      if (!final) {
        if (display.value.length < 9) display.value += 4;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 4;
        final = false;
      }
      break;
    case 101:
      if (!final) {
        if (display.value.length < 9) display.value += 5;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 5;
        final = false;
      }
      break;
    case 102:
      if (!final) {
        if (display.value.length < 9) display.value += 6;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 6;
        final = false;
      }
      break;
    case 103:
      if (!final) {
        if (display.value.length < 9) display.value += 7;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 7;
        final = false;
      }
      break;
    case 104:
      if (!final) {
        if (display.value.length < 9) display.value += 8;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 8;
        final = false;
      }
      break;
    case 105:
      if (!final) {
        if (display.value.length < 9) display.value += 9;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = 9;
        final = false;
      }
      break;
    case 27:
      display.value = '';
      calculadora.setAttribute('data-content', '');
      localStorage.clear();
      decimal = false;
      break;
    case 8:
      display.value = '';
      decimal = false;
      break;
    default:
      console.log(event.keyCode);
      break;
  }
}

teclas.forEach((button) => button.addEventListener('click', handleClick));
window.addEventListener('keyup', handleKey);

function copyText() {
  // get the container
  const element = document.querySelector('#resultado');
  console.log(element.value);
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement('textarea');
  storage.value = element.value;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(storage.value);
  element.removeChild(storage);
}
