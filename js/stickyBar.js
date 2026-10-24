// 1111) MEDIASIZ USLUB:

// const stickyBar = getElementById("stickyBar");

// window.addEventListener("scroll", () =>{
//     if (window.scrollY > 40) {
//         stickyBar.classList.add("scrolled");
//     }
//     else{
//         stickyBar.classList.remove("scrolled");
//     }
// })

// ================================================



// 2222) MEDIA BILAN BIRGALIKDA(DEFAULT):

// const stickyBar = getElementById("stickyBar");

// window.addEventListener("scroll", () => {
//     if (window.innerWidth > 1024 && window.scrollY > 40) {
//         stickyBar.classList.add("scrolled");
//     } else {
//         stickyBar.classList.remove("scrolled");
//     }
// })

// =================================================



// 3333) MATCHMEDIA USLUBI:

const stickyBar = document.getElementById("stickyBar");

// 1. Media Queryning obyekti!!!

const desktopMedia = window.matchMedia("(min-width: 1025px)");

// skroll funksiyasini alohida yozib olamiz!!!

function handleScroll() {
    
    if (desktopMedia.matches && window.scrollY > 40) {
        stickyBar.classList.add("scrolled");
    } else {
        stickyBar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleScroll);

desktopMedia.addEventListener("change", (e) => {
    if (!(e).matches) {
        stickyBar.classList.remove("scrolled");
    }

    handleScroll();
});

// =============================================