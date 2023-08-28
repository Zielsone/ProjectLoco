const gallery = document.querySelector ('.showGall');
const gallBtn = document.querySelector('.photoBtn');
const closeGall = document.querySelector('.close');
const arrRght = document.querySelector('.right');
const slide = document.querySelector('.slide');

const pic =[ "IMG_6395.JPG", "IMG_6411.JPG", "IMG_6413.JPG", "IMG_6421.JPG"];

const handleGall = () => {
    gallery.classList.toggle('showGall--active')
    closeGall.classList.toggle('showGall--active')
}

const picBrowser = () => {
   console.log(slide)
   slide.outerHTML = `<img src="pic/${pic[0]}" style="width:100%">`
   
}



gallBtn.addEventListener('click', handleGall)
closeGall.addEventListener('click', handleGall)
arrRght.addEventListener('click', picBrowser)





