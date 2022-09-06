const fileInputHidden = document.getElementById('fileInputHidden'),
    chooseImage = document.getElementById('chooseImage'),
    previewImage = document.getElementById('previewImage'),
    filter = document.querySelectorAll('.filter button'),
    filterSlider = document.querySelector('.sliderWrapper input'),
    filterValue = document.querySelector('.labelwithValue .right'),
    rotateFlipOptions = document.querySelectorAll('.rotateFlip button'),
    resetFilterButton = document.querySelector('.bottom .left'),
    downloadBtn = document.querySelector('.download');


// let disableEditor = true
let imageName;
let brightness = 100, rotate = 0;



const loadImage = () => {
    // fileInputHidden.click();
    let file = fileInputHidden.files[0]
    console.log(file);
    if (!file) return;
    previewImage.src = URL.createObjectURL(file);
    previewImage.addEventListener("load", () => {
        // disableEditor = false;
        imageName = file.name.replace(/^.*[\\\/]/, '');

        document.querySelector('.container').classList.remove('disabled')
    })
}

const applyFilter = () => {
    previewImage.style.transform = `rotate(${rotate}deg)`;
    previewImage.style.filter = `brightness(${brightness}%)`;
}

filter.forEach(action => {
    action.addEventListener('click', function () {

        document.querySelector('.active').classList.remove('active');
        action.classList.add('active')
        if (action.id === "brightness") {
            filterSlider.max = "200"
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`
        }
    })
})

const updateFilter = () => {

    filterValue.innerText = `${filterSlider.value} %`
    const selectedFilter = document.querySelector('.filter .active');
    if (selectedFilter.id === 'brightness') {
        brightness = filterSlider.value;
    }
    applyFilter();

}

rotateFlipOptions.forEach(eachItem => {
    eachItem.addEventListener('click', function () {
        if (eachItem.id === "rotateLeft") {
            rotate -= 90;
        }
        applyFilter();

    })
})

const resetFilter = () => {
    console.log('i am clicked!')

    brightness = "100";
    rotate = 0;
    filter[0].click();
    applyFilter();
}

const downloadImage = () => {
    downloadBtn.innerText = "Saving image...";
    downloadBtn.classList.add("disable");


    setTimeout(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = previewImage.naturalWidth;
        canvas.height = previewImage.naturalHeight;

        ctx.filter = `brightness(${brightness}%)`;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if (rotate !== 0) {
            ctx.rotate(rotate * Math.PI / 180);
        }
        ctx.drawImage(previewImage, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

        const link = document.createElement("a");
        link.download = imageName;
        link.href = canvas.toDataURL();
        link.click();
        downloadBtn.innerText = "Save Image";
        downloadBtn.classList.remove("disable");
    });
}


downloadBtn.addEventListener('click', downloadImage);
resetFilterButton.addEventListener('click', resetFilter)
filterSlider.addEventListener('input', updateFilter)
fileInputHidden.addEventListener('change', loadImage)
chooseImage.addEventListener('click', function () {
    fileInputHidden.click()
});