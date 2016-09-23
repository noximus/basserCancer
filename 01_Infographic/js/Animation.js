
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


    if (scroll > 1200 && info4 == false) {
      var time = 500;
      info4 = true;
      $("#info4top-a").delay(500).toggle( "slide", {direction: 'right'}, 500 );
      $('#info4bot-a').delay(500).toggle( "slide", {direction: 'left'}, 500 );
       
      $('.infographic04-left').delay(500).fadeTo(1000, 1);
      $('#red-inline').css("opacity","0");

      $('.infographic04-right a').delay(1000).each(function(){
        $(this).delay(time).fadeTo(500, 1);
        time += 200;
      });
      $('#red-inline').delay(3450).fadeTo(1000, 1);
  

      setTimeout("$('.infographic04-right a:nth-child(1)').delay(6000).css(\"background-image\", \"url(img/girl.png)\");", 3500);

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