
const header = document.querySelector(" #header ");
const intro = document.querySelector(" #intro ");
const product = document.querySelector(" #product ");
const brand = document.querySelector(" #brand ");
const comments = document.querySelector(" #comments ");


const lis = document.querySelectorAll(".sc li");
let posArr = [];

const posBox1 = header.scrollHeight;
const posBox2 = intro.scrollHeight;
const posBox3 = product.scrollHeight;
const posBox4 = brand.scrollHeight;
const posBox5 = comments.scrollHeight;

for(let el of posBox1){
    posArr.push(el.scrollHeight);
}







// window.addEventListener("scroll",()=>{
//     let scroll = widow.scrollY || window.pageYOffset;

    

// })