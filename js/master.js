window.onload = function() {
  var menuContent = document.getElementById('menuContent');
  var closeBurgerMenu = document.getElementById('closeBurgerMenu');
  var bgMenuBurger = document.getElementById('bgBurgerMenu');
  $('#menu').on({
    click:function(){
      $('#menuContent').slideDown(750);
      menuContent.classList.remove('none');
      bgMenuBurger.classList.remove('none');
    }
  });
  $('#closeBurgerMenu').on({
    click:function(){
      $('#menuContent').slideUp(750);
      menuContent.classList.add('none');
      bgMenuBurger.classList.add('none');
    }
  });
  $('#bgBurgerMenu').on({
    click:function(){
      $('#menuContent').slideUp(750);
      menuContent.classList.add('none');
      bgMenuBurger.classList.add('none');
    }
  });
}
/* ==================== */
