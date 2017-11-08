function getDataFromInput (event) {
  event.preventDefault();
  var firstName,lastName,emailName,passwordField,userJSon,data;

  firstName = document.getElementsByClassName('firstinp')[0].value; 
  lastName = document.getElementsByClassName('secondinp')[0].value; 
  emailName = document.getElementsByClassName('thirdinp')[0].value;
  passwordField = document.getElementsByClassName('fourthinp')[0].value;

  data = {
    user: {
      first_name: firstName, 
      last_name: lastName,
      email:  emailName,
      password: passwordField
    }
  }

  userJSon = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  if(errorEmail() != false && errorPassword()!= false ){
    xhr.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_up",true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(userJSon);
    xhr.onreadystatechange = function() { // (3)
      if (xhr.readyState != 4) return;
    
      if (xhr.status != 200) {
        alert("Fill out the form correctly!");
      } else {
        alert("Please login!");
        window.location.href = "index.html"
      }  
    }
  }else {
    alert('Fill out the form correctly!')
  }
}


//validation field password
function errorPassword(){
  var passwordField = document.getElementsByClassName('fourthinp')[0];
  var passwordError = document.querySelector('.error-password');
  //console.log(passwordField.value.length);
  if (passwordField.value.length >= 8 && passwordField.value.length <= 16 || passwordField.value.length == 0 ){
    passwordError.setAttribute('hidden','');
  }else {
    passwordError.removeAttribute('hidden');
    return false;
  }  
  if(passwordField.value.length == 0){
    return false;
  }
}
  

//button show password
function showPassword(){
  var passwordShow = document.querySelector('.ipField [type="button"]');
  var passwordField = document.getElementsByClassName('fourthinp')[0];
  if (passwordField.getAttribute("type") === 'password'){
    passwordField.setAttribute('type','text');
    passwordShow.setAttribute('value','Hide');
  }else if (passwordField.getAttribute("type") === 'text'){
    passwordField.setAttribute('type','password');
    passwordShow.setAttribute('value','Show');
  }
}

//validation field email
function errorEmail(){
  var emailError = document.querySelector('.error-email');
  var regEmail = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[A-Za-z]{2,6}$/g;
  emailName = document.getElementsByClassName('thirdinp')[0].value;
  if (emailName.match(regEmail) !== 0 && emailName.match(regEmail) !== null || emailName.length == 0 ){
    emailError.setAttribute('hidden','');
  }else {
    emailError.removeAttribute('hidden');
    return false;
  }
  if(emailName.length == 0){
    return false;
  }
}