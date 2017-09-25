$(function() {
  
	/* смена большого фото */
	$('#box_youtube').hide().attr('src', ' '); // убрать, если первым стоит видео
  $('#box_youtube').attr('src', ' '); // убрать, если первым стоит видео
	$('ul.min_img_slider li a:first').addClass('active');	  
	$('#big_img_slider').removeAttr('width').removeAttr('height');
	
	$('ul.min_img_slider li a').click(function(){
					   
		var big_img = $(this).attr('href');
		
		
		var myRe = /http/ig; //регулярка
		var myArray = myRe.exec(big_img); // ищем совпадение регулярки
		
		if(myArray != null){
			$('#big_img_slider').hide();
			$('#box_youtube').show().attr('src', big_img);		
		}else {
			$('#big_img_slider').show();
			$('#box_youtube').hide().attr('src', '');
			$('#big_img_slider').attr('src', big_img);
		}
		
		$('ul.min_img_slider li a').removeClass('active');
		$(this).addClass('active');			
		
		
		return false	
	});  
	/* //смена большого фото */	
  
  
  /* смена фото в попапах */
  $('ul.min_img').children('li:first').addClass('active');	  
	$('.middle_img').removeAttr('width').removeAttr('height');

  
	$('ul.min_img li a').click(function(){
					   
		var big_img = $(this).attr('href');
		
    $(this).closest('div.cat_foto_gal').children('.middle_img').children('img').attr('src', big_img);
    
		$(this).parents('ul.min_img').children('li').removeClass('active');
		$(this).parent('li').addClass('active');			
		
		
		return false	
	});  
	/* //смена фото в попапах */	
	
  /* попапы */
  $('.perezvonite').click(function(){
 	 $('#obr_zvon_box').toggle();
	 $('#bg_shadow').toggle();
   return false;
  });
  
  $('a.obr_zvon_close').click(function(){
    $('#obr_zvon_box').hide();
  	$('#bg_shadow').hide();
  	$('#spasibo').hide();
  	$(this).parent('div').hide();
    return false;
  });
  
  $('a.obr_zvon_close2').click(function(){    
  	$('#bg_shadow2').hide();  	
  	$(this).parent('div').hide();
    return false;
  });
  
  $('#bg_shadow').click(function(){
    $('#obr_zvon_box').hide();
  	$('#bg_shadow').hide();  	
  	$('div.modal').hide();
  	$('#obr_zvon_box_stoimost').hide();
    return false;	
  });
  
  $('a.open_popap').click(function(){
    var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
    $(this.hash).css('top', cont_top+120).show();
    $(this.hash).show();
    $('#bg_shadow').show();
    return false;
  });
  /*  //попапы */
  
  /*menu*/
	var $menu = $("#footer");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 175 ){ //меню - чтоб плавало		
			$menu.fadeIn(500);	
		} else if($(this).scrollTop() <= 175 ) {
			$menu.fadeOut(500);
 		}
	});

jQuery.fn.extend({
    toggleText: function(stateOne, stateTwo) {
        return this.each(function() {
            stateTwo = stateTwo || '';
            $(this).text() !== stateTwo && stateOne ? $(this).text(stateTwo)
                                                    : $(this).text(stateOne);
        });  
    }
});
  
$('#anchor3 .more2 a').click(function(){
      var text = $(this).text();
      $('.hirobo').slideToggle("slow");
      $(this).toggleText('Узнать больше', 'Свернуть');
       return false;
  	});
    
$('.advantages .more a').click(function(){
      var text = $(this).text();
      $('.hi-robot').slideToggle("slow");
      $(this).toggleText('Узнать больше', 'Свернуть');
       return false;
  	});    	
 /* 
$('.hi-robot .more a').click(function(){
      var text = $(this).text();
      $('.hi-robot').hide("slow");
      $('.advantages .more a').toggleText('Свернуть', 'Узнать больше');
       return false;
  	});  
 */    
$('.features .more a').click(function(){
        var destination4 = parseInt( $(this.hash).offset().top );
   	 	  $('php,body').animate( { scrollTop: destination4 }, 500 );
        $('.menu-footer nav a').removeClass('actived');
        $('.menu-footer nav a#anchors5').addClass('actived');
        return false;
  	});
    
$('#anchor2 .more a').click(function(){
        var destination3 = parseInt( $(this.hash).offset().top );
   	 	  $('php,body').animate( { scrollTop: destination3 }, 500 );
        $('.menu-footer nav a').removeClass('actived');
        $('.menu-footer nav a#anchors5').addClass('actived');
        return false;
  	});
      
$('.menu-footer nav a.hlt').click(function(){
        var destination2 = parseInt( $(this.hash).offset().top );
   	 	  $('php,body').animate( { scrollTop: destination2 }, 500 );
        $('.menu-footer nav a').removeClass('actived');
	      $(this).addClass('actived');
        return false;
  	});
