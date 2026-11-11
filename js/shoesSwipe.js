const shoesData = [
    {
        id: 1,
        image: "./img/hero_shoes.png",
        title: "Shoe Review: Nike React Infinity Run",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa",
    },
    {
        id: 2,
        image: "./img/nike_tanjun.png",
        title: "Shoe Review: Nike Tanjun Infinity Run",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa",
    },
    {
        id: 3,
        image: "./img/nike_green (1).png",
        title: "Shoe Review: Зеленый Air Force",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa",
    },
    {
        id: 4,
        image: "./img/nike_moon.png",
        title: "Shoe Review: Nike moon shoes",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa",
    },
]




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