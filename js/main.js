
$(document).ready(function () {
         $('nav').hide();

         $('.tap').click(function(){
             $('nav').slideToggle();
         });
     });    

     $(function () {
         

         $(window).scroll(function () {
             var ws = $(this).scrollTop();
             console.log(ws);

             var video = $('#video').offset().top;
             if(ws > video-100){
                $('#box').css('transform', 'translateX(-100px)').css('opacity', '0');
             }   
             
             
                var box = $('#box').offset().top;
             if (ws < box - 100) {
                 $('#box').css('transform', 'translateX(0px)').css('opacity', '1');
                 $('#second p').css('transform', 'translateY(60px)').css('opacity', '0');
             }

             var second=$('#second').offset().top;
             if (ws > second - 300) {
                 $('#box').css('transform', 'translateY(-100px)').css('opacity', '0');
                 $('#second p').css('transform', 'translateY(0px)').css('opacity', '1');
                 $('.rose h1').css('transform', 'translateY(100px)').css('opacity', '0');
                 $('#men').css('transform', 'translateY(200px)').css('opacity', '0');
             }

             var rose = $('.rose').offset().top;
             if (ws > rose - 300) {
                 $('#second p').css('transform', 'translateY(60px)').css('opacity', '0');
                 $('.rose h1').css('transform', 'translateY(0px)').css('opacity', '1');
                 $('#men').css('transform', 'translateY(0px)').css('opacity', '1');
                 $('.gift h1').css('transform', 'translateX(-100px)').css('opacity', '0');
                 
                 
             }                        

             var gift = $('.gift').offset().top;
             if (ws > gift - 300) {
                 $('.rose h1').css('transform', 'translateY(20px)').css('opacity', '0');
                 $('#men').css('transform', 'translateY(200px)').css('opacity', '0');
                 $('.gift h1').css('transform', 'translateX(0px)').css('opacity', '1'); 
                 
             }

             var a5 = $('.a5').offset().top;
             if (ws > a5 - 900) {
                 $('.gift h1').css('transform', 'translateX(-20px)').css('opacity', '0'); 
             }

         });

     });
