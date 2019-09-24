$(function(){
       // 主轮播
        var num = 0;
        var timerone;
        var a=0;
        var ber=0;
        function go(){
        timerone=setInterval(function(){
                 num++;
                 if(num>6){
                   num=0;
                   $('#wmq-hot-uls').css('margin-left',-1920*num+'px');
                   num=1;
                 }
                 $('#wmq-hot-uls').animate({
                   'margin-left':-1920*num+'px'
                 }, 1000)
                 ber++;
                 $('.wmq-hot-lis').children('li').siblings('li').removeClass('wmq-selected');
                 if(ber>5){
                   ber=0;
                 }
                 $('.wmq-hot-lis').children('li').eq(ber).addClass('wmq-selected');

              },2000)
            }
            go();

            $('.wmq-hot').mouseenter(function(event) {
              console.log(1);
              clearInterval(timerone);
              console.log(2);
            });

            $('.wmq-hot').mouseleave(function(event) {
              console.log(3);
              go();
            });

                
            $('#wmq-hot-left').click(function(event) {
                num--;
                if(num<0){
                  num=6;
                  $('#wmq-hot-uls').css('margin-left',-1920*num+'px');
                  num=5;
                }
                $('#wmq-hot-uls').animate({
                  'margin-left':-1920*num+'px'
                }, 300)

                ber--;
                $('.wmq-hot-lis').children('li').siblings('li').removeClass('wmq-selected');
                if(ber<0){
                  ber=5;
                }
                $('.wmq-hot-lis').children('li').eq(ber).addClass('wmq-selected');
              });

            $('#wmq-hot-right').click(function(event) {
                num++; 
                if(num>6){
                  num=0;
                  $('#hot-uls').css('margin-left',-1920*num+'px');
                  num=1;  
                }
                $('#wmq-hot-uls').animate({
                  'margin-left':-1920*num+'px'
                }, 300)

                ber++;
                $('.wmq-hot-lis').children('li').siblings('li').removeClass('wmq-selected');
                if(ber>5){
                  ber=0;
                }
                $('.wmq-hot-lis').children('li').eq(ber).addClass('wmq-selected');
              });

            $('.wmq-hot-lis').children('li').click(function(event) {
              $(this).addClass('wmq-selected');
              $(this).siblings('li').removeClass('wmq-selected');
              a = $(this).index();
              num=a;
                    ber=a;
              $('#wmq-hot-uls').animate({
                  'margin-left':-1920*num+'px'
                }, 1000)
            });





      var aq=0;  
            $('.wrbr1').click(function(event) {
              console.log(1);
              aq++;
              $('.wrbl1').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis1').animate({
                'margin-left':-1210*aq+'px'
              }, 300) 
            });
            $('.wrbl1').click(function(event) {
              aq--;
              $('.wrbr1').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis1').animate({
                'margin-left':-1210*aq+'px'
              }, 300) 
            });

             var ag=0;  
            $('.wrbr2').click(function(event) {
              console.log(1);
              ag++;
              $('.wrbl2').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis2').animate({
                'margin-left':-1210*ag+'px'
              }, 300) 
            });
            $('.wrbl2').click(function(event) {
              ag--;
              $('.wrbr2').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis2').animate({
                'margin-left':-1210*ag+'px'
              }, 300) 
            });

             var aa=0;  
            $('.wrbr3').click(function(event) {
              console.log(1);
              aa++;
              $('.wrbl3').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis3').animate({
                'margin-left':-1210*aa+'px'
              }, 300) 
            });
            $('.wrbl3').click(function(event) {
              aa--;
              $('.wrbr3').css('display', 'block');
              $(this).css('display', 'none');
              $('.wlis3').animate({
                'margin-left':-1210*aa+'px'
              }, 300) 
            });




      $('#wmq-right-b').click(function(event) {
        console.log(1)
           $('#wmq-uls-box').css({'margin-left':'(-240)'*5*num2+'px'});
      });

      $('.mod-productDrag .layout').mouseenter(function(event) {
         clearInterval(aa);
        /* Act on the event */
      });
      // $('#layout1').on({
      //     mouseenter:function(){
      //       console.log(2);
      //       clearInterval(aa);
      //       console.log(4)
      //     },
      //     mouseleave:function(){
      //       console.log(3)
      //       gogo();
      //     }
      // })

    
})

