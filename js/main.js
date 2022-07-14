const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset >100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


// section-work-data
const counNumber=document.querySelectorAll(".count-numbers")
const speed=200;
counNumber.forEach((curElem) => {
const  updateNumber=()=>{
const targetNumber=parseInt(curElem.dataset.number);
// console.log(targetNumber);
const initialNum=parseInt(curElem.innerText);
// console.log(initialNum);
const incrementNum=Math.trunc(targetNumber/speed);
// console.log(incrementNum);
if (initialNum < targetNumber){
     curElem.innerText=`${incrementNum+initialNum}+`;
     setTimeout(updateNumber,50)
}
};


    updateNumber();
});































