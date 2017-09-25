$(document).ready(function() {
	
	
    //===========slider index - header
    var h_slider = $('#header_slider').lightSlider({
        item:1,
        loop:true,
        speed:700,
        auto: false, //autoslide off=======
        slideMargin:0,
        controls: true,
        enableDrag: false
    });  
	var next_slide_timer = setInterval(function (){
			h_slider.goToNextSlide()
		}, 5000);
	$('.lSAction > a').click(function (){
		clearInterval(next_slide_timer);
	})
	
	$('.btn-text-over').click(function() {
		$('.text-over').toggleClass('detail-view');
		if($('.text-over').hasClass('detail-view')){
			$(this).text('Скрыть');
		}
		else{			
			$(this).text('Читать далее...');
		}
	});
	
	$('.gall_page .galelry_item').click(function (){
		var href_gall = $(this).find('a').attr('href');
		location.href = href_gall;
	})
	$('.block2.gallery_cont .gallery_item').click(function (){
		var href_gall2 = $(this).find('a').attr('href');
		location.href = href_gall2;
	})
	
	$('.arrow_dop_text').click(function () {
		$('.wrapp_dop_text').toggleClass('show_dop_text');
	});
    //========== btn mobile nav
   $('.btn_mob_nav').click(function() {
      $('.mob_nav').slideToggle(400); 
   }); 
   //=======nav hover
   if(window.location.href == 'http://www.ua-otel.kiev.ua/'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(0) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(0) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://www.ua-otel.kiev.ua/rooms'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(1) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/rooms'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(1) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://www.ua-otel.kiev.ua/gallery'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(2) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/gallery'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(2) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://www.ua-otel.kiev.ua/contacts'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(3) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/contacts'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(3) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://www.ua-otel.kiev.ua/page/pravila-bronirovania-nomerov'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(4) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/page/pravila-bronirovania-nomerov'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(4) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://www.ua-otel.kiev.ua/page/infrastruktura'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(5) > a').addClass('active_nav');
   }
   if(window.location.href == 'http://ua-otel.kiev.ua/page/infrastruktura'){
			$('.nav_desk > li > a').removeClass('active_nav');
			$('.nav_desk > li:eq(5) > a').addClass('active_nav');
   }
  
   $('.nav_desk > li > a').hover(function (){
	   var d_hover = $(this).text();
	   $(this).attr('data-hover', d_hover);
   });
    //==========calendar booking zaezd/vyezd
    $.datepicker.setDefaults(
        $.extend($.datepicker.regional["ru"])
    );
    $( "#date1" ).datepicker({
      changeMonth: true,
        dateFormat: "yy-mm-dd",
      onClose: function( selectedDate ) {
        $( "#date2" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#date2" ).datepicker({
      changeMonth: true,
        dateFormat: "yy-mm-dd",
      onClose: function( selectedDate ) {
        $( "#date1" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
    //============room - img slider
   var slider_room = $('#room_slider').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:4,
        slideMargin:1,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#room_slider .lslide'
            });
        }   
    }); 
	
	$('.dop_rev').click(function(){
        slider_room.goToPrevSlide(); 
    });
	$('.dop_next').click(function(){
        slider_room.goToNextSlide(); 
    });
    //==========gallery items page
    $('#gallery_thumbnials').lightGallery({
            thumbnail:true
    }); 
    //===============Top btn
    jQuery(window).scroll(function(){
            if ( jQuery(document).scrollTop() > 220 ) {
                jQuery('#top').fadeIn('fast');
            } else {
                jQuery('#top').fadeOut('fast');
            }
    });
    $('#top').click(function () {
                $('body,html').animate({scrollTop: 0}, 500); return false;
    });
	$('.error').addClass('alert');
	$('.error').addClass('alert-danger');
	$('.error').addClass('clearfix');
	//==========btn minus plus
	$(".incr-btn").on("click", function() {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	
	if ($button.hasClass('plus')) {
		var newVal = parseFloat(oldValue) + 1;
		}
	else {
		if(oldValue < 1){
			var newVal = 0;
			return false;
		}
		var newVal = parseFloat(oldValue) - 1;
		
	}
	
	$button.parent().find("input").val(newVal);
	});
	
	
}); //document ready