$('.big-slider a').click(function(){
        var destination2 = parseInt( $(this.hash).offset().top );
   	 	  $('php,body').animate( { scrollTop: destination2 }, 500 );
        $('.menu-footer nav a').removeClass('actived');
	      $(this).addClass('actived');
        return false;
  	});	 	  
$('.menu-up nav a.hlt').click(function(){
      var num = $(this).index();
      var destination1 = parseInt($(this.hash).offset().top);
   	 	$('php,body').animate({ scrollTop: destination1 }, 500 );
      $('.menu-footer nav a').removeClass('actived');
      $('.menu-footer nav').find('a:eq('+num+')').addClass('actived');
      return false;
  	});
    
$('.logo').click(function(){
       var destination0 = parseInt( $(this.hash).offset().top );
       $('php,body').animate( { scrollTop: destination0 }, 500 );
       return false;
    });
    
		/* Смена активного пункта меню при пролистывании*/
		// Cache selectors
		var lastId,
			topMenu = $(".menu-footer nav"),
			topMenuHeight = topMenu.outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a.hlt"),
			// Anchors corresponding to menu items 
			scrollItems = menuItems.map(function(){
			  var item = $($(this).attr("href"));
			  if (item.length) { return item; }
			});
    //  alert(menuItems.length);
		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		/*menuItems.click(function(e){
		  var href = $(this).attr("href"),
			  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('php, body').stop().animate({ 
			  scrollTop: offsetTop
		  }, 300);
		  e.preventDefault();
		});*/
		
		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		     // Get id of current scroll item
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];		 

		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
			   lastId = id;
			   // Set/remove active class
			   menuItems
				 .removeClass("actived")
				 .filter("[href=#"+id+"]").addClass("actived");
		//	   $('#'+id).addClass('actived');
		   }                   
		});
		/* //Смена активного пункта меню при пролистывании*/
	/*//menu*/
  
  
  
  /* формы - заполним поле доп.инфо.
  var id_form;
  $('.dop_info').each(function(){
    id_form = $(this).parent('form').attr('id');
    $(this).val(id_form);
  });
  var name_cat;
  $('a.stoimost').click(function(){
	   name_cat = $(this).parent('li').children('a.img').children('span.title').children('span.table').text();
     $('#webform5 input.dop_info').val(name_cat);
  });
  //формы - заполним поле доп.инфо*/
  
  
  /* формы - отправка форм */    
  $('form.obr_zvon').submit(function(e){
      //отменяем стандартное действие при отправке формы
      e.preventDefault();
      //берем из формы метод передачи данных
      var m_method=$(this).attr('method');
      //получаем адрес скрипта на сервере, куда нужно отправить форму
      var m_action=$(this).attr('action');
      //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
      //то есть в стандартном формате передачи данных формы
      var m_data=$(this).serialize();
      
      $.ajax({
          type: m_method,
          url: m_action,
          data: m_data,
          success: function(result){            
              if (result == 'error'){
                $('#error').show();
                $('#bg_shadow2').show();
              }
              else{
                
                $('#obr_zvon_box_stoimost').hide();
                $('#bg_shadow').hide();
                $('.modal').hide();
                $('#obr_zvon_box').hide();
                
                
                $('#spasibo').show();
                $('#bg_shadow2').show();
                
                setTimeout(function() { $('#spasibo').fadeOut(); $('#bg_shadow2').fadeOut(); }, 3000)                  
              }
              
          }
      });//ajax
      
  });
  /* формы - отправка форм*/
  
  
  /* ======== форма - покупки (корзины)============ */ 
  
  
        
    /* плюс минус в форме */
    $('div.item label span.img i').addClass('noactive');
    calculateSummaryVolume(); // Мало ли кто то решит нажать f5 
           
    $(".minus").click(function(){ //нажали на минус
			var $this = $(this);
			var $input = $this.closest('div.item').children('div.npt').children('input');
			var value = parseInt($input.val());
     
			if (isNaN(value) || value < 0) {
        value = 0;
        //$this.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');
      }      
			if (value > 0) {value--;}
      //if (value == 0) {$this.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');}          
			$input.val( value );
			calculateSummaryVolume();

			return false;
		});
    
    

		$(".plus, div.item label span.img img, div.item label span.txt, div.item label span.img i.noactive, div.item label span.img b").live('click', function(){ //нажали на плюс
			var $this = $(this);
			var $input = $this.closest('div.item').children('div.npt').children('input');
			var value = parseInt($input.val());
      //$this.closest('div.item').children('label').children('span.img').children('i').addClass('active').end().children('b').addClass('glowing');
      
			if (isNaN(value) || value < 0) {value = 0;}  
			value++;  
			$input.val( value );
			calculateSummaryVolume();
			return false;
		});
    
    $("div.item label span.img i.active").live('click', function(){ //нажали отрубить (на галочку)
			var $this = $(this);
			var $input = $this.closest('div.item').children('div.npt').children('input');
			var value = parseInt($input.val());
			value = 0;
      //$this.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');
      $input.val( value );
			calculateSummaryVolume();
			return false;
		});
    
    /*$("div.item label span.img i:not(:has(.active))").click(function(){ //нажали врубить (на галочку)
			var $this = $(this);
			var $input = $this.closest('div.item').children('div.npt').children('input');
			var value = parseInt($input.val());
			value = 0;
      //$this.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');
      $input.val( value );
			calculateSummaryVolume();
			return false;
		});     */
    
    $('input.kolvo_sht').change(function(){ //ввели число в ручную
    
      var $input = $(this);
      var value = parseInt($input.val());
      if (isNaN(value) || value < 0) {
        value = 0;
        //$input.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');  
      }
      $input.val( value );
      //if (value == 0) {$input.closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');}  
      calculateSummaryVolume();
    });
		
		function calculateSummaryVolume() {
			var summa_teg = $('#sum dd');      
      var summa_value = 0;
      var title_all = '';
      
      $('div.item div.npt input').each(function(){      
        var cena_za_1 = $(this).parent('div').parent('div.item').children('label').children('span.price').php();
        cena_za_1 = cena_za_1.replace(/\s+/g, '');  //удаляем пробелы нахуй
        cena_za_1 = parseInt(cena_za_1);
        
        var kolvo = parseInt( $(this).val() );
        
        var value = cena_za_1 * kolvo;
      
        summa_value += value;
        var title = $(this).parent('div').parent('div.item').children('label').children('span.txt').text();        
        if ( kolvo !=0 ) {
          title_all +=  '<li><b>'+title+' </b><span>'+kolvo+' шт.</span> <i> '+value+' руб.</i></li>';
          $(this).closest('div.item').children('label').children('span.img').children('i').addClass('active').end().children('b').addClass('glowing');
        }
        else {$(this).closest('div.item').children('label').children('span.img').children('i').removeClass('active').end().children('b').removeClass('glowing');}
                
      });
      
      $('#dd_zakaz_tekst ol').php(title_all);
			summa_teg.php( summa_value );
      return false;
		}
      
    /* //плюс минус в форме */
       
  $('form.pokupka').submit(function(e){
   
      //отменяем стандартное действие при отправке формы
      e.preventDefault();
      //берем из формы метод передачи данных
      var m_method=$(this).attr('method');
      //получаем адрес скрипта на сервере, куда нужно отправить форму
      var m_action=$(this).attr('action');
      //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
      //то есть в стандартном формате передачи данных формы
      
      var kolvo = 0;
      var kolvo_all = 0;
      var summa = 0;
      var cena = 0;
      var text_vash_zakaz = $('#dd_zakaz_tekst').php();      
      //alert($('div.item div.npt input').length);
      $('div.item div.npt input').each(function(){
        kolvo = $(this).val();
        kolvo = Number(kolvo); // преобразовываем строку в число
        kolvo_all += kolvo;
        //alert(kolvo_all);
        if( kolvo != 0 ){ 
          cena = $(this).parent('div').parent('div.item').children('label').children('span.price').php();
          //alert(cena);
          cena = cena.replace(/\s+/g, '');  //удаляем пробелы нахуй
          //alert(cena);
          cena = Number(cena);  // преобразовываем строку в число
          cena *= kolvo;
          summa += cena;
        }
        //$('dd_zakaz_tekst ol').append('<li><b>Точилка Work Sharp Ken Onion Edition</b><span>1</span> <i>16 900</i></li>')
      });
      
      /*alert(kolvo_all);
      alert(summa); */     
      
      
      $('textarea#text_vash_zakaz').php(text_vash_zakaz);
      $('input#summa').val(summa);
      $('input#kolvo_all').val(kolvo_all);
      //alert($('input#summa').val());
     
      
      var m_data=$(this).serialize();
      
      
      $order_sum = $('#sum dd').text(); //проверка
      //alert('$order_sum = '+ $order_sum);
      $order_sum +=0;
      
      if ($order_sum > 0){
          $.ajax({
            type: m_method,
            url: m_action,
            data: m_data,
            success: function(result){            
                if (result == 'error'){
                  $('#error').show();
                  $('#bg_shadow2').show();
                }
                else{
                  
                  $('#obr_zvon_box_stoimost').hide();
                  $('#bg_shadow').hide();
                  $('.modal').hide();
                  $('#obr_zvon_box').hide();
                  
                  
                  $('#spasibo').show();
                  $('#bg_shadow2').show();
                  
                  setTimeout(function() { $('#spasibo').fadeOut(); $('#bg_shadow2').fadeOut(); }, 3000)                  
                }
                
            }
        });//ajax
      }else {
        alert('В вашей корзине пусто! Для оформления заказа, пожалуйста, положите товар в корзину.');
      }
  });
  /* ============//форма - покупки (корзины) ===============*/    
  
   
    
    
    var jakor=0;
   
    if ( jakor = window.location.hash ){
      if (jakor == '#cat8'){        
        $('#cat8').show();
      }
    }
 
	
	
	
	
	
	
	
	
	
});