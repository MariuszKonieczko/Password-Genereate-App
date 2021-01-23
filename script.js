window.onload = function () {
  const copyEl = document.getElementById('copy');
  const generateEl = document.getElementById('generate');

  generateEl.addEventListener('click', () => {
    generatePassword();
  });

  copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const pwEl = document.getElementById('pw');
    const password = pwEl.innerText;

    if (!password) {
      return;
    }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to cllipboard');
  });
};

function getLowercase() {
  const lowerLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  const upperLetters = 'abcdefghijklmnopqrstuvwxyz';
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  const numbers = '0123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  const symbols = '!@#$%^&*()_+=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const pwEl = document.getElementById('pw');
  const lenEl = document.getElementById('len');

  const upperEl = document.getElementById('upper');
  const lowerEl = document.getElementById('lower');
  const numberEl = document.getElementById('number');
  const symbolEl = document.getElementById('symbol');

  if (
    !upperEl.checked &&
    !lowerEl.checked &&
    !numberEl.checked &&
    !symbolEl.checked
  ) {
    alert('Check something');
    return;
  }

  const len = lenEl.value;
  let password = '';

  if (upperEl.checked) {
    password += getUppercase();
  }
  if (lowerEl.checked) {
    password += getLowercase();
  }
  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
  return password;
}

function generateX() {
  const upperEl = document.getElementById('upper');
  const lowerEl = document.getElementById('lower');
  const numberEl = document.getElementById('number');
  const symbolEl = document.getElementById('symbol');

  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) {
    return '';
  }
  return xs[Math.floor(Math.random() * xs.length)];
}
