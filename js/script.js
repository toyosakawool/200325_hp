$(function(){

	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW > 880){
		var headerH =100;
	}
	else{
		var headerH =100;
	}

	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 600);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});

	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});

//Visionを遅れて表示
$(function(){
  $(window).scroll(function (){
    $(".delay").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });
});

//galleryをスライドショーに

$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
		$('.slider').slick({
			accessibility:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			centerMode:true,
			dots:true,
			pauseOnHover:false,
		});
  } else {
    //768pxより大きい時の処理
		$('.slider').slick({
			accessibility:true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			centerMode:true,
			dots:true,
			pauseOnHover:false,
		});
  }
});


//トップでヘッダーを透明に
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.top-wrapper').height() ) {
      $('#sidebar').fadeIn();
    } else {
      $('#sidebar').fadeOut();
    }
  });
});

/*var _window = $(window);
var _header = $('#sidebar');
var firstSection;

_window.on('scroll',function(){
	firstSection = $('#sec02').height();
	if(_window.scrollTop()>firstSection)
	{
		_header.css('background-color', 'rgba(0,0,0,0.6)');
	}
	else {
		var alpha = (_window.scrollTop()/firstSection)*0.6;
		_header.css('background-color','rgba(0,0,0,' + alpha + ')');
	}
});

_window.trigger('scroll');*/


/*projectを1つずつ遅れて表示*/
$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW => devW)  {
    //767pxより大きい時の処理
		    $(window).scroll(function (){
		    $('.project-wrapper .article').each(function(){
		       var elemPos = $(this).offset().top;
		       var scroll = $(window).scrollTop();
		       var windowHeight = $(window).height();
		   if (scroll > elemPos - windowHeight + windowHeight/5){
		    $(function(){
		    $('.project-wrapper .article')
		        .each(function(i){
		         $(this).delay(300*i).animate({
							 opacity:1,
							 left:'0'
						 }, 700);
		        });
		       });
		       }
		    });
		  });
  }
});



//NEWS
$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
		$('.col4').slick({
			arrows:true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			dots:true,
			pauseOnHover:false,
		});
  }
});

//STRAT
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(1000);
	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
