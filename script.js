let getSt = document.querySelector(".svged")
let getSp = document.querySelector(".parth")
let title1 = document.querySelector(".title-1")
let spanning = document.querySelector(".spanned")
let anibox = document.querySelector(".box")
let addedtask = document.querySelector(".addtask")
let getStminus = document.querySelector("svgedminus")
addedtask.classList.add("none")
let speed = 0.5;
function startAnimation() {
  if (!title1.classList.contains("none")) {
    getSt.classList.add("animateplus");
    title1.classList.add("fadeout")
    setTimeout(() => {
     getSt.innerHTML = `<path  d="M3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM7 11.5H17V12.5H7Z" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" />
                      `
      getSt.classList.remove("animateplus");

      anibox.classList.add("createbox");
      title1.classList.add("none");

    }, 1450);
    setInterval(() => {

      spanning.classList.add("fix")
      addedtask.style.display = "inline-block"
      anibox.classList.add("none");
      title1.classList.remove("fadeout")
      spanning.classList.add("fixed");
    }, 2500);
  }
  else
     if(title1.classList.contains("none"))
    {
      addedtask.style.display = "none"
   
    anibox.classList.remove("none")
    spanning.classList.remove("fixed");
    spanning.classList.remove("none")
    getSt.classList.add("antifix")
   
    anibox.classList.add("removebox");
     setTimeout(() => {
       console.log('achha nice');
       anibox.classList.add("none")
      
       title1.classList.remove("none");
       title1.classList.add("fadein");
       getSt.innerHTML = ` <path class="parth "
                            d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM11.5 7V11.5H7V12.5H11.5V17H12.5V12.5H17V11.5H12.5V7H11.5Z"
                            fill="" />`
                            spanning.classList.remove("fixed");
     }, 1000);

    }
  

}






 

  getSt.onclick = startAnimation;
 
function removeAnimation(){

}

  getStminus.addEventListener("click", () => {
    if(title1.classList.contains("none")){
  addedtask.classList.add("none");
  anibox.classList.remove("none")
  getStminus.classList.remove("fixed")
  getStminus.classList.add("antifix")
  console.log('achha nice');
  

  }

  }
  )