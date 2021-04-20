// // const movingBasket = () => {

//     console.log('move biooo')
//     let basket = document.getElementById("basket");
// console.log(basket.style.left);
// console.log(basket.style.bottom);
// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
// });

// function moveBasketLeft() {
//     let leftNumbers = basket.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         basket.style.left = `${left -20}px`
//     }
// }

// document.addEventListener("keydown", function(e) {
//         if (e.key == "ArrowLeft") {
//             moveBasketLeft();
//         }
//     });

//     function moveBasketRight() {
//         let leftNumbers = basket.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);
    
//         if (left > 0) {
//             basket.style.left = `${left +20}px`
//         }
//     }
    
//     document.addEventListener("keydown", function(e) {
//             if (e.key == "ArrowRight") {
//                 moveBasketRight();
//             }
//         });
// }