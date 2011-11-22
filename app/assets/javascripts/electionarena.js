$(document).ready(function() {	 
	$(function() {
		$("#datepicker, #datepicker1, #datepicker2").datepicker();
	});
	$('.bubbleInfo').each(function () {
		var distance = 10;
		var time = 1;
		var hideDelay = 1;
		var hideDelayTimer = null;
		var beingShown = false;
		var shown = false;
		var trigger = $('.trigger', this);
		var popup = $('.popup', this).css('opacity', 0);
		$([trigger.get(0), popup.get(0)]).mouseover(function () {
		  if (hideDelayTimer) clearTimeout(hideDelayTimer);

		  if (beingShown || shown) {
			return;
		  } else {
			beingShown = true;
			popup.css({
			  top: 30,
			  left: -5,
			  display: 'block'
			})
			.animate({
			  top: '-=' + distance + 'px',
			  opacity: 1
			}, time, 'swing', function() {
			  beingShown = false;
			  shown = true;
			});
		  }
		}).mouseout(function () {
		  if (hideDelayTimer) clearTimeout(hideDelayTimer);
		  
		  hideDelayTimer = setTimeout(function () {
			hideDelayTimer = null;
			popup.animate({
			  top: '-=' + distance + 'px',
			  opacity: 0
			}, time, 'swing', function () {
			  shown = false;
			  popup.css('display', 'none');
			});
		  }, hideDelay);
		});
	 });
	$('.readMoreLink').click(function(){
		if($(this).parent().find('.moreBlock').hasClass('dispNone')) {
			$(this).parent().find('.moreBlock').removeClass('dispNone');
			$(this).empty().prepend('Read Less &raquo;');
		} else {
			$(this).parent().find('.moreBlock').addClass('dispNone');
			$(this).empty().prepend('Read More &raquo;');
		}
	});
	$('.candMoreLink').click(function(){
		if($(this).parents('.candidateList1').next('.moreCandBlock').hasClass('dispNone')) {
			$(this).parents('.candidateList1').next('.moreCandBlock').removeClass('dispNone');
			$(this).parents('.candidateList1').css('border-bottom','0px');
			$(this).empty().prepend('Read Less &raquo;');
		} else {
			$(this).parents('.candidateList1').next('.moreCandBlock').addClass('dispNone');
			$(this).parents('.candidateList1').css('border-bottom','1px dashed #B4D2CA');
			$(this).empty().prepend('Read More &raquo;');
		}
	});
	$('.anaLink').click(function(){
		if($(this).parent().next('.typeQuestionForm').hasClass('dispNone')) {
			$(this).parent().next('.typeQuestionForm').removeClass('dispNone');
		} else {
			$(this).parent().next('.typeQuestionForm').addClass('dispNone');
		}
	});
	$('.accordeonBlockLink').click(function(){
		if($(this).parent().next('.typeQuestionForm').next('.candidateAnswers').hasClass('dispNone')) {
			$(this).parent().next('.typeQuestionForm').next('.candidateAnswers').removeClass('dispNone');
			$(this).parent().addClass('accordeonBlockAct');
			$(this).addClass('accordeonBlockLinkAct');
		} else {
			$(this).parent().next('.typeQuestionForm').next('.candidateAnswers').addClass('dispNone');
			$(this).parent().removeClass('accordeonBlockAct');
			$(this).removeClass('accordeonBlockLinkAct');
		}
	});
	$('.accordeonBlockLink1').click(function(){
		if($(this).parents('.topicAccordBlock').next('.questionsList').hasClass('dispNone')) {
			$(this).parents('.topicAccordBlock').next('.questionsList').removeClass('dispNone');
			$(this).addClass('accordeonBlockLinkAct1');
		} else {
			$(this).parents('.topicAccordBlock').next('.questionsList').addClass('dispNone');
			$(this).removeClass('accordeonBlockLinkAct1');
		}
	});
	$('.flagLink').click(function(){
		if($(this).hasClass('flagLinkAct')) {
			$(this).removeClass('flagLinkAct');
		} else {
		$(this).addClass('flagLinkAct');
		}
	});
	$('.goodLink').click(function(){
		if($(this).hasClass('goodLinkAct')) {
			$(this).removeClass('goodLinkAct');
		} else {
		$(this).addClass('goodLinkAct');
		}
	});
	$('.badLink').click(function(){
		if($(this).hasClass('badLinkAct')) {
			$(this).removeClass('badLinkAct');
		} else {
		$(this).addClass('badLinkAct');
		}
	});
	$('#hideLink').click(function(){
		$('#helpBlock').hide();
		$('#helpBlockColapsed').show();
	});
	$('#hideLink1').click(function(){
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	$('#hideLink2').click(function(){
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	$('#learnMoreLink').click(function(){
		$('#helpBlockColapsed').hide();
		$('#helpBlock').show();
	});
	$('#addNewQLink').click(function(){
		$(this).parents('.typeQuestionFormCollapsed').hide();
		$(this).parents('.typeQuestionFormCollapsed').prev().show();
	});
	$('#addNewQLink2').click(function(){
		$(this).parents('.typeQuestionFormCollapsed').hide();
		$(this).parents('.typeQuestionFormCollapsed').prev().show();
	});
	$('#candAboutLink').click(function(){
		$('.tabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#candQABlock, #candTopicsBlock, #candWallBlock').hide();
		$('#candAboutBlock').show();
	});
	$('#candQALink').click(function(){
		$('.tabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#candAboutBlock, #candTopicsBlock, #candWallBlock').hide();
		$('#candQABlock').show();
	});
	$('#candTopicsLink').click(function(){
		$('.tabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#candAboutBlock, #candQABlock, #candWallBlock').hide();
		$('#candTopicsBlock').show();
	});
	$('#candWallLink').click(function(){
		$('.tabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#candAboutBlock, #candQABlock, #candTopicsBlock').hide();
		$('#candWallBlock').show();
	});
	$('#filterByOffice').click(function(){
		if(this.style.backgroundPosition === '-231px -272px') {
			this.style.backgroundPosition = '-231px -231px';
			$("#officeFilterBlock").slideUp(50);
		} else {
			this.style.backgroundPosition = '-231px -272px';
			$("#officeFilterBlock").slideToggle(200);
		}
	});
	$('#filterByLocation').click(function(){
		if(this.style.backgroundPosition === '-231px -272px') {
			this.style.backgroundPosition = '-231px -231px';
			$("#locationFilterBlock").slideUp(50);
		} else {
			this.style.backgroundPosition = '-231px -272px';
			$("#locationFilterBlock").slideToggle(200);
		}
	});
	$('#filterByDate').click(function(){
		if(this.style.backgroundPosition === '-231px -272px') {
			this.style.backgroundPosition = '-231px -231px';
			$("#dateFilterBlock").slideUp(50);
		} else {
			this.style.backgroundPosition = '-231px -272px';
			$("#dateFilterBlock").slideToggle(200);
		}
	});
	$('#filterFindCandidate').click(function(){
		if(this.style.backgroundPosition === '-231px -272px') {
			this.style.backgroundPosition = '-231px -231px';
			$("#findCandidateBlock").slideUp(50);
		} else {
			this.style.backgroundPosition = '-231px -272px';
			$("#findCandidateBlock").slideToggle(200);
		}
	});
	$(function() {
		var zIndexNumber = 100;
		$('span.bubbleInfo').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 1;
		});
	});
	$('.loginBlockIn1 input, .paymentMethodInfo input, .freeTextInp, .leftFilterForm input, .typeQuestionForm input, .typeQuestionForm textarea, .firstAnswer textarea').each(function() {
	   var default_value = this.value;
	   $(this).focus(function(){
		  if(this.value == default_value && this.value != 'Login' && this.value != 'Submit' && this.value != 'Browse') {
			 this.value = '';
		  }
	   });
	   $(this).blur(function(){
		  if(this.value == '') {
			 this.value = default_value;
		  }
	   }); 
	});
	$('.visaMethod').click(function(){
		$('.paymentVariants a').removeClass('actMethod');
		$(this).addClass("actMethod");
		$('#mcMethodBlock, #ppMethodBlock, #wireMethodBlock').hide();
		$('#visaMethodBlock').show();
	});
	$('.masterCardMethod').click(function(){
		$('.paymentVariants a').removeClass('actMethod');
		$(this).addClass("actMethod");
		$('#visaMethodBlock, #ppMethodBlock, #wireMethodBlock').hide();
		$('#mcMethodBlock').show();
	});
	$('.payPalMethod').click(function(){
		$('.paymentVariants a').removeClass('actMethod');
		$(this).addClass("actMethod");
		$('#visaMethodBlock, #mcMethodBlock, #wireMethodBlock').hide();
		$('#ppMethodBlock').show();
	});
	$('.wireMethod').click(function(){
		$('.paymentVariants a').removeClass('actMethod');
		$(this).addClass("actMethod");
		$('#visaMethodBlock, #mcMethodBlock, #ppMethodBlock').hide();
		$('#wireMethodBlock').show();
	});
	$('#planBlock1').click(function(){
		$('.step4Right div').removeClass('actPlanBlock');
		$(this).addClass("actPlanBlock");
		$('.step4Right div').find('.radInp').prop('checked', false);
		$(this).find('.radInp').prop('checked', true);
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
	});
	$('#planBlock2').click(function(){
		$('.step4Right div').removeClass('actPlanBlock');
		$(this).addClass("actPlanBlock");
		$('.step4Right div').find('.radInp').prop('checked', false);
		$(this).find('.radInp').prop('checked', true);
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
	});
	$('#planBlock3').click(function(){
		$('.step4Right div').removeClass('actPlanBlock');
		$(this).addClass("actPlanBlock");
		$('.step4Right div').find('.radInp').prop('checked', false);
		$(this).find('.radInp').prop('checked', true);
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
	});
	$('#planBlock4').click(function(){
		$('.step4Right div').removeClass('actPlanBlock');
		$(this).addClass("actPlanBlock");
		$('.step4Right div').find('.radInp').prop('checked', false);
		$(this).find('.radInp').prop('checked', true);
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
	});
	$('#planBlock5').click(function(){
		$('.step4Right div').removeClass('actPlanBlock');
		$(this).addClass("actPlanBlock");
		$('.step4Right div').find('.radInp').prop('checked', false);
		$(this).find('.radInp').prop('checked', true);
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
	});
	$('#planBlock1').mouseover(function () {
		$('.step4Left ul li').removeClass('selItem');
		$('.step4Left ul li').addClass('selItem');
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
	}).mouseout(function () {
		if ($('#planBlock1').hasClass('actPlanBlock')) {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
		} else if ($('#planBlock2').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
		} else if ($('#planBlock3').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
		} else if ($('#planBlock4').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
		} else {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
		}
	});
	$('#planBlock2').mouseover(function () {
		$('.step4Left ul li').removeClass('selItem');
		$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
	}).mouseout(function () {
		if ($('#planBlock1').hasClass('actPlanBlock')) {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
		} else if ($('#planBlock2').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
		} else if ($('#planBlock3').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
		} else if ($('#planBlock4').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
		} else {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
		}
	});
	$('#planBlock3').mouseover(function () {
		$('.step4Left ul li').removeClass('selItem');
		$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
	}).mouseout(function () {
		if ($('#planBlock1').hasClass('actPlanBlock')) {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
		} else if ($('#planBlock2').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
		} else if ($('#planBlock3').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
		} else if ($('#planBlock4').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
		} else {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
		}
	});
	$('#planBlock4').mouseover(function () {
		$('.step4Left ul li').removeClass('selItem');
		$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
	}).mouseout(function () {
		if ($('#planBlock1').hasClass('actPlanBlock')) {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
		} else if ($('#planBlock2').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
		} else if ($('#planBlock3').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
		} else if ($('#planBlock4').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
		} else {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
		}
	});
	$('#planBlock5').mouseover(function () {
		$('.step4Left ul li').removeClass('selItem');
		$('.step4Left ul li').addClass('selItem');
		$('.step4Left h3, .step4Left h4').hide();
		$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
	}).mouseout(function () {
		if ($('#planBlock1').hasClass('actPlanBlock')) {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan1, .step4Left h4.headerPlanO1').show();
		} else if ($('#planBlock2').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan2, .step4Left h4.headerPlanO2').show();
		} else if ($('#planBlock3').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan3, .step4Left h4.headerPlanO3').show();
		} else if ($('#planBlock4').hasClass('actPlanBlock')){
			$('.step4Left ul li').removeClass('selItem');
			$('.bi1, .bi2, .bi3, .bi4, .bi5, .bi6, .bi7, .bi8, .bi9').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan4, .step4Left h4.headerPlanO4').show();
		} else {
			$('.step4Left ul li').addClass('selItem');
			$('.step4Left h3, .step4Left h4').hide();
			$('.step4Left h3.headerPlan5, .step4Left h4.headerPlanO5').show();
		}
	});
	$("#citeSlider").easySlider({
		auto: true, 
		continuous: true,
		pause: 10000,
		numeric: true,
		controlsShow: true,
		numericId: 'citeControls'
	});
	$("#partnersSlider").easySlider({
		auto: true, 
		continuous: true,
		pause: 10000,
		numeric: true,
		controlsShow: true
	});
	var params = {
		changedEl: ".selector select",
		visRows: 5,
		scrollArrows: true
	}
	cuSel(params);
	$('#cuselFrame-addOffice span').click(function(){
		if($(this).hasClass('addNewOfClick')) {
			$('.addNewOffBlock').slideToggle('fast');
		} else {
			$('.addNewOffBlock').slideUp('fast');
		}
	});
	$('#cuselFrame-addDate span').click(function(){
		if($(this).hasClass('addNewDate')) {
			$('.calendBlock').slideToggle('fast');
		} else {
			$('.calendBlock').slideUp('fast');
		}
	});
	$('#memberLink').click(function(){
		$("#signupFormBlock").hide();
		$('#signUpLink').removeClass("signUpLink");
		if($(this).hasClass('thBack')) {
			$("#loginFormBlock").hide();
			$(this).removeClass("thBack");
		} else {
			$("#loginFormBlock").slideToggle("fast");
			$(this).addClass("thBack");
		}
	});
	$('#newAccLink').click(function(){
		if(this.style.backgroundPosition === '-440px -857px') {
			$(".addLinks").slideUp("fast");
			this.style.backgroundPosition = '-440px -825px';
		} else {
			$(".addLinks").slideToggle("fast");
			this.style.backgroundPosition = '-440px -857px';
		}
	});
	$('#signUpLink').click(function(){
		$("#loginFormBlock").hide();
		$('#memberLink').removeClass("thBack");
		if($(this).hasClass('signUpLink')) {
			$("#signupFormBlock").slideUp("fast");
			$(this).removeClass("signUpLink");
		} else {
			$("#signupFormBlock").slideToggle("fast");
			$(this).addClass("signUpLink");
		}
	});
	$('#nextBtn1').click(function(){
		if ($("#slider1").hasClass('dispYes')) {
			if ($("#topSliderInIn").find('li.lastSlide').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.firstSlide').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().next('li').fadeIn(0).addClass('currentSlide');
			}
		} else if ($("#slider2").hasClass('dispYes')) {
			if ($("#topSliderInIn").find('li.lastSlide1').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.firstSlide1').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().next('li').fadeIn(0).addClass('currentSlide');
			}
		} else {
			if ($("#topSliderInIn").find('li.lastSlide2').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.firstSlide2').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().next('li').fadeIn(0).addClass('currentSlide');
			}
		}
	});
	$('#prevBtn1').click(function(){
		if ($("#slider1").hasClass('dispYes')) {
			if ($("#topSliderInIn").find('li.firstSlide').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.lastSlide').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().prev('li').fadeIn(0).addClass('currentSlide');
			}
		} else if ($("#slider2").hasClass('dispYes')) {
			if ($("#topSliderInIn").find('li.firstSlide1').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.lastSlide1').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().prev('li').fadeIn(0).addClass('currentSlide');
			}
		} else {
			if ($("#topSliderInIn").find('li.firstSlide2').hasClass('currentSlide')) {
				$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
				$("#topSliderInIn").find('li.lastSlide2').addClass('currentSlide').fadeIn(0);
			} else {
				$("#topSliderInIn").find('li.currentSlide').removeClass('currentSlide').hide().prev('li').fadeIn(0).addClass('currentSlide');
			}
		}
	});
	$('#tsControls1 a').click(function(){ 
		$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
		$("#topSliderInIn").find('li.firstSlide').addClass('currentSlide').show();
		$('#tsControls a').removeClass('current');
		$(this).addClass('current');
		$('#slider2, #slider3').removeClass('dispYes').addClass('dispNone');
		$('#slider1').fadeIn(0).addClass('dispYes');
	});
	$('#tsControls2 a').click(function(){ 
		$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
		$("#topSliderInIn").find('li.firstSlide1').addClass('currentSlide').show();
		$('#tsControls a').removeClass('current');
		$(this).addClass('current');
		$('#slider1, #slider3').removeClass('dispYes').addClass('dispNone');
		$('#slider2').fadeIn(0).addClass('dispYes');
	});
	$('#tsControls3 a').click(function(){ 
		$("#topSliderInIn").find('li.mainPromo').removeClass('currentSlide').hide();
		$("#topSliderInIn").find('li.firstSlide2').addClass('currentSlide').show();
		$('#tsControls a').removeClass('current');
		$(this).addClass('current');
		$('#slider1, #slider2').removeClass('dispYes').addClass('dispNone');
		$('#slider3').fadeIn(0).addClass('dispYes');
	});
	$('#sortingLink').click(function(){
		$("#sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink2').click(function(){
		$("#sortingPopBlock, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock2").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock2").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink3').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock3").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock3").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink4').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock4").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock4").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink5').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock5").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock5").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink6').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock6").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock6").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink7').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock7").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock7").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink8').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink9, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock8").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock8").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink9').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock10, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink10, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock9").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock9").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink10').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock11, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink11, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock10").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock10").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink11').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10, #sortingPopBlock12, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink12').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock11").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock11").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingLink12').click(function(){
		$("#sortingPopBlock, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7, #sortingPopBlock8, #sortingPopBlock9, #sortingPopBlock10,  #sortingPopBlock11, .supportBlockOpened").hide();
		$('#sortingLink, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7, #sortingLink8, #sortingLink9, #sortingLink10, #sortingLink11').removeClass("slOpened");
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		if($(this).hasClass('slOpened')) {
			$("#sortingPopBlock12").slideUp(10);
			$(this).removeClass("slOpened");
		} else {
			$("#sortingPopBlock12").slideToggle(10);
			$(this).addClass("slOpened");
		}
	});
	$('#sortingPopBlock a').click(function(){
		$('#sortingPopBlock a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink font').empty();
		$('#sortingLink font').prepend(ltext);
		$("#sortingPopBlock").slideUp(10);
		$('#sortingLink').removeClass("slOpened");
	});
	/*$('#sortingPopBlock2 a').click(function(){
		$('#sortingPopBlock2 a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink2 font').empty();
		$('#sortingLink2 font').prepend(ltext);
		$('#sortingLink2 font').addClass('act');
		$("#sortingPopBlock2").slideUp(10);
		$('#sortingLink2').removeClass("slOpened");
		if($('#sortingLink2 font').hasClass('act')) {
			$('#sortingLink2').parent().next().find('font').show();
			$('#sortingLink2').parent().next().css('margin','0 0 0 20px')
		} else {
			$('#sortingLink2').parent().next().css('margin','9px 0 0 20px')
			$('#sortingLink2').parent().next().find('font').hide();
		}
	});*/
	$('#sortingPopBlock3 a').click(function(){
		$('#sortingPopBlock3 a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink3 font').empty();
		$('#sortingLink3 font').prepend(ltext);
		$("#sortingPopBlock3").slideUp(10);
		$('#sortingLink3').removeClass("slOpened");
	});
	/*$('#sortingPopBlock4 a').click(function(){
		$('#sortingPopBlock4 a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink4 font').empty();
		$('#sortingLink4 font').prepend(ltext);
		$('#sortingLink4 font').addClass('act');
		$("#sortingPopBlock4").slideUp(10);
		$('#sortingLink4').removeClass("slOpened");
		if($('#sortingLink4 font').hasClass('act')) {
			$('#sortingLink4').parent().next().find('font').show();
			$('#sortingLink4').parent().next().css('margin','0 0 0 20px')
		} else {
			$('#sortingLink4').parent().next().css('margin','9px 0 0 20px')
			$('#sortingLink4').parent().next().find('font').hide();
		}
	});*/
	$('#sortingPopBlock5 a').click(function(){
		$('#sortingPopBlock5 a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink5 font').empty();
		$('#sortingLink5 font').prepend(ltext);
		$("#sortingPopBlock5").slideUp(10);
		$('#sortingLink5').removeClass("slOpened");
	});
	$('#sortingPopBlock10 a').click(function(){
		$('#sortingPopBlock10 a').removeClass('act')
		$(this).addClass("act");
		var ltext = $(this).text();
		$('#sortingLink10 font').empty();
		$('#sortingLink10 font').prepend(ltext);
		$("#sortingPopBlock10").slideUp(10);
		$('#sortingLink10').removeClass("slOpened");
	});
	$('.supportBlockOpened li').click(function(){
		if($(this).hasClass('liAct')) {
			$(this).removeClass("liAct");
		} else {
			$(this).addClass("liAct");
		}
	});
	$('.supportBlockOpened .cancelLink').click(function(){
		$('.supportBlockOpened').hide();
		$('#supportCandidate').removeClass("feelLinkAct").empty().prepend('Support this Candidate');
	});
	$('#supportCandidate').click(function(){
		$("#sortingPopBlock1, #sortingPopBlock2, #sortingPopBlock3, #sortingPopBlock4, #sortingPopBlock5, #sortingPopBlock6, #sortingPopBlock7").hide();
		$('#sortingLink1, #sortingLink2, #sortingLink3, #sortingLink4, #sortingLink5, #sortingLink6, #sortingLink7').removeClass("slOpened");
		if($(this).hasClass('feelLinkAct')) {
			$(".supportBlockOpened").slideUp(10);
			$(this).removeClass("feelLinkAct").empty().prepend('Support this Candidate');
		} else {
			$(".supportBlockOpened").slideToggle(10);
			$(this).addClass("feelLinkAct").empty().prepend('Show your support by');
		}
	});
	$('#statusLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallImageBlock, #wallVideoBlock, #wallLinkBlock, #wallEventBlock, #wallPostBlock').hide();
		$('#wallStatusBlock').show();
	});
	$('#imageLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallStatusBlock, #wallVideoBlock, #wallLinkBlock, #wallEventBlock, #wallPostBlock').hide();
		$('#wallImageBlock').show();
	});
	$('#videoLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallImageBlock, #wallStatusBlock, #wallLinkBlock, #wallEventBlock, #wallPostBlock').hide();
		$('#wallVideoBlock').show();
	});
	$('#linkLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallImageBlock, #wallVideoBlock, #wallStatusBlock, #wallEventBlock, #wallPostBlock').hide();
		$('#wallLinkBlock').show();
	});
	$('#eventLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallImageBlock, #wallVideoBlock, #wallLinkBlock, #wallStatusBlock, #wallPostBlock').hide();
		$('#wallEventBlock').show();
	});
	$('#blogpostLink').click(function(){
		$('.wallTabs a').removeClass('selectedTab');
		$(this).addClass("selectedTab");
		$('#wallImageBlock, #wallVideoBlock, #wallLinkBlock, #wallEventBlock, #wallStatusBlock').hide();
		$('#wallPostBlock').show();
	});
	$(".dashboardTable thead td:last-child").css('border-radius','0 5px 0 0');
	$('.dashboardTable tbody tr.readedLine, .dashboardTable tbody tr.unreadedLine').mouseover(function () {
		$(this).addClass("hoverLine");
	}).mouseout(function () {
		$(this).removeClass("hoverLine");
	});
	$('.dashboardTable tbody tr.readedLine, .dashboardTable tbody tr.unreadedLine').click(function () {
		if ($(this).next('tr').hasClass('dispNone')) {
			$(this).next('tr').removeClass("dispNone");
			$(this).find('.dbCandName').addClass('dbCandNameOp');
		} else {
			$(this).next('tr').addClass("dispNone");
			$(this).find('.dbCandName').removeClass('dbCandNameOp');
		}
	});
	$('#questionsForMeLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#myAnswersBlock, #questionsIAskedBlock, #chartsBlock').hide();
		$('#questionsForMeBlock').show();
	});
	$('#myAnswersLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#questionsForMeBlock, #questionsIAskedBlock, #chartsBlock').hide();
		$('#myAnswersBlock').show();
	});
	$('#questionsIAskedLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#questionsForMeBlock, #myAnswersBlock, #chartsBlock').hide();
		$('#questionsIAskedBlock').show();
	});
	$('#chartsLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#questionsForMeBlock, #myAnswersBlock, #questionsIAskedBlock').hide();
		$('#chartsBlock').show();
	});
	$('#topicsLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#positionsBlock').hide();
		$('#topicsBlock').show();
	});
	$('#positionsLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#topicsBlock').hide();
		$('#positionsBlock').show();
	});
	$('#summaryLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#postsBlock').hide();
		$('#summaryBlock').show();
	});
	$('#postsLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#summaryBlock').hide();
		$('#postsBlock').show();
	});
	$('#overallLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#totalFollowersBlock, #totalSupportersBlock').hide();
		$('#overallBlock').show();
	});
	$('#totalFollowersLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#overallBlock, #totalSupportersBlock').hide();
		$('#totalFollowersBlock').show();
	});
	$('#totalSupportersLink').click(function(){
		$('.bigTabsDb a').removeClass('act');
		$(this).addClass("act");
		$('#totalFollowersBlock, #overallBlock').hide();
		$('#totalSupportersBlock').show();
	});

	window.formOpened = false;
	window.form1Opened = false;
	var bodyOnclick = document.body.onclick;
	document.body.onclick = function(event){
		event = event == null ? window.event : event;
		if(typeof bodyOnclick == 'function'){
			bodyOnclick();
		}
		var el = event.srcElement ? event.srcElement : event.target;
		var lel = el;
		while(lel && lel.id != "loginArea"){
			lel = lel.parentNode;
		}
		var sel = el;
		while(sel && sel.id != "signupArea"){
			sel = sel.parentNode;
		}
		if(window.formOpened && lel == null && sel == null){
				clickLink(document.getElementById("memberLink"));
  		} else if(window.form1Opened && lel == null && sel == null){
				clickLink(document.getElementById("signUpLink"));
		}
		window.formOpened = lel != null;
		window.form1Opened = sel != null;
	}
});
function clickLink(link) {
    var cancelled = false;

    if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0,
            false, false, false, false,
            0, null);
        cancelled = !link.dispatchEvent(event);
    }
    else if (link.fireEvent) {
        cancelled = !link.fireEvent("onclick");
    }

    if (!cancelled) {
        window.location = link.href;
    }
}
