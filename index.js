/*Animation Count About Me*/
function animateCount (elem) {
    return new Promise((resolve) => {
        let count = 0;
        const cible = parseInt(elem.getAttribute('data-target'));
        const interval = setInterval(function(){
            elem.textContent = count;

            if (count >= cible) {
                clearInterval(interval);
                resolve();
            }
            count++;
        }, 50)
    });  
}
async function startAnimate() {
    const elem1 = document.getElementById("elem1");
    const elem2 = document.getElementById("elem2");
    const elem3 = document.getElementById("elem3");

    const elements = [elem1,elem2, elem3];

    while (true) {
        for (let el of elements) {
            await animateCount(el);
        }

        await new Promise(r => setTimeout(r, 3500));

        elements.forEach(el => {
            el.textContent = 0;
        });
    }
} 


/*ProgressBar Skills*/
let progress = document.querySelectorAll('.progressbar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            start(entry.target);
        }
    });
});
function start(element) { 
    let width = 0; 
    let interval = setInterval(()=> {
    if (width <= element.dataset.level) {
        width++;
        element.style.width = width + "%";
        
    } else {
        clearInterval(interval);
    }
})
}


/*Email JS*/
(function() {
    emailjs.init({
        publicKey: "PTpJhdZw6a49hRkKC",
        
    })
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('submitButtom').disabled = true;

        emailjs.sendForm('service_dwpr0cg', 'template_ipx6f98', this)
            .then(() => {
               
                this.reset();
                document.querySelector('.container-message').classList.add('success');
                document.getElementById('message').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="15px" height="15px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z"></path></g></g></svg>Message sent';
                setTimeout(() => {
                    document.getElementById('message').textContent = '';
                    document.querySelector('.container-message').classList.remove('success');
                }, 4000);
            }, (error) => {
                document.querySelector('.container-message').classList.add('error');
                document.getElementById('message').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="15px" height="15px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8zM8.70703,7.29297l-1.41406,1.41406l3.29297,3.29297l-3.29297,3.29297l1.41406,1.41406l3.29297,-3.29297l3.29297,3.29297l1.41406,-1.41406l-3.29297,-3.29297l3.29297,-3.29297l-1.41406,-1.41406l-3.29297,3.29297z"></path></g></g></svg>Error';
                setTimeout(() => {
                    document.getElementById('message').textContent = '';
                    document.querySelector('.container-message').classList.remove('error');
                }, 4000);
            })
            .finally(() => {
                document.getElementById('submitButtom').disabled = false;
            });
    });
}

/*Fonction Home*/
const home =document.getElementById('home');
const header = document.querySelector('header');
const offset = header.offsetHeight;
home.onclick = () => {
    window.scrollTo({
        top: 0 - offset,
        behavior: "smooth"
      });
}
    



/*Appels à tous les fonctions*/
document.addEventListener('DOMContentLoaded', () => {
    startAnimate();
    progress.forEach(el => {
        observer.observe(el)
    });
});