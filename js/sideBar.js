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


// 1. O'zgaruvchilarni topamiz
const sideBarBtn = document.getElementById("sideBarBtn");
const sideBarMenu = document.getElementById("sideBarMenu");

// ==========================================
// 1-QISM: CLICK BILAN OCHISH/YOPISH
// ==========================================
sideBarBtn.addEventListener("click", () => {
    sideBarBtn.classList.toggle("active");
    sideBarMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!sideBarMenu.contains(e.target) && !sideBarBtn.contains(e.target)) {
        sideBarMenu.classList.remove("active");
        sideBarBtn.classList.remove("active");
    }
});

// ==========================================
// 2-QISM: ESCAPE TUGMASI BILAN YOPISH
// ==========================================
document.addEventListener("keydown", (e) => {
    // Agar ESC bosilsa va Menyu ochiq bo'lsa
    if (e.key === "Escape" && sideBarMenu.classList.contains("active")) {
        sideBarMenu.classList.remove("active");
        sideBarBtn.classList.remove("active");
    }
});

// ==========================================
// 3-QISM: BARMOQ BILAN SURIB YOPISH (SWIPE)
// ==========================================
// ==========================================
// 3-QISM: BARMOQ BILAN SURIB OCHISH VA YOPISH (SWIPE)
// ==========================================
let startX = 0;
let endX = 0;

// E'TIBOR BER: Endi sideBarMenu emas, 'document' yozdik!
document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX; // Barmoq tekkan joyni aniqlaymiz
});

document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX; // Barmoq olingan joy

    // A) OCHISH LOGIKASI (O'ngga surilganda)
    // 1-shart: O'ngga 50px dan ko'p surildimi?
    // 2-shart: Barmoq ekranning eng chap chetidan (masalan 0 dan 40px gacha bo'lgan joydan) boshlandimi?
    // 3-shart: Menyu hali yopiqmi?
    if (endX - startX > 50 && startX < 40 && !sideBarMenu.classList.contains("active")) {
        sideBarMenu.classList.add("active");
        sideBarBtn.classList.add("active"); // Ikonkani ham X ga aylantiramiz
    }

    // B) YOPISH LOGIKASI (Chapga surilganda)
    // 1-shart: Chapga 50px dan ko'p surildimi?
    // 2-shart: Menyu ochilgan holatdami?
    if (startX - endX > 50 && sideBarMenu.classList.contains("active")) {
        sideBarMenu.classList.remove("active");
        sideBarBtn.classList.remove("active"); // Ikonkani yana Burgerga qaytaramiz
    }
});