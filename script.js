const FORM = document.querySelector("form");
const PSW = document.querySelector("[name=password]");
const PSW2 = document.querySelector("[name=password2]");

function validityPsw(e) {
          if( PSW.value && PSW2.value) {
                    if (PSW.value != PSW2.value) {
                              PSW.classList.add("invalid");
                              PSW2.classList.add("invalid");
                    } else {
                              PSW.classList.remove("invalid");
                              PSW2.classList.remove("invalid");                              
                    }
          }  else {
                    PSW.classList.remove("invalid");
                    PSW2.classList.remove("invalid");                              
          }
}

function validity (e) {
          if (e.target.querySelector(':invalid, .invalid')) {
                    e.preventDefault();
          }
}


FORM.addEventListener('submit', validity);
[PSW, PSW2].forEach( psw => {
          psw.addEventListener("change", validityPsw)
})