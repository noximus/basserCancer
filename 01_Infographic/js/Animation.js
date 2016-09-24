
var BanTimeline = {
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    // TweenLite.to(f1_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut, yoyo: true});
    // TweenLite.to(f1_img2, 2, {opacity:1, display: 'block', delay: 1, ease: Quad.easeOut, yoyo: true});
  
    TweenLite.delayedCall(3, BanTimeline.frame2);
  },
  frame2: function () {
    // TweenLite.to(f2_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    // TweenLite.delayedCall(3, BanTimeline.frame3);
  }
};
BanTimeline.init();

var circle1 = false;
var circle2 = false;
var circle3 = false;
var info4 = false;
var info5 = false;
var info6 = false;
var info7 = false;
var info8 = false;
var info9 = false;

$(window).scroll(function() {    
  
    var scroll = $(window).scrollTop();
    if (scroll > 100 && circle1 == false) {

      $("#line1a").fadeTo("slow", 1);

      $("#stripe1a").delay(500).toggle( "slide", {direction: 'left'} );
      $('#stripe3a').delay(500).toggle( "slide", {direction: 'right'} );
      $("#circle-con1").delay(1000).fadeTo("slow", 1);
        
        setTimeout("AnimateCircle('first-circle', .75);", 1000);
      $("#line2a").delay(2300).fadeTo("slow", 1);
        circle1 = true;

    }

    if (scroll > 450 && circle2 == false) {

      $("#line1b").fadeTo("slow", 1);

      $("#stripe1b").delay(600).toggle( "slide", {direction: 'left'} );
      $('#stripe3b').delay(600).toggle( "slide", {direction: 'right'} );
      $("#circle-con2").delay(1100).fadeTo("slow", 1);
        
        setTimeout("AnimateCircle('second-circle', .50);", 1100);

      $("#line2b").delay(2400).fadeTo("slow", 1);

        circle2 = true;
    }

     if (scroll > 750 && circle3 == false) {
      
      $("#line1c").fadeTo("slow", 1);

      $("#stripe1c").delay(700).toggle( "slide", {direction: 'left'} );
      $('#stripe3c').delay(700).toggle( "slide", {direction: 'right'} );
      $("#circle-con3").delay(1200).fadeTo("slow", 1);
        
        setTimeout("AnimateCircle('third-circle', .25);", 1200);

      $("#line2c").delay(2600).fadeTo("slow", 1);

      circle3 = true;
    }


    if (scroll > 1100 && info4 == false) {
      var time = 500;
      info4 = true;
      $("#info4top").delay(500).toggle( "slide", {direction: 'right'}, 500 );
      $('#info4bot').delay(500).toggle( "slide", {direction: 'left'}, 500 );
       
      $('.infographic04-left').delay(500).fadeTo(1000, 1);
      $('#red-inline').css("opacity","0");

      $('.infographic04-right a').delay(1000).each(function(){
        $(this).delay(time).fadeTo(500, 1);
        time += 200;
      });
      $('#red-inline').delay(3400).fadeTo(1000, 1);
  

      setTimeout("$('.infographic04-right a:nth-child(1)').delay(6000).css(\"background-image\", \"url(img/girl.png)\");", 3400);

      $('#under05-party').delay(5000).fadeTo(1000, 1);
    }

    if (scroll > 1500 && info5 == false) {

      info5 = true;
      time2 = 500;

      $("#info5top").delay(500).toggle( "slide", {direction: 'right'}, 500 );
      $('#info5bot').delay(500).toggle( "slide", {direction: 'left'}, 500 );
      $('.info5-text').delay(500).fadeTo(1000, 1);
    

      $('.infographic05-party p').each(function(){
        $(this).delay(time).fadeTo(500, 1);
        time += 50;
      });

      $('#a-next-to').delay(4500).fadeTo(1000, 1);

       setTimeout("$('.infographic05-party p:nth-child(1)').delay(6000).css(\"background-image\", \"url(img/girl.png)\");", 4500);

    }

    if (scroll > 2000 && info6 == false) {

      info6 = true;
      $('.infographic06-text').fadeTo(1000, 1);
      $("#infographic06-bar1").delay(500).toggle( "slide", {direction: 'left'}, 4000 );
      $("#infographic06-bar2").delay(500).toggle( "slide", {direction: 'left'}, 3500 );
      $("#infographic06-bar3").delay(500).toggle( "slide", {direction: 'left'}, 3000 );
      setTimeout("AnimateBars();", 1100);

    }

    if (scroll > 2700 && info7 == false ) {

      info7 = true;
       $(".infographic07-left .info07bars").delay(500).toggle( "slide", {direction: 'left'}, 2000 );
       setTimeout("AnimateBarsTwo();", 1000);
       $(".infographic07-right").delay(500).toggle( "slide", {direction: 'down'}, 2000 );
       // $(".infographic07-right").fadeTo(2000, 1);
       $('.infographic07-left p1').delay(2000).fadeTo(2000, 1);

    }

    if (scroll > 3300 && info8 == false) {

      info8 = true;
      $('#info8line1').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#infographic08-doubleline').delay(500).toggle( "slide", {direction: 'left'}, 800 );
      $('#info8line2').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#info8check').delay(1500).fadeIn();

    }



});



function AnimateCircle(name, amount){

  $('.'+ name).circleProgress({
      value: amount,
      fill: {gradient: [['#b31423', .2], ['#d9182a', .5]], gradientAngle: Math.PI / 4}
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(String(stepValue.toFixed(2)).substr(2)).append("%");
    });
}

function AnimateBars(){
        var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
      };
      var count1 = new CountUp("count1", 0, 75, 0, 4, options);
      var count2 = new CountUp("count2", 0, 50, 0, 3.5, options);
      var count3 = new CountUp("count3", 0, 25, 0, 3, options);
      count1.start();
      count2.start();
      count3.start();
}
function AnimateBarsTwo(){
        var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
      };
      var count1 = new CountUp("count4", 0, 10, 0, 6, options);
      var count2 = new CountUp("count5", 0, 1568, 0, 3, options);
    
      count1.start();
      count2.start();
     
}