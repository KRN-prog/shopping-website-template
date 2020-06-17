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
  /* ==================== */
  if (document.getElementById('desc')) {
    var descArticle = document.getElementById('desc');
    var descTxtArticle = document.getElementById('descTxt');
    var moreInfoArticle = document.getElementById('moreInfo');
    var moreInfoTxtArticle = document.getElementById('moreInfoTxt');
    moreInfoTxtArticle.classList.add('none');
    moreInfoArticle.addEventListener('click', function() {
      descTxtArticle.classList.add('none');
      moreInfoTxtArticle.classList.remove('none');
      descArticle.classList.remove('activeInfo');
      moreInfoArticle.classList.add('activeInfo');
    });
    descArticle.addEventListener('click', function() {
      moreInfoTxtArticle.classList.add('none');
      descTxtArticle.classList.remove('none');
      moreInfoArticle.classList.remove('activeInfo');
      descArticle.classList.add('activeInfo');
    });

    $('.multi-item-carousel').carousel({
      interval: false
    });

    $('.multi-item-carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
      	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  }
}
