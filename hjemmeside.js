// Sørg for, at elementet med id 'image1' findes
const myDiv = document.getElementById('image1');
if (myDiv) {
    myDiv.addEventListener('click', function() {
        window.location.href = 'introduktion-js.html'; // Skift til ønsket URL
    });
}
    const myDiv2 = document.getElementById('image2');
if (myDiv2) {
    myDiv2.addEventListener('click', function() {
        window.location.href = 'javascript.html'; // Skift til ønsket URL
    });
}


const mydiv3 = document.getElementById('js-function');
if (mydiv3) {
    mydiv3.addEventListener('click' , function() {
        window.location.href = 'js-functions.html'; // Skift til ønsket URL
} );
}
const mydiv4 = document.getElementById('image3');
if (mydiv4) { 
    mydiv4.addEventListener('click', function() {
        window.location.href = 'webprogrammering-intro.html'; // Skift til ønsket URL
} );
}

const mydiv5 = document.getElementById('js-variabler');
if (mydiv5) {
    mydiv5.addEventListener('click', function() {
        window.location.href = 'javascript-variable.html'; // Skift til ønsket URL
} );
}

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = (window.location.pathname.split('/').pop() || 'Forside.html').toLowerCase();
    console.log('Current page:', currentPage);
    
    document.querySelectorAll('.menu a').forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = (linkHref.split('/').pop() || 'Forside.html').toLowerCase();
        console.log('Checking link:', linkHref, '->', linkPage);
        
        if (linkPage === currentPage || 
            (linkHref === '#' && currentPage === 'forside.html')) {
            link.classList.add('active');
            console.log('MATCH - added active class');
        }
    });
});
