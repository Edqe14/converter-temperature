const CONVERT = {
  F: {
    C: (x) => (x - 32) / 1.8,
    F: (x) => x,
    K: (x) => (x - 32) / 1.8 + 273.15
  },
  C: {
    C: (x) => x,
    F: (x) => x * 1.8 + 32,
    K: (x) => x + 273.15
  },
  K: {
    K: (x) => x,
    F: (x) => ((x - 273.15) * 1.8) + 32,
    C: (x) => x - 273.15
  }
};

const inputValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');

const outputC = document.getElementById('outputC');
const outputF = document.getElementById('outputF');
const outputK = document.getElementById('outputK');

const update = () => {
  const formulas = CONVERT[tempType.value];
  let value = parseFloat(inputValue.value);
  if (isNaN(value)) value = 0;

  const { C, F, K } = formulas;
  try {
    outputC.innerHTML = C(value).toFixed(2);
    outputF.innerHTML = F(value).toFixed(2);
    outputK.innerHTML = K(value).toFixed(2);
  } catch (e) { console.error(e); }
};

tempType.addEventListener('change', update);
inputValue.addEventListener('input', update);
