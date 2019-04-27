import $ from "jquery";
// import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "selectize/dist/js/selectize.min.js";
// import "animejs/anime.js";
import Swiper from "swiper/dist/js/swiper.esm.js";
import "./main-sliders.js";
// import "./countTo.js";
// import "./team.js";
// import "./timeline.js";
// import "./tovar.js";
// import "./range.js";
// import "./tabs.js";
// import "./lc.js";
// import mobileMenu from "./mobile-menu.js";
import Sticky from "./x-widgets.js";

window.$ = $;
window.jQuery = $;


require("./slick.min.js");
require("./countTo.js");
require("./jquery.fancybox.js");
require("../css/jquery.fancybox.css");

	


document.addEventListener("DOMContentLoaded", e => {
	// if($(window).width() <= 660){
	// 	// var searchBtn = $('.search-btn').clone();
	// 	$('.aside__burger').before('<div class="search-btn"></div>');
	// }
	
	$('.search-btn, .search-btn--close').click(function(){
		var $this = $(this);
		$('body').toggleClass('js__search-open');
	})

	$(window).on("load", function(){
		$('.cart-one__slider, .cart-one__slider-nav').addClass('slider-loaded');

		$('body').addClass('js__load');
	});


	if($(window).width() > 1000){
		setTimeout(function(){

			var headerHeight = $('.inner .head').height();

			console.log(headerHeight)

			$('.vacancies-aside').css({
				top: headerHeight,
			})
		},1000)
	}




	var menu = $('.footer__menu .menu').clone(),
		headPhone = $('.head__phone a:first-child').clone();
		// raschetStoimosti = $('.nav-main__item:last-child').clone();

	$('.mobile-menu').append(menu);
	// $('.mobile-menu').append(raschetStoimosti);
	$('.mobile-menu').append(headPhone);

	$('.mobile-menu .submenu').closest('.menu__item').addClass('js__has-submenu');

    // if($(window).width() <= 1000) {

    $('.mobile-menu .menu__item').each(function(i,el){
        var $this = $(el);
        var setCloneLink = $this.find('.menu__link').clone().removeClass('menu__link').addClass('submenu__link');

        $this.find('.submenu').prepend('<li class="menu__item link-parent"></li>');
        $this.find('.link-parent').prepend(setCloneLink);
        $this.find('.submenu').prepend('<div class="js__back menu__link">Назад</div>');

    })

    $('.js__has-submenu > .menu__link').removeAttr('href');

    $('.js__has-submenu > .menu__link').click(function(){
        var $this = $(this);
        $this.closest('.js__has-submenu').toggleClass('js__open-submenu');

    })

    $('.js__back').click(function(){
        var $this = $(this);
        $this.closest('.menu__item').removeClass('js__open-submenu');
    })

    // }


	$(window).on("load scroll touchmove", function(){
		if ($(window).scrollTop() > 800){
			$(".scroll-top").fadeIn(300);
		}else{
			$(".scroll-top").fadeOut(300);
		};

		if($(window).width() > 1000) {

			if($(window).scrollTop() > 10){
					$('.inner .head').addClass('js__scroll');
				}else {
					$('.inner .head').removeClass('js__scroll');
				}
		}

		
	});

	$('.submenu').each((i,el) => {
		let $this = $(el);

		$this.closest('.head__menu-item').addClass('js__has-submenu');
	})

	$('.burger').click(function(){
		// $(this).toggleClass('open');
		$('body').toggleClass("mobile-menu--open");
		$('.menu .js__open-submenu').removeClass('js__open-submenu');



	});

	if ($(".statistic__num").length){
		$(".statistic__num").countTo();
	}

	$(window).on('scroll', function(){
		if ($(".statistic__num").length)
			if ($(".statistic__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".statistic__num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}
		
	})




	$("body").on("click change", ".btn-clear", function(){
		$(this).prevAll('input[type="text"]').val("");
		
	});

	$('.contacts__el.map').click(function(){


		var $this = $(this);

		$('.contacts__el.map').removeClass('js__animate');

		if ($this.closest('.contacts__item-info').next('.contacts__item-map').hasClass("js__open")){
			$('.contacts__item-map').slideUp(300).removeClass('js__open');
		}else{
			$('.contacts__item-map').slideUp(300).removeClass('js__open');
			$this.closest('.contacts__item-info').next('.contacts__item-map').slideDown(300).addClass('js__open');
			$this.addClass('js__animate');
		}

		if($(window).width() > 1000){
			setTimeout(function(){
				$('html,body').animate({
					scrollTop: $this.closest('.contacts__item').offset().top - 100}, 1000);
			}, 300)
		}


	})

	let $sliderWhereBuy = $(".where-buy__el-slider")

	function slickCarousel() {
		$sliderWhereBuy.on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// asNavFor: '.slider-nav__list',
			fade: true,
			// arrows: false,
			lazyLoad: 'progressive',
			centerMode: true,
			centerPadding: 0,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						
					}
				}
			]
		});
	}

	slickCarousel();

	$('.where-buy__top').click(function(){

		

		var $this = $(this);

		$('.where-buy__top').removeClass('js__animate');

		if ($this.next('.where-buy__info').hasClass("js__open")){
			$('.where-buy__info').slideUp(300).removeClass('js__open');
		}else{
			$('.where-buy__info').slideUp(300).removeClass('js__open');
			$this.next('.where-buy__info').slideDown(300).addClass('js__open');
			$this.addClass('js__animate');

			$sliderWhereBuy.slick('unslick');

			setTimeout(function(){
				slickCarousel();
			}, 300)

		}

		// if($(window).width() > 1000){
		// 	setTimeout(function(){
		// 		$('html,body').animate({
		// 			scrollTop: $('.where-buy__top.js__animate').offset().top - 99}, 1000);
		// 	}, 300)
			
		// }




	})
	$('.expert__item-top').click(function(){


		var $this = $(this);

		$('.expert__item-top').removeClass('js__animate');

		if ($this.next('.expert__item-info').hasClass("js__open")){
			$('.expert__item-info').slideUp(300).removeClass('js__open');
		}else{
			$('.expert__item-info').slideUp(300).removeClass('js__open');
			$this.next('.expert__item-info').slideDown(300).addClass('js__open');
			$this.addClass('js__animate');
		}


		if($(window).width() > 1000){

			setTimeout(function(){
				$('html,body').animate({
					scrollTop: $('.expert__item-top.js__animate').offset().top - 100}, 1000);
			}, 300)
		}


	})

	$('.vacancies__top').click(function(){


		var $this = $(this);

		$('.vacancies__top').removeClass('js__animate');

		if ($this.next('.vacancies__info-cont').hasClass("js__open")){
			$('.vacancies__info-cont').slideUp(300).removeClass('js__open');
		}else{
			$('.vacancies__info-cont').slideUp(300).removeClass('js__open');
			$this.next('.vacancies__info-cont').slideDown(300).addClass('js__open');
			$this.addClass('js__animate');
		}

		if($(window).width() > 1000) {
			setTimeout(function(){
				$('html,body').animate({
					scrollTop: $('.vacancies__top.js__animate').offset().top - 100}, 1000);
			}, 300)
			
		}




	})

	if($(window).width() > 667){

		$('select').each(function(i,el){
			let $this = $(el);

			$this.selectize({
			    create: true,
			 //    sortField: 'text',
			 //    labelField: "label",
				// valueField: "value",
				// searchField: "label",

			});

		})

	}


	if($(window).width() > 667){

		$('.nav-main__item').each((i,el) => {
			let $this = $(el);


			$this.css({
				"transition-delay": ""+(0.20 * i)+"s",
				"transform": "translate3d(0, "+(-30 * i)+"%, 0)",
				"opacity": 0,
			})


		})
		
	}



	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				if($('div').hasClass('intro-bg__text')){
					// inject += '<span class="'+klass+'" \
					// style="transition-delay: '+(0.12 * i)+'s; transform: translate3d(0, '+(0.30 * i)+'%, 0);">'+item+'</span>'+after;
					inject += '<span class="'+klass+(i+1)+'" \
					style="transition-delay: '+(0.05 * i)+'s; transform: translate3d(0, '+(15.30 * i)+'%, 0);">'+item+'</span>'+after;
				} 
	
				// let deleayCounter = a.length - i;
				// inject += '<span class="'+klass+(i+1)+'" \
				// style="transition-delay: '+(0.12 * deleayCounter)+'s; transform: translate3d('+(0.30 * i)+'%, 0, 0);">'+item+'</span>'+after;

			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};


	 $(".intro-bg__text").lettering();
	 // $(".error-bg__text").lettering();



	 setTimeout(function(){
	 	$('.intro-bg').addClass('js__animate');
	 }, 100)


	// let swiper = new Swiper(".main-slider", {
	// 	effect: "fade",
	// 	slidesPerView: 1,
	// 	loop: true,
	// 	roundLengths: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		type: "bullets",
	// 		clickable: true
	// 	}
	// });

	// window.menu = new mobileMenu({
	// 	burger: ".head__burger",
	// 	menu: ".head__mobile-menu",
	// 	submenu: {
	// 		titleSelector: ".have-sub",
	// 		submenuSelector: ".submenu",
	// 	},
	// 	menuActiveClass: "js__opened",
	// 	bodyActiveClass: "js__menu-opened",
	// 	ignoreWarnings: false,
	// 	fixBody: false,
	// });



	$(".fancybox").fancybox({
		trapFocus: false,
		touch: {
		    vertical: false, 
		   
		},
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});




	



	Sticky($("[data-widget=\"sticky-holder\"]"))


	let $sliderCollection = $(".slider-collection__list"),
		$sliderCollectionNav = $(".slider-nav__list");


	$sliderCollection.on('init', slick => {

	}).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav__list',
		fade: true,
		arrows: false,
		lazyLoad: 'progressive',
		centerMode: true,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					
				}
			}
		]
	}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
	}).on("afterChange", (e, slick, curSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
	});



	$sliderCollectionNav.on('init', slick => {

	}).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-collection__list',
		focusOnSelect: true,
		arrows: true,
		centerMode: true,
		centerPadding: 0,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});





	if($(window).width() > 670){
		let $sliderCartOne = $(".cart-one__slider-list:not(.mobile)"),
			$sliderCartOneNav = $(".cart-one__slider-nav-list");
		

		$sliderCartOne.on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderCartOneNav,
			fade: true,
			appendArrows: $('.cart-one__slider-arrow'),
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						arrows: true,
					}
				}
			]
		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
		}).on("afterChange", (e, slick, curSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
			startProgressbar();
		});

		$('.gallery-btn').click(function(){
			console.log(1)
			let id = $sliderCartOne.slick("slickCurrentSlide");

			$(".cart-one__slider-fancybox a:eq("+id+")").trigger("click");
			// $sliderCartOne.find(".slick-slide:).trigger('click')
		})


		$sliderCartOneNav.on('init', slick => {

		}).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: $sliderCartOne,
			focusOnSelect: true,
			arrows: true,
			infinite: true,
			centerMode: true,
			centerPadding: 0,
			swipeToSlide: true,
			lazyLoad: 'progressive',
		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			// resetProgressbar();
		}).on("afterChange", (e, slick, curSlide) => {
			startProgressbar();
		});


		let $sliderDetailMain = $(".detail-moro-photo-main"),
			$sliderMorePhoto = $(".detail-moro-photo .where-buy__el-slider-detail");


		$sliderDetailMain.on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderMorePhoto,
			fade: true,
			// lazyLoad: 'progressive',
	
		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
		}).on("afterChange", (e, slick, curSlide) => {
			$sliderCartOne.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
			startProgressbar();
		});


		$sliderMorePhoto.on('init', slick => {

		}).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: $sliderDetailMain,
			swipe: false,
			arrows: true,
			infinite:false,
			responsive: [
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
					}
				}
			]
			// centerMode: true,
			// centerPadding: 0,

		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			// resetProgressbar();
		}).on("afterChange", (e, slick, curSlide) => {
			startProgressbar();
		});


		$("body").on("change", ".forms__input", function(e){

			var inputHasInfo = $(this).val();
			console.log(inputHasInfo)

			if(inputHasInfo.length){
				$(this).closest('.forms__input-cont').addClass('js__input-full');
			} else {
				$(this).closest('.forms__input-cont').removeClass('js__input-full');
			}


		});

		$('input[type="file"]').change(function(){
			var value = $(this)[0].files[0].name;
			$(this).prevAll('.forms__input--file-support').val(value);
			$(this).nextAll('.forms__input--file-support').val(value);
			$(this).closest('.forms__input-cont').addClass('js__input-full');
		});

		//start 

		 var time = 10;
		 var $bar,
		      isPause,
		      tick,
		      percentTime;
		  

		  
		  $bar = $('.slider-progress .progress');
		  
		  $('.cart-one__slider-list, .cart-one__slider-nav-list, .slick-arrow').on({
		    mouseenter: function() {
		      isPause = true;
		    },
		    mouseleave: function() {
		      isPause = false;
		    }
		  })

		  function startProgressbar() {
		    resetProgressbar();
		    percentTime = 0;
		    isPause = false;
		    tick = setInterval(interval, 10);
		  }
		  
		  function interval() {
		    if(isPause === false) {
		      percentTime += 1 / (time+0.1);
		      $bar.css({
		        width: percentTime+"%"
		      });
		      if(percentTime >= 100)
		        {
		          $sliderCartOne.slick('slickNext');
		          // startProgressbar();
		          resetProgressbar();
		        }
		    }
		  }
		  
		  
		  function resetProgressbar() {
		    $bar.css({
		     width: 0+'%' 
		    });
		    clearTimeout(tick);
		  }
		  
		  startProgressbar();
	}

	if($(window).width() < 670){

		var $sliderCartOneMobile = $(".cart-one__slider-list.mobile");

		$sliderCartOneMobile.on('init', slick => {

		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// asNavFor: '.cart-one__slider-nav-list',
			fade: true,
			autoplay: true,
			// appendArrows: $('.cart-one__slider-arrow'),
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						arrows: true,
					}
				}
			]
		})

	}

	$('.gallery-btn').click(function(){
		let id = $sliderCartOneMobile.slick("slickCurrentSlide");

		$(".cart-one__slider-fancybox a:eq("+id+")").trigger("click");
	});






	

});


// $(window).on('load', function(){
//   $(window).scroll(function() {

//     var wintop = $(window).scrollTop(), 
//         docheight = $('.page-wr').height(), 
//         winheight = $(window).height();

//     var totalScroll = (wintop/(docheight-winheight))*100;

//     $(".progressbar").css("width",totalScroll+"%");
//   });

// });