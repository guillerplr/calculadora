const calculadora = document.querySelector('.calculadora');
const display = document.querySelector('.display');
const teclas = document.querySelectorAll('.tecla');

let decimal = false;
let final = false;
let atual = [];

function toStorage(value, operator) {
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
  }
}

function finaliza() {
  switch (atual[1]) {
    case '+':
      display.value = Number(atual[0]) + Number(atual[2]);
      break;
    case '-':
      display.value = Number(atual[0]) - Number(atual[2]);
      break;
    case 'x':
      display.value = Number(atual[0]) * Number(atual[2]);
      break;
    case '÷':
      display.value = Number(atual[0]) / Number(atual[2]);
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
      display.value = '';
      decimal = false;
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
    case '=':
      if (localStorage.getItem('values')) {
        toStorage(display.value, '=');
      }
      break;
    default:
      if (!final) {
        display.value += target.innerHTML;
      } else {
        localStorage.clear();
        calculadora.setAttribute('data-content', '');
        display.value = target.innerHTML;
        final = false;
      }
      break;
  }
}

teclas.forEach((button) => button.addEventListener('click', handleClick));
