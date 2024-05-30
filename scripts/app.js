const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuArow= document.querySelector(".submenu-arow");
const bars= document.querySelector(".bars");
const cart= document.querySelector(".cart");
const barsOpen = document.querySelector(".bars-open");
const cartOpen = document.querySelector(".cart-open");
const barsClose = document.querySelector(".close");
const cartClose = document.querySelector(".cart-close");
const submenu= document.querySelector(".submenu");
let btn;
const overlay= document.querySelector(".overlay")
toggleThemeBtn.forEach(btn  =>{
    btn.addEventListener('click',function()
    {
        if (localStorage.theme === "dark")
        {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } 
        else
         {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    }
)} )


submenuArow.addEventListener("click",() =>
{   
    submenu.classList.toggle("submenu-open");
})

bars.addEventListener("click",()=>
{
    barsOpen.classList.remove("-right-64");
    barsOpen.classList.add("right-0");
    overlay.classList.add("overlay-show")
})
barsClose.addEventListener("click",() =>
{
    barsOpen.classList.add("-right-64");
    barsOpen.classList.remove("right-0");
    overlay.classList.remove("overlay-show")
})
overlay.addEventListener("click",() =>
{
    barsOpen.classList.add("-right-64");
    barsOpen.classList.remove("right-0");
    cartOpen.classList.add("-left-64");
    cartOpen.classList.remove("left-0");
    overlay.classList.remove("overlay-show");
})
cart.addEventListener("click",()=>
{
    cartOpen.classList.add("left-0");
    cartOpen.classList.remove("-left-64");
    overlay.classList.add("overlay-show")
})
cartClose.addEventListener("click",() =>
{
    cartOpen.classList.add("-left-64");
    cartOpen.classList.remove("left-0");
    overlay.classList.remove("overlay-show");
})