const header = document.querySelector("#header");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");
const logo = header.querySelector(".inner .wrap")


const brand = document.querySelector("#brand");
const panel = brand.querySelector(".panel");
// const panel_li = brand.querySelector(".panel li");
const btns = brand.querySelectorAll(".wrap .btns li");



// 헤더 모바일 메뉴, 햄버거 버튼

btnCall.addEventListener("click",(e)=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
    logo.classList.toggle("on");

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



