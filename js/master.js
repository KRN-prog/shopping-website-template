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
  if (document.getElementById('topArticle')) {
    var ActualPreviewImg = document.getElementById('ActualPreviewImg');
    if (document.getElementById('previewImg1')) {
      var previewImg1 = document.getElementById('previewImg1');
      previewImg1.addEventListener('click', function() {
        ActualPreviewImg.setAttribute("src", "img/articleIMG/article1.png");
        if (document.getElementById('previewImg2') && document.getElementById('previewImg3')) {
          previewImg2.classList.remove('borderActualArticleView');
          previewImg3.classList.remove('borderActualArticleView');
        }else if (document.getElementById('previewImg2')) {
          previewImg2.classList.remove('borderActualArticleView');
        }else{}
        previewImg1.classList.add('borderActualArticleView');
      });
      if (document.getElementById('previewImg2')) {
        var previewImg2 = document.getElementById('previewImg2');
        previewImg2.addEventListener('click', function() {
          ActualPreviewImg.setAttribute("src", "img/articleIMG/article3.png");
          if (document.getElementById('previewImg3')) {
            previewImg3.classList.remove('borderActualArticleView');
          }
          previewImg1.classList.remove('borderActualArticleView');
          previewImg2.classList.add('borderActualArticleView');
        });
        if (document.getElementById('previewImg3')) {
          var previewImg3 = document.getElementById('previewImg3');
          previewImg3.addEventListener('click', function() {
            ActualPreviewImg.setAttribute("src", "img/articleIMG/article4.png");
            previewImg1.classList.remove('borderActualArticleView');
            previewImg2.classList.remove('borderActualArticleView');
            previewImg3.classList.add('borderActualArticleView');
          });
        }
      }
    }else{}
    console.log(ActualPreviewImg.alt);
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
