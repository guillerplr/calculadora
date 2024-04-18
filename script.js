const calculadora = document.querySelector('.calculadora');

const display = document.querySelector('.display');

const teclas = document.querySelectorAll('.tecla');

let decimal = false;
let final = false;
let atual = [];

function toStorage(value, operator) {
  if (value != '' && !final) {
    let atual = JSON.parse(localStorage.getItem('values'));
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
      calculadora.setAttribute('data-content', atual.join(' '));
    }
  }
}

function finaliza() {
  final = true;
  console.log('finalize');
}

function handleClick({ target }) {
  switch (target.innerHTML) {
    case ',':
      if (!decimal) {
        if (display.value.length != 0) {
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
      display.value = '';
      decimal = false;
      break;
    case '+':
      toStorage(display.value, '+');
      display.value = '';
      decimal = false;
      break;
    case '-':
      toStorage(display.value, '-');
      display.value = '';
      decimal = false;
      break;
    case '÷':
      toStorage(display.value, '÷');
      display.value = '';
      decimal = false;
      break;
    case 'x':
      toStorage(display.value, 'x');
      display.value = '';
      decimal = false;
      break;
    case '=':
      toStorage(display.value, '=');
      display.value = 'resultado';
      break;
    default:
      if (!final) {
        display.value += target.innerHTML;
      } else {
        calculadora.setAttribute('data-content', '');
        display.value = target.innerHTML;
        final = false;
        localStorage.clear();
      }
      break;
  }
}

teclas.forEach((button) => button.addEventListener('click', handleClick));
