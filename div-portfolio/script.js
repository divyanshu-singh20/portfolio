/*=======toggle icon navbar======*/

let menuicon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuicon.onclick =() =>{
  menuicon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
} 
/*=======scroll section active link======*/
 let sections=document.querySelectorAll('section');
 let navlinks=document.querySelectorAll('header nav a');
 window.onscroll =() =>{
  sections.forEach(sec =>{
    let top =window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top >=offset && top<offset +height)
    {
navlinks.forEach.apply(links =>{
      links.classList.remove('active');
      document.querySelector('header nav a[href*='+id+']').classList.add('active');});
    };
  });
  /*=================sticky navbar===============*/
  let header =document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);

   /*=================remove togle  navbar===============*/
menuicon.classList.remove('fa.xmark');
navbar.classList.remove('active');

 };
  /*=================scroll revel===============*/
  ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
  });
  ScrollReveal().reveal('.home_content,heading',{ orgin:'top'});
  ScrollReveal().reveal('.home_img,.services_container,.portfolio_box,.contect form',{ orgin:'buttom'});
  ScrollReveal().reveal('.home_content h1,.about_img',{ orgin:'left'});
  ScrollReveal().reveal('.home_content p,.about_content',{ orgin:'right'});
 
  /*=================click button of home page===============*/
  const btn=document.getElementById('click_btn');
  btn.addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
   /*=================sticky up button===============*/
let footerIconTop=document.getElementsByClassName("footer_icontop");