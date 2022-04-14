
function showSearch() {
    let search = document.getElementById("search");
    if(search.style.display === 'none'){
        search.style.display = 'block'
    }else{
        search.style.display = 'none'
    }
}

let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


addEventListener('scroll', function() {
    const header = document.querySelector("header")
    header.classList.toggle('sticky', window.scrollY > 0);
});

