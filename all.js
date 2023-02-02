const navBar = document.querySelector("nav")
const menuBtns = document.querySelectorAll(".menu-icon")
const overlay4 = document.querySelector(".overlay4");
const cookieBanner = document.getElementById('cookie-banner');
const cookieBannerAccept = document.getElementById('cookie-banner-accept');
const cookieBannerReject = document.getElementById('cookie-banner-reject');
menuBtns.forEach(menuBtns =>{
    menuBtns.addEventListener("click", () => {
        navBar.classList.toggle("open4");
        /*if (window.innerWidth < 700) {
            document.querySelector('.open4').style.height = '100px';
            document.querySelector('.sidebar4').style.display = 'block';
        } else {
            document.querySelector('.open4').style.height = '100px';
            document.querySelector('.sidebar4').style.display = 'none';
        }*/
    });
});
overlay4.addEventListener("click", () => {
    overlay4.classList.remove("open4");
})
cookieBannerAccept.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
});
cookieBannerReject.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
});
cookieBanner.style.display = 'flex';