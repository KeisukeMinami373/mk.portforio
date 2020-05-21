'use strict';

// スクロール用
$(function(){
    $(window).on("scroll",function(){
      $(".scroll").each(function(index,el){
       if($(window).scrollTop() + $(window).height()/1 > $(this).offset().top){
         $(this).addClass('is-show');
       }
      });
    });
});

// ハンバーガーメニュー
(function($) {
    var $nav   = $('#nav-area');
    var $btn   = $('.toggle_btn');
    var $mask  = $('nav');
    var open   = 'open'; // class
    var $move =  $('.move')
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  
  $move.on('click', function () {
    $nav.removeClass( open );
    })
    
    
  } )(jQuery);
   

  // ページトップ
    $(document).ready(function() {
        var pagetop = $('.pagetop');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
                }
            });
            pagetop.click(function () {
                $('body, html').animate({ scrollTop: 0 }, 300);
                return true;
      });
    });



  //スムーズスクロール
  $(function() {
    let runScroll = function() {
        $('a[href^="#"]').click(function() {
            let speed = 400;
            let href = $(this).attr("href");
            let $target = $(href == "#" || href == "" ? 'html' : href);
            let position = $target.offset().top - 100;

            $('body,html').animate({
                scrollTop: position
            }, speed, 'swing');
            return false;
        });
    };
       runScroll();
    
    //ローダー用
        var loader = $('.loader-wrap');
    setTimeout(function(){
      loader.fadeOut();
      $('#wrap').fadeIn(2000);
    }, 1000);
    

      // スリック用
    $('.works-container').slick({
      arrows:true,
      autoplay:true,
      dots:true,
      speed:1500,
      easing:'swing',
      centerMode:true,
      centerPadding:'25%',
      prevArrow:'<div class="slide-btn prev-btn"></div>',
      nextArrow: '<div class="slide-btn next-btn"></div>',
      
      responsive:[
          {
              breakpoint:768,
              settings:{
                  centerPadding:'0%',
                  slidesToShow:1,
                  slidesToScroll:1,
              }
          }
      ]
  });
    
    
  });

 





  
 

  
