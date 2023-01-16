$('.gnb li').on('mouseenter',function(){
  let i = $(this).index()
    $('.gnbinner_wrap').stop().slideDown()
    $('.gnbinner_wrap').children().eq(i).css({
      'display' : 'block'
    }).siblings().css({
      'display' : 'none'
    })
    $(this).children().addClass('active')
    


})

$('.gnb li').on('mouseout',function(){
    $('.gnbinner_wrap').stop().slideUp()
  $(this).children().removeClass('active')
})






$('.main3_slide_wrap_c').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  arrow : true,
  nextArrow : '.main3_btn',
  prevarrow : false,
  asNavFor: '.main2_slid_wrap_cimg'

})

// $('.main1slid_2').slick({

//   slidesToShow: 1,
//   slidesToScroll: 1,
//   nextArrow : '.main_next',
//   arrow : true,})



$('.main3_slide_wrap_s').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  arrow : true,
  nextArrow : '.main3_btn',
  prevarrow : false

})


  $('.aside_aco>a').click(function(e){
    e.preventDefault();
    $(this).siblings('.accodion1').stop()
    .slideToggle().parent().siblings()
    .children('.accodion1').stop().slideUp();
  })

  let onOff = true;

  $('.navBtn').click(function(){
    onOff = !onOff;
    if(onOff == false){
    $('aside').animate({
      'right' : '0'
    })
  }else if(onOff == true){
    $('aside').animate({
      'right' : '-100%'
    })
  }
  })


  // $('.main3_wrapin').slick({
  //   arrows :true,
  //   slidesToShow: 1,
  //   nextArrow : '.nextbtn',
  //   prevArrow : '.nextbtn2',
  // })
    

  // })

  // $('.main3 ul li').click(function(){

  //   let i = $(this).index()

  //   $('.main3_slidwrap').children().eq(i).css({
  //     'display' :'block'
  //   }).siblings().css({
  //     'display' :'none'
  //   })

  //   $(this).addClass('active').siblings().removeClass('active')


  // })

  $('.main3 ul li').click(function(){
      let i = $(this).index()

      $('.main3_wrapin').children().eq(i).fadeIn().siblings().fadeOut()

      $(this).addClass('active').siblings().removeClass('active')

      $('.main3_wrap').children().eq(i).fadeIn().siblings().fadeOut();

      $('.main3_wrap_pc').children('.main3_PC_TXT').eq(i).addClass('active')
      .siblings().removeClass('active')

      // $('.main3_wrapin').children().eq(i).css({
      //   'display' :'block'
      // }).siblings().css({
      //   'display' :'none'
      // })


  })