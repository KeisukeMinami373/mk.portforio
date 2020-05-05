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

     // ローダー用
  Pace.on('done', function(){
    $('.wrap').fadeIn();
  });

  $(function() {
    //スムーズスクロール
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
    // Document Ready
        runScroll();

  });

  $('.work-box').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    


  
 

  
