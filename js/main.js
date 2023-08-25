const gallery = document.querySelector('.showGall');
const gallBtn = document.querySelector('.photoBtn');

const handleGall = () => {
    gallery.classList.toggle('showGall--active')

}

gallBtn.addEventListener('click', handleGall)




