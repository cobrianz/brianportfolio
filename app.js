/* template_l40xzeq

service_ic6e6mk

N_zB7QJt4YSPXyryW */

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList+= ' modal__overlay--visible';
    emailjs.send('service_ic6e6mk', 'template_l40xzeq', event.target,'N_zB7QJt4YSPXyryW' )
    .then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList+= ' modal__overlay--visible';
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert("Email server temporarily unavailable. please contact me through briancheruiyot022@gmail.com");
    });

    setTimeout(() => {
    
        console.log('success!')
    }, 1000);

} 
let isModalOpen = false;

function toggleModal() {
    
    (isModalOpen) ? document.body.classList.remove('modal__open') : 
    document.body.classList += ' modal__open';
    isModalOpen = !isModalOpen;
}