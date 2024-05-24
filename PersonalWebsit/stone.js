
let header=document.querySelector('.header');
let lastScrollpos=0;
let hideHeader=function(){
    const isScrollBottom = lastScrollpos < window.scrollY;
    if (isScrollBottom) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
      lastScrollpos=window.scrollY;
} 
window.addEventListener('scroll',function(){
    if(window.scrollY >= 50){
        header.classList.add("active");
        hideHeader(); 
    }else{
        header.classList.remove("active");   
    }
});
let services=document.getElementById('services');
let leftSlid=document.getElementById('left');
let Rightslid=document.getElementById('right');
let midlle=document.getElementById('midlle');


window.onscroll=function(){
  if(window.scrollY >= services.offsetTop - 400){
leftSlid.classList.remove("left");
Rightslid.classList.remove("right");
midlle.classList.remove("midlle");

  }else{
    leftSlid.classList.add("left");
    Rightslid.classList.add("right");     
    midlle.classList.add("midlle");
  }

  if(scrollY >= skills.offsetTop - 1200){
    let skills=document.getElementById('skills');
    let allskils=document.querySelectorAll(".skills-box .skill-progress span");
    let span1=document.querySelector(".span1");
    let span2=document.querySelector(".span2");
    let span3=document.querySelector(".span3");
    let span4=document.querySelector(".span4");
    let span5=document.querySelector(".span5");
      allskils.forEach(skill=>{
        skill.style.width=skill.dataset.progress;
        skill.innerHTML=skill.dataset.progress;
        span1.style.background=" rgb(31, 201, 31)";
        span2.style.background="rgb(166, 202, 57)";
        span3.style.background="rgb(214, 146, 0)";
        span4.style.background=" rgb(214, 43, 0)";
        span5.style.background="rgb(214, 146, 0)";
    });
    }  
  }
let menu=document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');
let section=document.querySelectorAll('section');
let navbarLinks=document.querySelectorAll('header nav a');
  menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// window.onscroll=()=>{
//   section.forEach(sec => {
//     let top =window.scrollY;
//     let offset=sec.offsetTop - 200;
//     let height=sec.offsetHeight;
//     let id=sec.getAttribute('id');
//     if(top >= offset){
//       navbarLinks.forEach(links =>{
//         links.classList.remove('active');
//        let href= document.querySelector('header nav a [href*=' + id + ' ]');
//        href.classList.add('active');
//       })
//     }
//   })
// }



