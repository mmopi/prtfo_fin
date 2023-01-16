

function mobile(){

  $('.main2_slid_wrap_t').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    fade :true,
    nextArrow : '.main1_arrow',
    prevArrow : '.nextbtnnone',
  });



    $('.main2 ul li').click(function(){

      let i = $(this).index()
      $(this).addClass('active').siblings().removeClass('active');
      
      $('.sliderWrap').children().eq(i).show()
      .not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade :true,
        arrows : true,
        nextArrow : '.main1_arrow',
        prevArrow : '.nextbtnnone', 
        
      })
      .siblings().hide().slick('unslick');

     
      });//main2


      $('.main1slid').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : '.main_next',
        prevArrow : '.nextbtnnone',
        arrow : true,
        
      
      });//배너



}//mobile

function pc(){

    $('.main1slid_2').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow : '.main_next',
        prevArrow : '.nextbtnnone',
        arrow : true,
        fade : true
        
      
      })

    $('.main2 ul li').click(function(){

        let i = $(this).index()
        $(this).addClass('active').siblings().removeClass('active');
    


        $('.sliderWrap').children().hide();
        
        $('.sliderWrap').children().eq(i).show()
        .not('.slick-initialized').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow : true,
          fade :true,
          nextArrow : '.main1_arrow',
          prevArrow : '.nextbtnnone'
          
        });


        $('.sliderwrap1').children().hide();
        
        $('.sliderwrap1').children().eq(i).show()
        .not('.slick-initialized').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrow : false,
          asNavFor: '.main3_slide_wrap_c'
          
        });
    


  
  
  
    
      });//main2



    //   $('.main2 ul li').click(function(){

    //     let i = $(this).index()

    
    //     $('.sliderwrap1').children().eq(i).css({
    //       'display' : 'block'
    //     })
    //     .slick({
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       arrow : false,
    //      
          
    //     }).siblings().css({
    //       'display' : 'none'
    //     }).slick('unslick');
    
    
    
    //   });//main2


      $('.main2_slid_wrap_cimg').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        asNavFor: '.main2_slid_wrap_c'
       
      
      });

      $('.main2_slid_wrap_timg').slick({
  
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        asNavFor: '.main2_slid_wrap_t'
       
      
      });
      $('.main2_slid_wrap_fimg').slick({
  
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        asNavFor: '.main2_slid_wrap_f'
       
      
      });

    
$('.main2_slid_wrap_t').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  arrow : true,
  fade :true,
  nextArrow : '.main1_arrow',
  prevArrow : '.nextbtnnone',
  
  asNavFor: '.main2_slid_wrap_timg',
  
 
  

});
$('.main2_slid_wrap_c').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  arrow : true,
  fade :true,
  nextArrow : '.main1_arrow',
  prevArrow : '.nextbtnnone',
  
  asNavFor: '.main2_slid_wrap_cimg',
  
 
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        nextArrow : '.main1_arrow',
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        
        
      }
    }
  ]

})
$('.main2_slid_wrap_f').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  arrow : true,
  fade :true,
  nextArrow : '.main1_arrow',
  prevArrow : '.nextbtnnone',
  
  asNavFor: '.main2_slid_wrap_fimg',
  
 
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        nextArrow : '.main1_arrow',
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        
        
      }
    }
  ]

})



}//pc

function common(){

    

  
  
  
  
} //common







let winWidth = $(window).width();

if(winWidth < 1024){

    mobile();

}else{
    pc();
}

common();