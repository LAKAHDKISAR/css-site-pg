const fileInputHidden = document.getElementById('fileInputHidden'),
    chooseImage = document.getElementById('chooseImage'),
    previewImage = document.getElementById('previewImage'),
    filter = document.querySelectorAll('.filter button'),
    filterSlider = document.querySelector('.sliderWrapper input'),
    filterValue = document.querySelector('.labelwithValue .right')


// let disableEditor = true

let brightness = 100;

const loadImage = () => {
    // fileInputHidden.click();
    let file = fileInputHidden.files[0]
    console.log(file);
    if (!file) return;
    previewImage.src = URL.createObjectURL(file);
    previewImage.addEventListener("load", () => {
        // disableEditor = false;
        document.querySelector('.container').classList.remove('disabled')
    })
}

filter.forEach(action => {
    action.addEventListener('click', function () {

        document.querySelector('.active').classList.remove('active');
        action.classList.add('active')
        if (action.id === "brightness") {
            console.log("works with brightness only")
            filterSlider.max = "200"
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`
        }
    })
})

fileInputHidden.addEventListener('change', loadImage)
chooseImage.addEventListener('click', function () {
    fileInputHidden.click()
});