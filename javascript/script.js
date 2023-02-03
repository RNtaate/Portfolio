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

  let revealElement = document.querySelector(".header-heading-inner-div");
  let greetingHeading = document.querySelector(".hey-there");
  let stackHeading = document.querySelector('.stack-heading');
  let socialDiv = document.querySelector(".header-social-media");
  let about_heading = document.querySelector(".about-h1");
  let about_paragraph = document.querySelector(".about-p");
  let resume_button = document.querySelector(".resume-btn");

  let headerArray = [revealElement, greetingHeading, stackHeading, socialDiv, about_heading, about_paragraph, resume_button]

  console.log(headerArray); 

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    })
  }, {
    threshold: 0,
  })

  headerArray.forEach( element => {
    observer.observe(element)
  })

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
