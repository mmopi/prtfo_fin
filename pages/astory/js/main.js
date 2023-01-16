
// $('.main4slider').on('afterChange',function(event, slick, currentSlide){

//    let _getCurrent = $('.main4slider').find(
//       "[data-slick-index='" + currentSlide + "']"
//    );
//    console.dir(_getCurrent);

//       _getCurrent.css({'width' : '400px'}).siblings().css({'width' : '268px'});



// });


$('.tab_menu li').mouseover(function(){
   let i = $(this).index();

   $(this).addClass('active').siblings().removeClass('active')
   $('.tab_container').slideDown();
   $('.tab_container_wrap').children().eq(i).show().siblings().hide();
   

});
$('.tab_container').mouseleave(function(){
   $('.tab_container').slideUp();
});







$('.slider_con').children().eq(0).slick({
   'centerMode': true,
   'variableWidth': true,
   'slidesToShow': 5,
   
   'nextArrow':'.main_4_btn1',
   'prevArrow':'.main_4_btn2', 

    });



$('.main_4 .tab_btn').children().click(function(){
 
   let i = $(this).index();
   $(this).addClass('active').siblings().removeClass('active');

   $('.main4slider').hide();
   $('.main4slider').eq(i).show().slick({
      'centerMode': true,
      'variableWidth': true,

      'slidesToShow': 5,
      'nextArrow':'.main_4_btn1',
      'prevArrow':'.main_4_btn2', 

       })
   

});




$('.main5slider').children().eq(0).slick({
   slidesToShow : 5,        // 한 화면에 보여질 컨텐츠 개수
   slidesToScroll : 1,
   arrows : true, //나중에 true
   autoplay : true,            // 자동 스크롤 사용 여부
   autoplaySpeed : 3000,
   nextArrow:$('.main_5_btn1'),
   prevArrow:$('.main_5_btn2'), 
  
});

$('.main_5 .tab_btn').children().click(function(){
   let i = $(this).index();
   $(this).addClass('active').siblings().removeClass('active');

   $('.main5slider').children().hide();
   $('.main5slider').children().eq(i).show().slick({
      slidesToShow : 5,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,
      arrows : true, //나중에 true
      autoplay : true,            // 자동 스크롤 사용 여부
      autoplaySpeed : 3000,
      nextArrow:$('.main_5_btn1'),
      prevArrow:$('.main_5_btn2'), 
     
  });
})//main5

$('.main_6_cont').eq(0).slick({
   slidesToShow : 4,        // 한 화면에 보여질 컨텐츠 개수
   slidesToScroll : 1,
   arrows : true, //나중에 true
   nextArrow:$('.main_6_btn1'),
   prevArrow:$('.main_6_btn2'), 
  
});




/*


    _slick.slick({
        'dots':true,
        nextArrow:$('.main_1_btn2'),
        prevArrow:$('.main_1_btn1'),

    });

*/

   

   

//     $('.slider_con>div').slick({
// 'centerMode': true,
// 'centerPadding': '60px',
// 'slidesToShow': 6,
   // arrows : true,
   // nextArrow:$('.main_5_btn1'),
   // prevArrow:$('.main_5_btn2'), 

// responsive: [
// {
// breakpoint: 768,
// settings: {
// arrows: false,
// centerMode: true,
// centerPadding: '80px',
// slidesToShow: 3
// }
// },
// {
// breakpoint: 480,
// settings: {
// arrows: false,
// centerMode: true,
// centerPadding: '80px',
// slidesToShow: 1
// }
// }
// ]
//});

$('.main_side1').click(function(){

  $('.pop_cal').fadeIn().css('display','flex');


})


$('.pop_up_cancel, .pop_close_wrap').click(function(){
  $('.pop_cal').fadeOut();
})






$('.main_7_phto').children().click(function(){


  let picData = $(this).data('bg');

  let bgUrl = 'img/';


  $(this).parent().parent().siblings('.main_7_timg').css({
    'backgroundImage' : `url(${bgUrl}${picData})` 
  });

});//사진바꾸기 


   (function() {
      $("[data-slider-wrap]").each(function() {
         var _this = $(this),
            _slick = _this.find("[data-slider]");
   
         function typeInit(target, str, destroy) {
            var typedOptions = {
                  strings: [str],
                  typeSpeed: 30,
                  cursorChar: ""
               },
               _typedjs = new Typed(target, typedOptions);
   
            if (destroy === true) {
               _typedjs.destroy();
            }
         } //typeInit END
   
         _slick
            .on("init", function(event, slick) {
               var _current = _slick.find("[data-slick-index='0']"),
                  _input = _current.find("[data-typed]"),
                  _inputNative = _input[0],
                  _data = _input.data("typed");
   
               var _input2 = _current.find("[data-typed2]"),
                  _inputNative2 = _input2[0],
                  _data2 = _input2.data("typed2");
   
               typeInit(_inputNative, _data);
               typeInit(_inputNative2, _data2);
            })
            .on("afterChange", function(event, slick, currentSlide) {
               var _getCurrent = _slick.find(
                     "[data-slick-index='" + currentSlide + "']"
                  ),
                  _getInput = _getCurrent.find("[data-typed]"),
                  _getInputNative = _getInput[0],
                  _getData = _getInput.data("typed"),
                   
                  _getAll = $("[data-slick-index]"),
                  _getAllInput = _getAll.find("[data-typed]"),
                  _getAllInputNative = _getAllInput[0];
   
               //destroy
               typeInit(_getAllInputNative, _getData, true);
               _getAllInput
                  .html("")
                  .next().remove();
   
               //init
               typeInit(_getInputNative, _getData);
            });
   
         _slick.slick({
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: true,
            dots: true,
            nextArrow:$('.main_1_btn2'),
            prevArrow:$('.main_1_btn1')
         });
      });
   })();
   
 
// ****************밑은 탭메뉴

