const validator = (e) => {
    e.preventDefault();
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('confirmPassword').value;
    let email = document.getElementById('email').value;



    if (uname == '') {
        document.querySelector('.usernameError').innerHTML = "Username is Required"
        return false;
    }
    if (uname.length <= 5 || uname.length >= 20) {
        document.querySelector('.usernameError').innerHTML = "Username must be 5 characters long and less than 20 characters"
    }

    if (pass == '') {
        document.querySelector('.passError').innerHTML = "Password is Required"
        return false;

    }
    if (pass !== cpass) {
        document.querySelector('.cPassError').innerHTML = "Passwods Must Match"

    }
    if (email == '') {
        document.querySelector('.emailError').innerHTML = "Email is Required"
        return false;

    }

}

let passDiv = document.getElementById('password');
let shoPass = document.querySelector('.shoPass');
let hidePass = document.querySelector('.hidePass');
let parentLabel = document.querySelector('.passLabel')
shoPass.addEventListener('click', function () {
    passDiv.setAttribute('type', 'text');
    parentLabel.classList.toggle('visible')

})

hidePass.addEventListener('click', function () {
    passDiv.setAttribute('type', 'password');
    parentLabel.classList.toggle('visible')

})


