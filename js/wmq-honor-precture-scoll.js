/*
* @Author: admin
* @Date:   2019-09-20 17:00:43
* @Last Modified by:   admin
* @Last Modified time: 2019-09-22 16:22:29
*/

'use strict';
  $(function(){
     var wmqHotPhone=$('.wmq-hot-phone').offset().top-$(window).height();
     var wmqCoolDigital=$('.wmq-cool-digital').offset().top-$(window).height();
     var wmqBeau=$('.wmq-beau').offset().top-$(window).height();
     var wmqMod=$('.wmq-mod').offset().top-$(window).height();

     var wmqFurniture=$('.wmq-furniture-ecological').offset().top-$(window).height();
     var wmqSurprise=$('.wmq-super-surprise').offset().top-$(window).height();
     var wmqYoung=$('.wmq-young').offset().top-$(window).height();
   
    window.addEventListener("scroll", function(event) {

     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

      // 回到顶部
      $('.wmq-totop').click(function(event) {
        $('html,body').animate({
          'scrollTop':'0px'
        },200)
      });
     $(window).scroll(function () {
         if($(window).scrollTop()>200){
             $('.wmq-daohang-box').fadeIn();
         }else{
             $('.wmq-daohang-box').fadeOut();
         }


         if($(this).scrollTop()>wmqYoung){
             $('.wmq-daohang-uls li').eq(6).css('background', 'pink');
         }else if($(this).scrollTop()>wmqSurprise){
             $('.wmq-daohang-uls li').eq(5).css('background', 'pink');
         }else if($(this).scrollTop()>wmqFurniture){
             $('.wmq-daohang-uls li').eq(4).css('background', 'pink');
         }
         else if($(this).scrollTop()>wmqMod){
             $('.wmq-daohang-uls li').eq(3).css('background', 'pink');
         }
         else if($(this).scrollTop()>wmqBeau){
             $('.wmq-daohang-uls li').eq(2).css('background', 'pink');
         }
         else if($(this).scrollTop()>wmqCoolDigital){
             $('.wmq-daohang-uls li').eq(1).css('background', 'pink');

         }else if($(this).scrollTop()>wmqHotPhone){
             $('.wmq-daohang-uls li').eq(0).css('background', 'pink');
         }
           // 点击层导航栏切换回到相应的部分
         var top = $(document).scrollTop();          
         var items = $("section").find(".wmq-test");    
         var curId = "";  
         items.each(function () {
             var m = $(this);                        
             var mHeight = m.height();
             var itemsTop = m.offset().top;        
             if (top >= itemsTop - mHeight/2) {
                 curId = "#" + m.attr("id");
                 if(curId == "#wmqtest7"){
                     var menu = $(".wmq-daohang-box");
                     var curLink = menu.find(".sidenav");
                     curLink.removeClass("sidenav");
                     menu.find("[href='#wmqtest7']").addClass("sidenav");
                 }else{
                     //给相应的楼层设置cur,取消其他楼层的cur
                     var menu = $(".wmq-daohang-box");
                     var curLink = menu.find(".sidenav");
                     if (curId && curLink.attr("href") != curId) {
                         curLink.removeClass("sidenav");
                          menu.find("[href='+ curId + ']").addClass("sidenav");
                     }
                 }
             } else {
                 return false;
             }
         });
     });
 });

})