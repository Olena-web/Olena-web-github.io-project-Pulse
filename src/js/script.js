$(document).ready(function(){
    //$('.carousel__inner').slick({
        //speed: 1200,
        //adaptiveHeight: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        //fade: true,
        //cssEase: 'linear'
        //prevArrow:'<type="button" class="slick-prev"><img src="icons/chevron_left.jpg"></button>',
        //nextArrow:'<type="button" class="slick-next"><img src="icons/chevron_right.jpg"></button>',
        //responsive:[
           // {
                //breakpoint: 992,
               // settings: {
               // dots: true,
                //arrows: false,
               // }
           // } 
       // ],
      //});
  //})];
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
});
