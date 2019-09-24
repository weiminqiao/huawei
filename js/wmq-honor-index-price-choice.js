/*
* @Author: admin
* @Date:   2019-09-23 18:44:18
* @Last Modified by:   admin
* @Last Modified time: 2019-09-23 18:55:08
*/

'use strict';
    $(document).ready(function(e) {
            ScrollBar.maxValue=5000;
            ScrollBar.Initialize();
        });

   var ScrollBar = {
       value: 0,
       maxValue: 5000,
       step: 1,
       currentX: 0,
       Initialize: function() {
           if (this.value > this.maxValue) {
               alert("给定当前值大于了最大值");
               return;
           }
           this.GetValue();
           $("#scroll_Track").css("width", this.currentX + 2 + "px");
           $("#scroll_Thumb").css("margin-left", this.currentX + "px");
           this.Value();
           $("#scrollBarTxt").html("￥"+ScrollBar.value + "———" + "￥"+ScrollBar.maxValue);
       },
       Value: function() {
           var valite = false;
           var currentValue;
           $("#scroll_Thumb").mousedown(function() {
               valite = true;
               $(document.body).mousemove(function(event) {
                   if (valite == false) return;
                   var changeX = event.clientX - ScrollBar.currentX;
                   currentValue = changeX - ScrollBar.currentX-$("#wmq-main-scollBar-box").offset().left;

                   $("#scroll_Thumb").css("margin-left", currentValue + "px");
                   $("#scroll_Track").css("width", currentValue + 2 + "px");
                   
                   if ((currentValue + 2) >= $("#scrollBar").width()) {
                       $("#scroll_Thumb").css("margin-left", $("#scrollBar").width() - 2 + "px");
                       $("#scroll_Track").css("width", $("#scrollBar").width() + 2 + "px");
                       ScrollBar.value = ScrollBar.maxValue;
                   } else if (currentValue <= 0) {
                       $("#scroll_Thumb").css("margin-left", "0px");
                 
                       $("#scroll_Track").css("width", "0px");
                   } else {
                       ScrollBar.value = Math.round(5000 * (currentValue / $("#scrollBar").width()));
                   }
                   $("#scrollBarTxt").html("￥"+ScrollBar.value + "———"+"￥"+ ScrollBar.maxValue);
               });
           });
          
           $(document.body).mouseup(function() {
               ScrollBar.value = Math.round(5000 * (currentValue / $("#scrollBar").width()));
               valite = false;
               if (ScrollBar.value >= ScrollBar.maxValue) ScrollBar.value = ScrollBar.maxValue;
               if (ScrollBar.value <= 0) ScrollBar.value = 0;
               $("#scrollBarTxt").html("￥"+ScrollBar.value + "———" + "￥"+ScrollBar.maxValue);
           });
       },
       GetValue: function() {
           this.currentX = $("#scrollBar").width() * (this.value / this.maxValue);
       }
   }