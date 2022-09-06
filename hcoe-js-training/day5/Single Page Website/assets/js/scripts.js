
var toggler = document.querySelector('.nav_toggler');
var navmenu = document.querySelector('.navwrapper');

console.log(navmenu);

toggler.addEventListener('click', function () {
    navmenu.classList.toggle('showMenuOnMobile')
    this.children[0].classList.toggle('la-times')
    this.children[0].classList.toggle('la-bars')
})

console.dir(toggler)