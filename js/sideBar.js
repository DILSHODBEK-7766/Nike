// BIRINCHI DEFAULT USLUB SIDEBAR UCHUN!!!

// const sideBarBtn = document.getElementById("sideBarBtn");

// const sideBarMenu = document.getElementById("sideBarMenu");


// BTN BOSILGANDA OCHILIB YOPILISH(opacity yo'q)!!!

// sideBarBtn.addEventListener("click", () => {
//     sideBarMenu.classList.toggle("active");

//     if (sideBarMenu.classList.contains("active")) {
//         sideBarBtn.classList.remove("fa-bars");
//         sideBarBtn.classList.add("fa-xmark");
//     }else{
//         sideBarBtn.classList.remove("fa-xmark");
//         sideBarBtn.classList.add("fa-bars");
//     }
// })



// 2-USLUB OPACITY BUTTON USLUBI!!!

// BTN BOSILGANDA OCHILIB YOPILISH(opacity)!!!

// const sideBarBtn = document.getElementById("sideBarBtn");

// const sideBarMenu = document.getElementById("sideBarMenu");

// sideBarBtn.addEventListener("click", ()=> {
//     sideBarBtn.classList.toggle("active");

//     sideBarMenu.classList.toggle("active");
// });

// BTN BOSILGANDA OCHILIB YOPILISH!!!
// =========================================


// 3-USLUB PRO USLUB!!!

// const sideBarBtn = document.getElementById("sideBarBtn");

// const sideBarMenu = document.getElementById("sideBarMenu");


// // BTN BOSILGANDA OCHILIB YOPILISH(opacity)!!!

// sideBarBtn.addEventListener("click", () => {
//     sideBarBtn.classList.toggle("active");

//     sideBarMenu.classList.toggle("active");
// });

// BTN BOSILGANDA OCHILIB YOPILISH!!!
// ==========================================

// WINDOWSNING OCHIQ QISMIGA BOSGANDA YOPILISH!!!

// document.addEventListener("click", (e) => {
//     if (!sideBarBtn.contains(e.target) && !sideBarMenu.contains(e.target)) {
//         sideBarBtn.classList.remove("active");

//         sideBarMenu.classList.remove("active");
//     }
// });

// WINDOWSNING OCHIQ QISMIGA BOSGANDA YOPILISH!!!
// ==================================================

// ESC YOKI IXTIYORIY BUTTON BOSILGANDA YOPILISH!!!

// document.addEventListener("keydown", (e) => {
//     if (e.key == "Escape" && sideBarMenu.classList.contains("active")) {
//         sideBarBtn.classList.remove("active");

//         sideBarMenu.classList.remove("active"); 
//     }
// });

// ESC YOKI IXTIYORIY BUTTON BOSILGANDA YOPILISH!!!
// =======================================================

// 3-USLUB PRO USLUB!!!
// =======================================


// 4-USLUB PRO USLUB SWIPE BILAN!!!

const sideBarOverlay = document.getElementById("sideBarOverlay");

const sideBarBtn = document.getElementById("sideBarBtn");

const sideBarMenu = document.getElementById("sideBarMenu");


// BTN BOSILGANDA OCHILIB YOPILISH(opacity)!!!

sideBarBtn.addEventListener("click", () =>{
    sideBarMenu.classList.toggle("active");

    sideBarBtn.classList.toggle("active");

    sideBarOverlay.classList.toggle("active");
})

// BTN BOSILGANDA OCHILIB YOPILISH(opacity)!!!
// =======================================================


// WINDOWSNING OCHIQ QISMIGA BOSGANDA YOPILISH!!!
document.addEventListener("click", (e) => {
    if (!sideBarBtn.contains(e.target) && !sideBarMenu.contains(e.target)) {
        sideBarBtn.classList.remove("active");

        sideBarMenu.classList.remove("active");

        sideBarOverlay.classList.remove("active");
    }
});
// WINDOWSNING OCHIQ QISMIGA BOSGANDA YOPILISH!!!
// =======================================================


// ESC YOKI IXTIYORIY BUTTON BOSILGANDA YOPILISH!!!

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && sideBarMenu.classList.contains("active")) {
        sideBarBtn.classList.remove("active");

        sideBarMenu.classList.remove("active");

        sideBarOverlay.classList.remove("active");

    }
});

// ESC YOKI IXTIYORIY BUTTON BOSILGANDA YOPILISH!!!
// ============================================


// NATIVE SWIPE BILAN OCHILISH VA YOPILISH!!!

let startX = 0;

let endX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;


    if (endX - startX > 50 && startX < 150 && !sideBarMenu.classList.contains("active")) {
        sideBarBtn.classList.add("active");

        sideBarMenu.classList.add("active");

        sideBarOverlay.classList.add("active");
    }

    if (startX - endX > 50 && sideBarMenu.classList.contains("active")) {
        sideBarBtn.classList.remove("active");

        sideBarMenu.classList.remove("active");

        sideBarOverlay.classList.remove("active");
    }
});

// NATIVE SWIPE BILAN OCHILISH VA YOPILISH!!!
// ================================================


// OVERLAY HOLATI BILAN!!!



// OVERLAY HOLATI BILAN!!!
// ========================================

// 4-USLUB PRO USLUB SWIPE BILAN!!!
// ============================================