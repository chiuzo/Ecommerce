let bar = document.getElementById("bar");
let closeEl = document.getElementById("close");
let nav = document.getElementById("navbar");
let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("small-img");
let removeCartItem = document.getElementsByClassName("far fa-times-circle")

bar.addEventListener("click",function(){
    nav.classList.add('active')
})
closeEl.addEventListener("click",function(){
    console.log("sidebar");
    nav.classList.remove('active')
})
for(let i=0; i< smallImg.length; i++ ) {
    smallImg[i].addEventListener("click", function(){
        mainImg.src = smallImg[i].src
    })
}

for(let i = 0; i < removeCartItem.length; i++){
    let removeEl = removeCartItem[i]
    removeEl.addEventListener("click", function(){
        removeEl.parentElement.parentElement.remove()
    })
}

function updateCartTotal(){
    let cartContentItem
}











// proEl.addEventListener("click", function(){
//     window.location.href = "sproduct.html"
//     console.log("hello")
//     for(let i=0; i< smallImg.length; i++ ) {
//         smallImg[i].addEventListener("click", function(){
//             mainImg.src = smallImg[i].src
//         })
//     }
// })

// for(let i=0; i< heartEl.length; i++ ){
//     heartEl[i].addEventListener("click", function(){
//         console.log("red")
//         if(heartEl[i].className === "far fa-heart"){
//             // heartEl[i].ClassName = "fa fa-heart"
//             heartEl[i].style.color = "red"
//             console.log("green")
//         } else {
//             console.log("yellow")
//         }
//     })
    
// }
// let iconEl = document.querySelector("#icon");
// let countEl = document.querySelector(".count");

// iconEl.addEventListener("click", function(){
//     if (iconEl.innerHTML === `<i class="far fa-heart"></i>`){
//         iconEl.innerHTML = `<i class="far fa-heart"></i>`
//         countEl.textContent ++

//     }else {
//         iconEl.innerHTML = `<i class="far fa-heart"></i>`
//         countEl.textContent --
//     }
// })









// for(let i=0; i< heartEl.length; i++ ) {
//     heartEl[i].addEventListener("click", toggle)
// }









// heartEl[i].addEventListener("click",function(){
//     console.log("help");
// })



// if (heartEl[i].addEventListener("click", function(){
// })){
//     console.log("processing");
// } else{
//     console.log("processing");
// }

