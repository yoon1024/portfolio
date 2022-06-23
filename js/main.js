const brand = document.querySelector("#brand");
const panel = brand.querySelector(".panel");
// const panel_li = brand.querySelector(".panel li");
const btns = brand.querySelectorAll(".wrap .btns li");




btns.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        panel.style.marginLeft = -100 * [index] + "%";
    
        for(let btn of btns){
            btn.classList.remove("on");

        }
        el.classList.add("on");

    })
})



