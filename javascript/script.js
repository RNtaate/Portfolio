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
