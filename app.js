const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error
function showError(field, message) {
  const formControl = field.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
} //show input error
function showSuccess(field) {
  const formControl = field.parentElement;
  formControl.className = 'form-control success';
}

//check if valid email
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(email.value).toLowerCase())) {
      showError(email,'Email is not valid')
  }else{
      showSuccess(email)
  }
}

//check fields are not empty
function checkRequired(arr) {
  arr.map((input) => {
    if (input.value.trim() === '') {
      showError(input, `${capitalise(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

const capitalise = (value) => value.charAt(0).toUpperCase() + value.slice(1);


function checkPasswordMatch(pass1,pass2){
    if (pass1.value.trim() !==pass2.value.trim()){
        showError(password2,`Passwords don\'t match`)
    }
}


//check length of fields
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${capitalise(input.id)} is less than ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${capitalise(input.id)} is more than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
  //   if (username.value === '') {
  //     showError(username, 'Username is required');
  //   } else {
  //     showSuccess(username);

  //   }if (email.value === '') {
  //     showError(email, 'email is required');
  //   }else if(!isValidEmail(email.value)){
  //       showError(email,"Email is not valid")
  //   }
  //   else {
  //     showSuccess(email);
  //   }

  //   if (password.value === '') {
  //     showError(password, 'password is required');
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password2.value === '') {
  //     showError(password2, 'password is required');
  //   } else {
  //     showSuccess(password2);
  //   }
  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 20);
  checkLength(password, 7, 30);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
