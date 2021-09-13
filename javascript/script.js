function openMenu() {
  document.getElementById('mobile-menu').style.width = '100%';
}

function closeMenu() {
  document.getElementById('mobile-menu').style.width = '0%';
}

function closeModel() {
  elements = document.getElementsByClassName('card-wrapper-div');
  for(var i = 0; i < elements.length; i ++){
    elements[i].style.visibility = 'hidden';
    elements[i].style.opacity = '0';
    elements[i].style.transform = 'scale(0)';

    elements[i].style.top = '-100%';
  }
}

let reveal = () => {
  let header = document.querySelector("header");
  let myBottom = header.getBoundingClientRect().bottom;
  let headerHeight = header.getBoundingClientRect().height;
  let windowHeight = window.innerHeight;
  
  let about = document.querySelector('.about-section');
  let aboutHeading = document.querySelector('.about-h1');
  let aboutPar = document.querySelector('.about-p');
  let aboutResume = document.querySelector('.resume-btn');
  let aboutTop = about.getBoundingClientRect().top;
  let aboutBottom = about.getBoundingClientRect().bottom;
  console.log(windowHeight);
  console.log('Now the top is', aboutTop);

  let revealElement = document.querySelector(".header-heading-inner-div");
  let greetingHeading = document.querySelector(".hey-there");
  let stackHeading = document.querySelector('.stack-heading');
  let socialDiv = document.querySelector(".header-social-media");

  if(myBottom > headerHeight) {
    revealElement.classList.add('active');
    greetingHeading.classList.add('active');
    stackHeading.classList.add('active');
    socialDiv.classList.add('active');
  }
  else {
    revealElement.classList.remove('active');
    greetingHeading.classList.remove('active');
    stackHeading.classList.remove('active');
    socialDiv.classList.remove('active');
  }

  if ((aboutTop < (windowHeight - 150)) && (aboutBottom > (windowHeight - 150))) {
    aboutHeading.classList.add('active');
    aboutPar.classList.add('active');
    aboutResume.classList.add('active');
  }
  else {
    aboutHeading.classList.remove('active');
    aboutPar.classList.remove('active');
    aboutResume.classList.remove('active');
  }
}

window.onload = function() {
  list = document.getElementsByClassName('see-btn');
  for(var i = 0; i < list.length; i ++){
    list[i].addEventListener('click', function(e){
      var att = this.getAttribute('id')
      let card = document.getElementById('card' + att.toString());

      card.style.visibility = 'visible';
      card.style.opacity = '1';
      card.style.top = '0';
      card.style.transform = 'scale(1)';
      e.preventDefault();
    });
  }

  reveal();
}

function jumpToSection(place = '') {
  let sec;
  if (place == '') {
    sec = document.querySelector('html');
  }
  else {
    sec = document.getElementById(place);
  }
  sec.scrollIntoView();
}

window.addEventListener('scroll', reveal);