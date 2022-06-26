const header = document.querySelector("#header");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");
const logo = header.querySelector(".inner .wrap")
const copy = header.querySelector(".inner .copy")




const brand = document.querySelector("#brand");
const panel = brand.querySelector(".panel");
const btns = brand.querySelectorAll(".wrap .btns li");



const product = document.querySelector("#product");
const wrap = product.querySelector(".wrap");
const article = product.querySelectorAll(".wrap article");
const prev = product.querySelector(".prev");
const next = product.querySelector(".next");





// 헤더 모바일 메뉴, 햄버거 버튼
btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
    logo.classList.toggle("on");
    copy.classList.toggle("on");

})



// brand_slide
btns.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        panel.style.marginLeft = -100 * [index] + "%";
    
        btns.forEach((el)=>{
        el.classList.remove("on");})

        el.classList.add("on");

    })
})



//product 슬라이드



prev.addEventListener("click",(e)=>{
    e.preventDefault();


        new Anim(wrap,{
            prop : 'left',
            value : "33.333%",
            duration : 700,
            callback :()=>{
                wrap.style.left = "0%";
                wrap.prepend(wrap.lastElementChild);
            }
        })


    
})



next.addEventListener("click",(e)=>{
    e.preventDefault();

    new Anim(wrap,{
        prop : 'left',
        value : "-33.333%",
        duration : 700,
        callback :()=>{
            wrap.style.left = "0%";
            wrap.append(wrap.firstElementChild);
        }
    })


})



