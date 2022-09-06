function submitForm() {
    var usernameError = document.querySelector('.usernameError');
    var passwordError = document.querySelector('.passwordError');
    console.log(passwordError)
    usernameError.style.display = "block"
    passwordError.style.display = "block"


}


window.onscroll = function () {
    var ourHeader = document.querySelector('header');

    var topValue = ourHeader.offsetTop;
    console.log(topValue)

    if (window.pageYOffset >= topValue) {
        ourHeader.classList.add('fixedHeader')
    }
    else {
        ourHeader.classList.remove('fixedHeader')

    }

    console.log(window.pageYOffset)

}
