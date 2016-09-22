var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f1_img2: document.getElementById("f1_img2"),
  f2_img1: document.getElementById("f2_img1"),
  f3_img1: document.getElementById("f3_img1"),
  f4_img1: document.getElementById("f4_img1"),
  f5_img1: document.getElementById("f5_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(f1_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut, yoyo: true});
    TweenLite.to(f1_img2, 2, {opacity:1, display: 'block', delay: 1, ease: Quad.easeOut, yoyo: true});
  
    TweenLite.delayedCall(3, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f2_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    TweenLite.delayedCall(3, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(f3_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    TweenLite.delayedCall(3, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    
    TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f5_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
  }
};
BanTimeline.init();