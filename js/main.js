const gallery = document.querySelector ('.showGall');
const galleryMX = document.querySelector('.showGallMX');
const gallBtn = document.querySelector('.photoBtn');
const gallBtnMX = document.querySelector('.photoBtnMX');
const closeGall = document.querySelector('.close');
const closeGallMX = document.querySelector('.closeMX');
const nextPic = document.querySelector('.right')
let slides = document.getElementsByClassName('mySlides')
const gallSection = document.querySelector('.gallery-mobile');



let slideIndex = 1; 

const handleGall = () => {
    gallery.classList.toggle('showGall--active')
    closeGall.classList.toggle('showGall--active')
    galleryMX.classList.toggle('showGallMX--active')
    closeGallMX.classList.toggle('showGallMX--active')
    
    
}

const plusSlides = (n) => {
    showSlides(slideIndex += n)
}

const showSlides = (n) => {
    let i;

    if(n > slides.length) {slideIndex =1}
    if(n < 1) {slideIndex = slides.length}

    for (i=0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}


gallBtn.addEventListener('click', handleGall)
closeGall.addEventListener('click', handleGall)
nextPic.addEventListener('click', showSlides)

gallBtnMX.addEventListener('click', handleGall);
closeGallMX.addEventListener('click', handleGall);











