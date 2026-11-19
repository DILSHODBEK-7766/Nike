import { shoesData } from "../../data/shoesData.js";


export function shoesDataSwipe() {

// SWAP IMAGES!!!
const shoesSneaker = document.querySelectorAll(".shoes__sneaker");

// MAIN SHOES INFO!!!
const mainShoesInfo = document.getElementById("mainShoesInfo");

// MAIN IMAGE!!!
const mainReviewImg = document.getElementById("mainReviewImg");

// MAIN TITLE!!!
const mainReviewTitle = document.getElementById("mainReviewTitle");

// MAIN DESCRIPTION!!!
const mainReviewDesc = document.getElementById("mainReviewDesc");


shoesSneaker.forEach((shoes) => {
    shoes.addEventListener("click", () => {

        // barcha shoeslardan active klasini olib tashladik!!!.
        shoesSneaker.forEach((removeShoes) => {
            removeShoes.classList.remove("active"); 
        });

        // aynan click bo'lgan shoesga activeni qo'shib qo'ydik!!!.
        shoes.classList.add("active");

        // katta shoesni vaqtincha 0 qilib qo'ydik!!!.
        mainShoesInfo.style.opacity = "0";

        // clickedShoe nomi ostida bosilgan shoesning data id sini chaqirib oldik!!!. 
        const clickedShoe = shoes.getAttribute("data-id");

        // selectedShoe nomi bilan shart berdik, shoesDataning ichidan tanlangan shoesning id si clickedShoe ga teng bo'lganini!!!.
        const selectedShoe = shoesData.find((selected) => selected.id == clickedShoe);


        // ma'lumotlarning almashish vaqtini 0.2 soniya qilib belgilab qo'ydik!!!.
        setTimeout(() => {

            mainReviewImg.src = selectedShoe.image;

            mainReviewTitle.textContent = selectedShoe.title;

            mainReviewDesc.textContent = selectedShoe.desc;

            // ma'lumotlar almashib yana ko'rinadigan qilib qo'ydik!!!.
            mainShoesInfo.style.opacity = "1";

        }, 200);
    });

});

}