var circle1 = false;
var circle2 = false;
var circle3 = false;
var info4 = false;
var info5 = false;
var info6 = false;
var info7 = false;
var info8 = false;
var info9 = false;

function CircleOne(){

      $("#line1a").fadeTo("slow", 1);

      $("#stripe1a").delay(500).toggle( "slide", {direction: 'left'} );
      $('#stripe3a').delay(500).toggle( "slide", {direction: 'right'} );
      $("#circle-con1").delay(1000).fadeTo("slow", 1);
        
        setTimeout("AnimateCircle('first-circle', .75);", 1000);
      $("#line2a").delay(2300).fadeTo("slow", 1);
        circle1 = true;
}

function CircleTwo(){
    $("#line1b").fadeTo("slow", 1);

    $("#stripe1b").delay(600).toggle( "slide", {direction: 'left'} );
    $('#stripe3b').delay(600).toggle( "slide", {direction: 'right'} );
    $("#circle-con2").delay(1100).fadeTo("slow", 1);
      
      setTimeout("AnimateCircle('second-circle', .50);", 1100);

    $("#line2b").delay(2400).fadeTo("slow", 1);

      circle2 = true;
}

function CircleThree(){
      $("#line1c").fadeTo("slow", 1);

      $("#stripe1c").delay(700).toggle( "slide", {direction: 'left'} );
      $('#stripe3c').delay(700).toggle( "slide", {direction: 'right'} );
      $("#circle-con3").delay(1200).fadeTo("slow", 1);
        
        setTimeout("AnimateCircle('third-circle', .25);", 1200);

      $("#line2c").delay(2600).fadeTo("slow", 1);

      circle3 = true;
}

function InfoFour(){
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
      $('#red-inline').delay(3600).fadeTo(1000, 1);
  

      setTimeout("$('.infographic04-right a:nth-child(1)').delay(6000).css(\"background-image\", \"url(img/girl.png)\");", 3200);

      
}

function InfoFive(){
      info5 = true;

      var time2 = 1000;

      $("#info5top").delay(500).toggle( "slide", {direction: 'right'}, 500 );
      $('#info5bot').delay(500).toggle( "slide", {direction: 'left'}, 500 );
      $('.info5-text').delay(500).fadeTo(1000, 1);
    

      $('.infographic05-party p').each(function(){
        $(this).delay(time2).fadeTo(1000, 1);
        time2 += 50;
      });

      $('#a-next-to').delay(4500).fadeTo(1000, 1);

       setTimeout("$('.infographic05-party p:nth-child(1)').delay(6000).css(\"background-image\", \"url(img/girl.png)\");", 4500);

      $('#under05-party').delay(5000).fadeTo(1000, 1);
}

function InfoSix(){
      info6 = true;
      $('.infographic06-text').fadeTo(1000, 1);
      $("#infographic06-bar1").delay(500).toggle( "slide", {direction: 'left'}, 4000 );
      $("#infographic06-bar2").delay(500).toggle( "slide", {direction: 'left'}, 3500 );
      $("#infographic06-bar3").delay(500).toggle( "slide", {direction: 'left'}, 3000 );
      setTimeout("AnimateBars();", 1100);
}

function InfoSeven(){
        info7 = true;
       $(".infographic07-left .info07bars").delay(500).toggle( "slide", {direction: 'left'}, 2000 );
       setTimeout("AnimateBarsTwo();", 1000);
       $(".infographic07-right").delay(500).toggle( "slide", {direction: 'down'}, 2000 );
       // $(".infographic07-right").fadeTo(2000, 1);
       $('.infographic07-left p1').delay(2000).fadeTo(2000, 1);
}

function InfoEight(){
      info8 = true;
      $('#info8line1').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#infographic08-doubleline').delay(500).toggle( "slide", {direction: 'left'}, 800 );
      $('#info8line2').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#info8check').delay(1500).fadeIn();
      $('#info8text').delay(1000).fadeTo(2000, 1);
}

function InfoNine(){
      info9 = true;
      $('#info9line1').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#info9line2').delay(500).toggle( "slide", {direction: 'left'}, 800 );
      $('#info9line3').delay(500).toggle( "slide", {direction: 'right'}, 800 );
      $('#infographic08-heart').delay(1500).fadeIn();
      $('#info9text').delay(1000).fadeTo(2000,1);

}


$(window).scroll(function(){
    if($(this).scrollTop()>=$('#info01-con').position().top && circle1 == false){

        CircleOne();

    }
    if($(this).scrollTop()>=$('#info02-con').position().top && circle2 == false){

        CircleTwo();

    }
    if($(this).scrollTop()>=$('#info03-con').position().top && (circle3 == false)){

      CircleThree();

    }
    if($(this).scrollTop()>=$('#info04-con').position().top && (info4 == false)){

      InfoFour();

    }
    if($(this).scrollTop()>=$('#info05-con').position().top && (info5 == false)){

      InfoFive();

    }
    if($(this).scrollTop()>=$('#info06-con').position().top && (info6 == false)){

      InfoSix();

    }
    if($(this).scrollTop()>=$('#info07-con').position().top && (info7 == false)){

      InfoSeven();

    }
    if($(this).scrollTop()>=$('#info08-con').position().top && (info8 == false)){

      InfoEight();

    }
    if($(this).scrollTop()>=$('#info09-con').position().top && (info9 == false)){

      InfoNine();

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


// Animation for navbar
var timenav = 2000;
$( document ).ready(function() {
    
    $('.menu-item a').delay(1000).each(function(){
        $(this).delay(timenav).animate({
   left: '0'
    
  }, 1500 );
     timenav += 50;
      });
});

