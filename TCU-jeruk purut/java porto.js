const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });


    const offset = -index * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

  
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}


setInterval(nextSlide, 3000);


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);

const startingMinute = 10; 
let time = startingMinute * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000); 


function updateCountdown() {
    const minute = Math.floor(time / 60); 
    let second = time % 60; 

    second = second < 10 ? '0' + second : second; 

    countdownEl.innerHTML = `${minute}:${second}`; 
    time--; 

    if (time < 0) {
        clearInterval(); 
        countdownEl.innerHTML = "Waktu Habis"; 
    }
}

const buttons = document.querySelectorAll('.produk-nav-btn');
const container = document.querySelector('.container-item');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        buttons.forEach(btn => btn.classList.remove('active'));

        
        e.target.classList.add('active');

       
        const index = e.target.getAttribute('data-index');

        
        const scrollPosition = index * (container.offsetWidth / 3); 
        container.style.transform = `translateX(-${scrollPosition}px)`; 
    });
});


document.addEventListener('DOMContentLoaded', function() {

    const mainImg = document.getElementById('mainimg');
    const smallImgs = document.querySelectorAll('.smal-img');
    
    smallImgs.forEach(smallImg => {
        smallImg.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
    
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        const dots = document.querySelectorAll('.nav-dot');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });

            const offset = -index * 100;
            document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        setInterval(nextSlide, 3000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        showSlide(currentIndex);
    }
});

function setupThumbnails() {
    const mainImg = document.getElementById('mainimg');
    const smallImgs = document.querySelectorAll('.smal-img');

    smallImgs.forEach(img => {
        img.addEventListener('click', () => {
            mainImg.src = img.src;
        });
    });
}

document.addEventListener('DOMContentLoaded', setupThumbnails);
