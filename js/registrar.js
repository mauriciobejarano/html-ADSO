const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
    });
});

console.log('viva colombia, viva falcao')

export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid') 
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add('input-container--invalid') 
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'valueMissing',
]

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    apellido: {
      valueMissing: "El campo correo no puede estar vacío",
    },
    tipodocumento: {
      valueMissing: "Tipo documento no puede estar vacío",
    },
    documento: {
      valueMissing: "Este campo no puede estar vacío",
    },
    direccion: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"debe contener entre 10 a 40 caracterés",
    },
    telefono: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"el formato es XXXXXXXXXX - 10 numeros",
    },
    ciudad: {
      valueMissing: "Este campo no puede estar vacío",
    },
  };


function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje = '';
  tipoDeErrores.forEach(error =>{
    if (input.validity[error]){
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  })
  return mensaje;
}
