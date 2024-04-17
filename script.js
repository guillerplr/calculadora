const calculadora = document.querySelector('.calculadora');

const display = document.querySelector('.display');

const teclas = document.querySelectorAll('.tecla');

let decimal = false;

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
      if (display.value != '') {
        if (calculadora.getAttribute('data-content') === '') {
          localStorage.setItem('fator1', display.value);
        } else {
          localStorage.setItem('fator2', display.value);
        }
        calculadora.setAttribute('data-content', display.value + ' +');
        display.value = '';
        decimal = false;
      }
      break;
    case '-':
      if (display.value != '') {
        calculadora.setAttribute('data-content', display.value + ' -');
        localStorage.setItem('fator1', display.value);
        display.value = '';
        decimal = false;
      }
      break;
    case '÷':
      if (display.value != '') {
        calculadora.setAttribute('data-content', display.value + ' ÷');
        localStorage.setItem('fator1', display.value);
        display.value = '';
        decimal = false;
      }
      break;
    case 'x':
      if (display.value != '') {
        calculadora.setAttribute('data-content', display.value + ' x');
        localStorage.setItem('fator1', display.value);
        display.value = '';
        decimal = false;
      }
      break;
    case '=':
      if (localStorage.getItem('fator1')) {
        localStorage.setItem('fator2', display.value);
        const resultado =
          +localStorage.getItem('fator1') + +localStorage.getItem('fator2');
        calculadora.setAttribute(
          'data-content',
          localStorage.getItem('fator1') +
            ' + ' +
            localStorage.getItem('fator2') +
            ' =',
        );
        display.value = resultado;
      }

      break;
    default:
      display.value += target.innerHTML;
      break;
  }
}

teclas.forEach((button) => button.addEventListener('click', handleClick));
