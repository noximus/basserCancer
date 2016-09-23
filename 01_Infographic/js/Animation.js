
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

$(window).scroll(function() {    
  
    var scroll = $(window).scrollTop();
    if (scroll > 200 && circle1 == false) {

      AnimateCircle('first-circle', .75);
      circle1 = true;

    }

    if (scroll > 450 && circle2 == false) {
      AnimateCircle('second-circle', .50);
      circle2 = true;
    }

     if (scroll > 750 && circle3 == false) {
      AnimateCircle('third-circle', .25);
      circle3 = true;
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