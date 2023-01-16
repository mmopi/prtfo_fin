$('.main3_slid').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dotClass:'main3_sliderbtn li',
    nextArrow:false,
    prevArrow:false
  });



  $( document ).ready( function() {
  $('.main7_slider').slick({
    centerMode: true,
    centerPadding: '530px',
    slidesToShow: 1,
    swipeToSlide:true,
    variableWidth: true,
    nextArrow:('.main6_btn2'),
    prevArrow:('.main6_btn1'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
            arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });  
  })
//main4 탭영역

$('.color_btns li').on('click',function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.main_img_con').children().eq(i).addClass('on').siblings().removeClass('on');
    $(this).addClass('active').siblings().removeClass('active')



    if(i == 1){
        $('.main4bg').addClass('on');
    }else{
        $('.main4bg').removeClass('on')
    }

});


//main5 버튼

let colors = ['#202032', '#C7C7C7' , '#D8B28F', '#CD3E98'];
$('.colors li').on('click',function(e){
    e.preventDefault();
    let i = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');
    $('.main5_img').eq(i).show().siblings().hide();
    






    $('.main5_bg span').css({
        'backgroundColor' : colors[i]
    }).animate({
        'width' : '100%'
    },function(){
        $('.main5_bg').css({
            'backgroundColor' : colors[i]
        });
        $('.main5_bg span').css({
            'width' : 0
        })
    });


});


$('.gnb>ul>li').on('mouseenter',function(){
  let i = $(this).index();
  $('.gnb_menu').stop().slideDown();

  $('.gnb_menuin').eq(i).css({
    'display' : 'flex'
  }).siblings().hide();

});

$('header').on('mouseleave',function(){
  

  $('.gnb_menuin').stop().hide();
  $('.gnb_menu').slideUp();

});



$('.needSub div').on('mouseover',function(){

  let i = $(this).index();
  $('.gnb_txt1').hide();
  $('.gnb_txt1').eq(i).show();


});

let onOffForm = true
$('.iconClick').click(function(e){
e.preventDefault();
  onOffForm = !onOffForm;

  if(onOffForm == false){
  $('.icon_none form').animate({
    'width' : '130px'
  });
  $('.icon .show').hide();
  $('.icon .hide').show();
}else{
  $('.icon_none form').animate({
    'width' : 0
  });
  $('.icon .show').show();
  $('.icon .hide').hide();
}
});


$('.header_inner').click(function(){
  $('.header_inner_in').toggle();
});

$('.inner_txt').click(function(){
  let txt = $(this).children('a').text();
  $('.header_inner h4').text(txt);
  $('.header_inner_in').hide();
  $(this).addClass('active').siblings().removeClass('active');
})



$('.main10_btn button').on('click',function(){
  
  let i = $(this).index();
  $('.main10_thumbnail').children().eq(i).toggle();

  $(this).find('.plus').toggle();
  $(this).find('.minus').toggle();

})



//main8 파우치 구성용품

$('.main8_slid').slick({
    infinite: true,
  slidesToShow: 1,
  fade: true,
  nextArrow:('.main8_btn'),
  prevArrow:false,

});


//AOS

AOS.init({

});

$('.main6_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
});


$('.vidOn').on('click',function(e){
  e.preventDefault();
  $(this).parents('.section').find('.view').fadeIn();

   let url = $(this).children('.key').text();
  let iframe = `<iframe src="${url}"></iframe>`

  $(this).parents('.section').find('.view').find('figure').html(iframe);


});


$('.closeWrap, .closeBtn').on('click',function(){
  $(this).parents('.view').fadeOut();
})