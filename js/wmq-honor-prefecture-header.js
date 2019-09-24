/*
* @Author: admin
* @Date:   2019-09-20 15:10:48
* @Last Modified by:   admin
* @Last Modified time: 2019-09-23 18:36:40
*/

'use strict';
 $(function(){
         $('.nli').children('li').eq(7).mouseover(function(event) {
             $(this).css('background','white');
             $('#spone').attr('class','iconfont icon-jiantou_down');
         $(this).children('.nli-one').slideDown('fast');
       });
        $('.nli').children('li').eq(7).mouseleave(function(event) {
            $(this).css('background','#f9f9f9');
            $('#spone').attr('class','iconfont icon-jiantou_up');
            $('.nli-one').slideUp('fast');
          });

        $('.nlis').children('li').eq(3).mouseover(function(event) {
                $(this).css('background','white');
                $('sptwo').attr('class','iconfont icon-jiantou_down');
            $(this).children('.nlis-one').slideDown('fast');
          });
        $('.nlis').children('li').eq(3).mouseleave(function(event) {
            $(this).css('background','#f9f9f9');
            $('sptwo').attr('class','iconfont icon-jiantou_up');
            $('.nlis-one').slideUp('fast');
          });

        $('.nlis').children('li').eq(4).mouseover(function(event) {
                $(this).css('background','white');
                $('#spthree').attr('class','iconfont icon-jiantou_down');
            $(this).children('.nlis-two').slideDown(1);
          });
        $('.nlis').children('li').eq(4).mouseleave(function(event) {
            $(this).css('background','#f9f9f9');
            $('#spthree').attr('class','iconfont icon-jiantou_up');
            $('.nlis-two').slideUp(1);
          });

        $('.nlis').children('li').eq(5).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.nlis-three').slideDown(1);
          });
        $('.nlis').children('li').eq(5).mouseleave(function(event) {
            $(this).css('background','#f9f9f9');
            $('.nlis-three').slideUp(1);
          });

        $('.nlis').children('li').eq(6).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.nlis-four').slideDown(1);
          });
        $('.nlis').children('li').eq(6).mouseleave(function(event) {
            $(this).css('background','#f9f9f9');
            $('.nlis-four').slideUp(1);
          });
        $('.classify-lis').children('li').eq(0).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.classifyphone').slideDown(1);
          });
        $('.classify-lis').children('li').eq(0).mouseleave(function(event) {
            $(this).css('background','');
            $('.classifyphone').slideUp(1);
          });
        $('.classify-lis').children('li').eq(1).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.classifyppc').slideDown(1);
          });
        $('.classify-lis').children('li').eq(1).mouseleave(function(event) {
            $(this).css('background','');
            $('.classifyppc').slideUp(1);
          });
        $('.classify-lis').children('li').eq(2).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.capacity').slideDown(1);
          });
        $('.classify-lis').children('li').eq(2).mouseleave(function(event) {
            $(this).css('background','');
            $('.capacity').slideUp(1);
          });
        $('.classify-lis').children('li').eq(3).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.house').slideDown(1);
          });
        $('.classify-lis').children('li').eq(3).mouseleave(function(event) {
            $(this).css('background','');
            $('.house').slideUp(1);
          });
        $('.classify-lis').children('li').eq(4).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.parts').slideDown(1);
          });
        $('.classify-lis').children('li').eq(4).mouseleave(function(event) {
            $(this).css('background','');
            $('.parts').slideUp(1);
          });
        $('.classify-lis').children('li').eq(5).mouseover(function(event) {
                $(this).css('background','white');    
            $(this).children('.rests').slideDown(1);
          });
        $('.classify-lis').children('li').eq(5).mouseleave(function(event) {
            $(this).css('background','');
            $('.rests').slideUp(1);
          });

 })
