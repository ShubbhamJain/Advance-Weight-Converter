let ws2 = document.querySelector('#weightselector2');
let ws1 = document.querySelector('#weightselector1');
let wi = document.querySelector('#weightinput');
ws1.addEventListener('change',message);
wi.addEventListener('change',message);
ws2.addEventListener('change',message);
let msg = document.querySelector('#msg');
msg.style.display = 'none';

function convert(weightselector1,weightselector2,weightinput) {
  let ow = document.querySelector('#outputWeight');

  if (weightselector1 === 'tonne') {
    if (weightselector2 === 'tonne') {
      ow.innerHTML = weightinput;
    }
    else if (weightselector2 === 'kilogram') {
      ow.innerHTML = weightinput*1000;
    }
    else if (weightselector2 === 'pound') {
      ow.innerHTML = weightinput*2204.62;
    }
    else if (weightselector2 === 'ounce') {
      ow.innerHTML = weightinput*35274;
    }
  }
  else if (weightselector1 === 'kilogram') {
    if (weightselector2 === 'tonne') {
      ow.innerHTML = weightinput*0.001;
    }
    else if (weightselector2 === 'kilogram') {
      ow.innerHTML = weightinput;
    }
    else if (weightselector2 === 'pound') {
      ow.innerHTML = weightinput*2.20462;
    }
    else if (weightselector2 === 'ounce') {
      ow.innerHTML = weightinput*35.274;
    }
  }
  else if (weightselector1 === 'pound') {
    if (weightselector2 === 'tonne') {
      ow.innerHTML = weightinput*0.000453592;
    }
    else if (weightselector2 === 'kilogram') {
      ow.innerHTML = weightinput*0.453592;
    }
    else if (weightselector2 === 'pound') {
      ow.innerHTML = weightinput;
    }
    else if (weightselector2 === 'ounce') {
      ow.innerHTML = weightinput*16;
    }
  }
  else if (weightselector1 === 'ounce') {
    if (weightselector2 === 'tonne') {
      ow.innerHTML = weightinput*2.835e-5;
    }
    else if (weightselector2 === 'kilogram') {
      ow.innerHTML = weightinput*0.0283495;
    }
    else if (weightselector2 === 'pound') {
      ow.innerHTML = weightinput*0.0625;
    }
    else if (weightselector2 === 'ounce') {
      ow.innerHTML = weightinput;
    }
  }
}


function message() {
  if (parseInt(wi.value) < 0) {
    msg.innerHTML = 'Mass Value cannot be negative';
    msg.style.display = 'block';
    msg.style.backgroundColor = "red";
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('mb-3');
      msg.style.marginBottom = '0px';
    },2000);
  }
  else {
    convert(ws1.value,ws2.value,parseInt(wi.value))
  }
}
