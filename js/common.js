$(document).ready(function() {

	if($('input[data-inputmask]').length > 0) {
		$('input[data-inputmask]').mask("+7 (999) 999-99-99");
	}

	var hamburger = $('#hamburger-icon');
	hamburger.click(function() {
		hamburger.toggleClass('active');
		$(".header-top .menu").toggleClass('active');
		return false;
	});

	$(".client-item").click(function() {
		$(".client-comment").removeClass("active");
		$(".client-item").removeClass("active");
		$(this).addClass("active");
		switch ($(this).attr("id")) {
			case "rosmen-client":
				$("#rosmen").addClass("active");
				break;
			case "ontex-client":
				$("#ontex").addClass("active");
				break;
			case "maltimex-client":
				$("#maltimex").addClass("active");
				break;
			case "granit-client":
				$("#granit").addClass("active");
				break;
			case "ohrana-client":
				$("#ohrana").addClass("active");
				break;
			case "22cube-client":
				$("#22cube").addClass("active");
				break;
		}

	});

	$(".head-services").click(function() {
		$(".head-services").removeClass("active");
		$(this).addClass("active");
		$(".items-services").removeClass("active");
		switch ($(this).attr("id")) {
			case "bukh-head":
				$("#bukh").addClass("active");
				break;
			case "kadr-head":
				$("#kadr").addClass("active");
				break;
			case "nalog-head":
				$("#nalog").addClass("active");
				break;
		}

	});

	$(".block-show").click(function() {
		if(!$(this).prev().hasClass("active")){
			$(this).prev().addClass("active");
			$(this).find("span").text("Скрыть");
		}else{
			$(this).prev().removeClass("active");
			$(this).find("span").text("Показать всё");
		}
	});

	$(".get-item").click(function() {
		if(!$(this).hasClass("active")){
			$(".get-item.active").removeClass("active")
													.find(".get-text")
													.slideUp(200);
			$(this).addClass("active")
							.find(".get-text")
							.slideDown(200);
		}else{
			$(this).removeClass("active")
							.find(".get-text")
							.slideUp(200);
		}

	});

	$.datetimepicker.setLocale('ru');

	$('#datetimepick').datetimepicker({
		i18n:{
			ru:{
				months:[
				'Январь','Февраль','Март','Апрель',
				'Май','Июнь','Июль','Август',
				'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
				"Пн", "Вт", "Ср", "Чт", 
				"Пт", "Сб", "Вс",
				]
			}
		},
		timepicker:true,
		format:'d.m.Y H:i',
		lang:'ru'
	});

	$(".radiotimepick").change(function(){
			if($("#time").prop("checked")){
				$(".form-group-date-time").slideDown(400);
			}else{
				$(".form-group-date-time").slideUp(400);
			}
	});

	$(window).scroll(function() {

		if($(this).scrollTop() != 0) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}

	});

	$('.totop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

		$('.toLastForm').click(function() {
			if($('div').is('.section-last')){
				var scrollLastForm = $('.section-last').offset().top;
				$('body,html').animate({scrollTop:scrollLastForm},800);
			}	
			return false;
		});

	
		$('.toAudit').click(function() {
			if($('div').is('.section-going-audit')){
				var scrollAudit = $('.section-going-audit').offset().top;
				$('body,html').animate({scrollTop:scrollAudit},800);
			}
			return false;
		});

	
		$('.toOffer').click(function() {
			if($('div').is('.section-offer')){
				var scrollOffer = $('.section-offer').offset().top;
				$('body,html').animate({scrollTop:scrollOffer},800);
			}
			return false;
		});


	$('.check-all').click(function() {
		$(".items-services.active").find("input[type=checkbox]").attr('checked',true);
		return false;
	});


	$(".punkt .button-calc").click(function() {

		$(this).closest(".punkt").fadeOut(300,function(){
			$(this).next().fadeIn();
		});
		return false;
	});

	$(".no-thanks").click(function() {
		$(".section-calc-text").slideDown(200,function(){
			$('body,html').animate({scrollTop: $(this).offset().top},800);
		});
		return false;
	});

	$(".calc-bs-card, .btn-discuss").click(function() {
		$(".calc-last").slideDown(200,function(){
			$('body,html').animate({scrollTop: $(this).offset().top},800);
		});
		return false;
	});

		
	$('.calc-form, .email-form, .section-last form, .section-going-audit form, .section-free-question form').submit(function(){
		$.magnificPopup.open({
			showCloseBtn: false,
			items: {
				src: '<div class="preloader"><img src="img/oval.svg"></div>',
				type: 'inline'
			}
		});
		var bool = false;
		var arrayData = $(this).serializeArray();
		arrayData.forEach(function(obj){
			if(obj.name == "email" || obj.name == "phone"){
				if(obj.value != ""){
					bool = true;
				}
			}
		});
		if(bool){
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize(),
				success: function(data){
					$.magnificPopup.close();
					$.magnificPopup.open({
						items: {
							src: '#popup-sucess',
							type: 'inline'
						}
					});
				},
				error: function (data){
					$.magnificPopup.close();
					$.magnificPopup.open({
						items: {
							src: '#popup-error',
							type: 'inline'
						}
					});
				}
			});
		}else{
			$.magnificPopup.close();
			$(this).find("input[name=email], input[name=phone]").addClass("error");
		}
		return false;
	});


	$(".range-person").ionRangeSlider({
		min: 1,
		max: 100,
		from: 20,
		step: 1,
		prettify_enabled: false,
		onStart: function (data) {
       $("input[name = range-person]").val(data.from)
    },
		onChange: function (data) {
        $("input[name = range-person]").val(data.from)
    }
	});

	$(".range-oper").ionRangeSlider({
		min: 1,
		max: 4000,
		from: 100,
		step: 1,
		prettify_enabled: false,
		onStart: function (data) {
       $("input[name = range-oper]").val(data.from)
    },
		onChange: function (data) {
        $("input[name = range-oper]").val(data.from)
    }
	});

	$(".range-kkm").ionRangeSlider({
		min: 1,
		max: 20,
		from: 5,
		step: 1,
		prettify_enabled: false,
		onStart: function (data) {
       $("input[name = range-kkm]").val(data.from)
    },
		onChange: function (data) {
        $("input[name = range-kkm]").val(data.from)
    }
	});

	$('.tooltip-opr').tooltipster({
		position: 'bottom',
		content: $('<ul><li>Строка выписки банка (т.е. каждая платежка) = 1 операция</li><li>Кассовый ордер = 1 операция</li><li>Накладная на поступление товаров и материалов (количество позиций не важно) = 1 операция.</li><li>Накладная на отгрузку товаров (кол-во позиций не важно) = 1 операция.</li><li>Списание материалов (кол-во позиций не важно) = 1 операция.</li><li>Акт услуг полученных = 1 операция.</li><li>Акт услуг оказанных = 1 операция.</li><li>Авансовые отчеты – каждая строка отчета (т.е. по количеству приложенных квитанций) = 1 операция.</li><li>Начисление % по кредитам и займам – 1 договор = минимум 2 операции.</li><li>ГТД = 1 операция.</li><li>Документ Комплектация номенкулатуры = 1 операция.</li>')
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	ymaps.ready(initMap);
	function initMap(){   
		if($('div').is('#map')) {
			var map = new ymaps.Map("map", {
				center: [55.75262906, 37.63099676],
				zoom: 10,
				controls: ["smallMapDefaultSet"]
			});

			map.behaviors.disable(['scrollZoom', 'drag']);

			var Placemark = new ymaps.Placemark([55.74984313, 37.68352632], {
				hintContent: 'RSF: Полное и частичное бухгалтерское сопровождение в Москве.',
				balloonContent: 'Предлагаем полное и частичное бухгалтерское сопровождение и обслуживание ООО и ИП в Москве. Поможем вам значительно снизить расходы на бухучет и налоги. Сэкономили своим клиентам уже более 9 млрд. рублей. Работаем с 2003 года. Обращайтесь!'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map-marker.png',
				iconImageSize: [84, 83],
				iconImageOffset: [-33, -83]
			});

			map.geoObjects.add(Placemark);
		}
	}

});
