var menuBtn = document.getElementById('menu-btn');
var menuEl = document.getElementById('menu');
var menuIcon = document.getElementById('menu-icon');
var show = false;


function menu(){
    if(show === false){
       menuIcon.src = '/img/close_button.png';
       menuEl.style.display = 'block';
       show = true;
       
    }else{
        menuIcon.src = '/img/menu.png';
        menuEl.style.display = 'none';
        show = false;
    }

    
}


window.addEventListener('resize', function() {
    if (window.innerWidth > 858) {
        menuEl.style.display = ''; // Clears the inline style so desktop CSS takes over
    }
});

// Get the current file name from the URL (e.g., "index.html" or "")
var currentPage = window.location.pathname.split("/").pop();

//nav bar DOM
var home = document.getElementById('home');
var about = document.getElementById('about');
var products = document.getElementById('products');
var review = document.getElementById('review');


if (currentPage === "" || currentPage === "home-page.html") {
    home.style.background = 'rgba(191, 255, 205, 0.8)';
    home.style.color = 'black';

}else if(currentPage === "" || currentPage === "about-page.html"){
    about.style.background = 'rgba(191, 255, 205, 0.8)';
    about.style.color = 'black';

}else if(currentPage === "" || currentPage === "product-page.html"){
    products.style.background = 'rgba(191, 255, 205, 0.8)';
    products.style.color = 'black';

}else if(currentPage === "" || currentPage === "review-page.html"){
    review.style.background = 'rgba(191, 255, 205, 0.8)';
    review.style.color = 'black';
}




