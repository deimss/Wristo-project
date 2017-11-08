//Function for form Log-in
function loginInMasterPage(event){
  event.preventDefault(); 
  var emailName,passwordField,userJSon,data,errorEmailPasswordBlock;

  emailName = document.getElementsByClassName('firstinp')[0].value;
  passwordField = document.getElementsByClassName('secondtinp')[0].value;
  errorEmailPasswordBlock = document.getElementsByClassName('error-email-password')[0];

  data = {
      email:  emailName,
      password: passwordField
    }


  userJSon = JSON.stringify(data);
  console.log(userJSon);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_in", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(userJSon);
  xhr.onreadystatechange = function() { // (3)
    if (xhr.readyState != 4) return;  
    if (xhr.status != 200) {
      errorEmailPasswordBlock.removeAttribute('hidden');
      }  
      else {
        errorEmailPasswordBlock.setAttribute('hidden','')
			  alert("welcome!");
			  window.location.href = "Master-page/index.html"
    }  
  }
}

//check value of null
function checkEmailLength(){
  var errorEmailPasswordBlock = document.getElementsByClassName('error-email-password')[0];
  var emailName = document.getElementsByClassName('firstinp')[0].value;
  if (emailName.length == 0 ){
    errorEmailPasswordBlock.setAttribute('hidden','')
  }
}

//check value of null
function checkPasswordLength(){
  var errorEmailPasswordBlock = document.getElementsByClassName('error-email-password')[0];
  var passwordField = document.getElementsByClassName('secondtinp')[0].value;
  if (passwordField.length == 0 ){
    errorEmailPasswordBlock.setAttribute('hidden','')
  } 
}
