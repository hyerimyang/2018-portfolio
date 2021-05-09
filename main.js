
  $(document).ready(function(){

////////////////////////////////////////마우스 스크롤 반응////////////////////////////////////////

//		window.onload = function () {
//            $(".box").each(function () {
//                // 개별적으로 Wheel 이벤트 적용
//                $(this).on("mousewheel DOMMouseScroll", function (e) {
//                    e.preventDefault();
//                    var delta = 0;
//                    if (!event) event = window.event;
//                    if (event.wheelDelta) {
//                        delta = event.wheelDelta / 120;
//                        if (window.opera) delta = -delta;
//                    } else if (event.detail) delta = -event.detail / 3;
//                    var moveTop = null;
//                    // 마우스휠을 위에서 아래로
//                    if (delta < 0) {
//                        if ($(this).next() != undefined) {
//                            moveTop = $(this).next().offset().top;
//                        }
//                    // 마우스휠을 아래에서 위로
//                    } else {
//                        if ($(this).prev() != undefined) {
//                            moveTop = $(this).prev().offset().top;
//                        }
//                    }
//                    // 화면 이동 0.8초(800)
//                    $("html,body").stop().animate({
//                        scrollTop: moveTop + 'px'
//                    }, {
//                        duration: 300, complete: function () {
//                        }
//                    });
//                });
//            });
//        }

////////////////////////////////////////마우스 스크롤 반응////////////////////////////////////////

	
	    //fixed menu 고정메뉴 
	    //side_menu if문: 스크롤반응
		nump = 0; //sdiemenu 변수
		page2 = 0; //각 section에 도착했을때 반응하게 하는 변수
		page4 = 0;
		page5 = 0;
		$(window).scroll(function(){
			sc = $(window).scrollTop()
			//section1 scroll => HOME 
			if (sc>=0 && sc<1000) 
			{
				//section1 고정메뉴
				nump = 0;			
				//fixed_menu 
				$('#side_menu').animate({'right':'0px'});
				//fixed_menu : css설정
				$('#side_menu ul li:eq(0)').addClass('on').siblings().removeClass('on'); //선택된건 고정되있게 
				$('#side_menu ul li').children('div').css({'width':'13px','background-color':'rgba(0,0,0,0.3)'});
				$('#side_menu ul li').eq(nump).children('div').css({'width':'30px','background-color':'#000'});
				$('#side_menu ul li p').css({'color':'#000'});
				//fixed_menu : animate설정
				$('#side_menu ul li').children('p').stop().animate({'marginRight':'-1000px','opacity':'0'});
				$('#side_menu ul li').eq(nump).children('p').stop().animate({'marginRight':'20px','opacity':'1'},400);

			}
			
			////////////////////////////////section2 scroll => WHO AM I///////////////////////////////////////////////////
			else if (sc>=1000&& sc<2000)
			{
				//section2 고정메뉴 
				nump = 1; 
				//fixed_menu 
				$('#side_menu').animate({'right':'0px'});
				//fixed_menu : css설정
				$('#side_menu ul li:eq(1)').addClass('on').siblings().removeClass('on');
				$('#side_menu ul li').children('div').css({'width':'13px','background-color':'rgba(0,0,0,0.3)'});
				$('#side_menu ul li').eq(nump).children('div').css({'width':'30px','background-color':'#000'});
				$('#side_menu ul li p').css({'color':'#000'});
				//fixed_menu : animate설정
				$('#side_menu ul li').children('p').stop().animate({'marginRight':'-1000px','opacity':'0'});
				$('#side_menu ul li').eq(nump).children('p').stop().animate({'marginRight':'20px','opacity':'1'},400);
		
				//section2에 스크롤이 왔을 때 동작
				page2 = page2 + 1;
				if(page2==1){

				 //section2 jquery
				 //WHO AM I 효과
				 $('#text_deco').animate({'opacity':'1'},800);
				 $('#left_wrap #text').delay(1550).animate({'opacity':'1'},500);
				 $('#left_wrap h1').delay(810).animate({'letterSpacing':'0'},800);

				 //imagebox 흩어져있던거 제자리로 모으기
				 $('#image_box li:nth-child(1)').delay(810).animate({'top':'55px','left':'50px'},500);
				 $('#image_box li:nth-child(2)').delay(810).animate({'top':'10px','left':'200px'},300);
				 $('#image_box li:nth-child(3)').delay(810).animate({'top':'0px','left':'350px'},500);
				 $('#image_box li:nth-child(4)').delay(810).animate({'top':'100px','right':'-10px'},500);
				 $('#image_box li:nth-child(5)').delay(810).animate({'top':'155px','left':'70px'},900);
				 $('#image_box li:nth-child(6)').delay(1550).animate({'opacity':'1'},900);
				 $('#image_box li:nth-child(7)').delay(810).animate({'top':'220px','right':'10px'},800);
				 $('#image_box li:nth-child(8)').delay(810).animate({'top':'275px','left':'0px'},700);
				 $('#image_box li:nth-child(9)').delay(810).animate({'top':'410px','left':'140px'},500);
				 $('#image_box li:nth-child(10)').delay(810).animate({'bottom':'0px','left':'270px'},500);
				 $('#image_box li:nth-child(11)').delay(810).animate({'bottom':'0px','right':'70px'},400);
				 
				 //처음에는 자기소개만 보이게 하기
				 $('#introduce').delay(1550).animate({'opacity':'1'},900);

				 //처음에 about me 선태된 상태 표시 
				 $('#image_box li:eq(5) .dv1').css('opacity','1');
				 $('#image_box li:eq(5) .dv2').stop().animate({'width':'85%'},200);
				 $('#image_box li:eq(5) p').css('color','#000');
				 $('#image_box li:eq(5) h3').stop().animate({'left':'20px'},200);
				
				 //이미지에 마우스 올려놨을 때 제이쿼리 효과가 그자리에 멈춰있게 하기 
				 $('.li_over').mouseenter(function(){
					$(this).children('.dv1').css('opacity','1');
					$(this).siblings().children('.dv1').css('opacity','0');
					$(this).children('p').css({'color':'#000'});
					$(this).siblings().children('p').css({'color':'#fff'});
					$(this).children('.dv2').stop().animate({'width':'85%'},200);
					$(this).siblings().children('.dv2').stop().animate({'width':'0%'},200);
					$(this).children('h3').stop().animate({'left':'20px'},200);
					$(this).siblings().children('h3').stop().animate({'left':'320px'},200);
				 });
				
				vid = $('audio').get(0); //music 일시정지 재생 제어하는 변수 
				//선택된 image_box li에 마우스올려놨을때 모든 효과 
				//6번li hover 효과 ==> about me
				$('#image_box li:nth-child(6)').mouseenter(function(){
					$('#image_box li:nth-child(6) img').stop().animate({'width':'280px','height':'280px','top':'-10px','left':'-10px'},500); //이미지확대 
					$('#introduce').css({'opacity':'1'}); //left #introduce 내용 뜸 
					$('#music,#life_force,#uni,#skill,#career').css({'opacity':'0'}); //나머지 left 내용들은 안보임 
					vid.pause(); //노래 일시정지 
				});
				$('#image_box li:nth-child(6)').mouseleave(function(){
					$('#image_box li:nth-child(6) img').stop().animate({'width':'250px','height':'250px','top':'0px','left':'0px'},500); //이미지원래대로 축소 
					$('#introduce').css({'opacity':'1'}); //다른li에 leave 할때까지 introduce내용 계속보임 
				});

				//1번li hover 효과 ==> music
				$('#image_box li:nth-child(1)').mouseenter(function(){
					$('#image_box ul li:nth-child(1) img').stop().animate({'width':'170px','height':'120px','top':'-10px','left':'-10px'},500);
					$('#music').css({'opacity':'1'});
					$('#introduce,#life_force,#uni,#skill,#career').css({'opacity':'0'});
					vid.play(); // 노래시작 
					
				});
				$('#image_box li:nth-child(1)').mouseleave(function(){
					$('#image_box ul li:nth-child(1) img').stop().animate({'width':'150px','height':'100px','top':'0px','left':'0px'},500);
					$('#music').css({'opacity':'1'});
					vid.play(); //노래 계속 나옴 
				});

				//4번 li hover 효과 ==>life_force
				$('#image_box ul li:nth-child(4)').mouseenter(function(){
					$('#image_box ul li:nth-child(4) img').stop().animate({'width':'140px','height':'140px','top':'-10px','left':'-10px'},500);
					$('#life_force').css({'opacity':'1'});
					$('#music,#introduce,#uni,#skill,#career').css({'opacity':'0'});
					vid.pause(); //노래 일시정지 
					
				});
				$('#image_box ul li:nth-child(4)').mouseleave(function(){
					$('#image_box ul li:nth-child(4) img').stop().animate({'width':'120px','height':'120px','top':'0px','left':'0px'},500);
					$('#life_force').css({'opacity':'1'});
				});

				//8번 li hover 효과 ==>University
				$('#image_box ul li:nth-child(8)').mouseenter(function(){
					$('#image_box ul li:nth-child(8) img').stop().animate({'width':'185px','height':'155px','top':'-10px','left':'-10px'},500);
					$('#uni').css({'opacity':'1'});
					$('#music,#introduce,#life_force,#skill,#career').css({'opacity':'0'});
					vid.pause();
					
				});
				$('#image_box ul li:nth-child(8)').mouseleave(function(){
					$('#image_box ul li:nth-child(8) img').stop().animate({'width':'165px','height':'135px','top':'0px','left':'0px'},500);
					$('#uni').css({'opacity':'1'});
				});

				//11번 li hover 효과 ==>Skill
				$('#image_box ul li:nth-child(11)').mouseenter(function(){
					$('#image_box ul li:nth-child(11) img').stop().animate({'width':'150px','height':'150px','top':'-10px','left':'-10px'},500);
					$('#skill').css({'opacity':'1'});
					$('#music,#introduce,#life_force,#uni,#career').css({'opacity':'0'});
					$('#skill li:eq(0) h3').animate({'width':'80%'},300); 
					$('#skill li:eq(1) h3').animate({'width':'100%'},500);
					$('#skill li:eq(2) h3').animate({'width':'100%'},600);
					$('#skill li:eq(3) h3').animate({'width':'70%'},550);
					vid.pause();
					
				});
				$('#image_box ul li:nth-child(11)').mouseleave(function(){
					$('#image_box ul li:nth-child(11) img').stop().animate({'width':'130px','height':'130px','top':'0px','left':'0px'},500);
					$('#skill').css({'opacity':'1'});
					$('#skill li:eq(0) h3').animate({'width':'80%'},300);
					$('#skill li:eq(1) h3').animate({'width':'100%'},500);
					$('#skill li:eq(2) h3').animate({'width':'100%'},600);
					$('#skill li:eq(3) h3').animate({'width':'70%'},550);
				});

				//9번 li hover 효과 ==>Career
				$('#image_box ul li:nth-child(9)').mouseenter(function(){
					$('#image_box ul li:nth-child(9) img').stop().animate({'width':'150px','height':'150px','top':'-10px','left':'-10px'},500);
					$('#career').css({'opacity':'1'});
					$('#music,#introduce,#life_force,#uni,#skill').css({'opacity':'0'});
					vid.pause();
					
				});
				$('#image_box ul li:nth-child(9)').mouseleave(function(){
					$('#image_box ul li:nth-child(9) img').stop().animate({'width':'130px','height':'130px','top':'0px','left':'0px'},500);
					$('#career').css({'opacity':'1'});
				});


				 //music play li 
				 setInterval(function(){
						//var random = Math.round(Math.random()*20);
					$('#play li:nth-child(1)').css('height',Math.random()*30);
					$('#play li:nth-child(2)').css('height',Math.random()*20);
					$('#play li:nth-child(3)').css('height',Math.random()*40);
					$('#play li:nth-child(4)').css('height',Math.random()*15);
				 },100);


				}
				 
			}
			
			////////////////////////////////section3 scroll => MY HISTORY//////////////////////////////////////////////////
			else if (sc>=2000 && sc<3000)
			{
				nump = 2; 	
				//fixed_menu 
				$('#side_menu').animate({'right':'0px'});
				//fixed_menu : css설정
				$('#side_menu ul li:eq(2)').addClass('on').siblings().removeClass('on');
				$('#side_menu ul li').children('div').css({'width':'13px','background-color':'rgba(255,255,255,0.3)'});
				$('#side_menu ul li').eq(nump).children('div').css({'width':'30px','background-color':'#FFF'});
				$('#side_menu ul li p').css({'color':'#FFF'});
				//fixed_menu : animate설정
				$('#side_menu ul li').children('p').stop().animate({'marginRight':'-1000px','opacity':'0'});
				$('#side_menu ul li').eq(nump).children('p').stop().animate({'marginRight':'20px','opacity':'1'},400);

			}
			
			////section4 scroll => WORKS///////////////////////////////////////////////////////////////////////////////////////////
			else if (sc>=3000 && sc<4000)
			{
				nump = 3; 	
				//fixed_menu 
				$('#side_menu').animate({'right':'0px'});
				//fixed_menu : css설정
				$('#side_menu ul li:eq(3)').addClass('on').siblings().removeClass('on');
				$('#side_menu ul li').children('div').css({'width':'13px','background-color':'rgba(0,0,0,0.3)'});
				$('#side_menu ul li').eq(nump).children('div').css({'width':'30px','background-color':'#000'});
				$('#side_menu ul li p').css({'color':'#000'});
				//fixed_menu : animate설정
				$('#side_menu ul li').children('p').stop().animate({'marginRight':'-1000px','opacity':'0'});
				$('#side_menu ul li').eq(nump).children('p').stop().animate({'marginRight':'20px','opacity':'1'},400);
				
				//section4에 도착했을 때 
				page4 = page4 + 1;
				if(page4==1){
				
				//시작하면 랜덤으로 이미지 나타나게함 
				$('#chanel img').delay(500).animate({'opacity':'1'});
				$('#amore img').delay(350).animate({'opacity':'1'});
				$('#hite img').delay(300).animate({'opacity':'1'});
				$('#cafe img').delay(650).animate({'opacity':'1'});
				$('#airbnb img').delay(680).animate({'opacity':'1'});
				$('#hyundai img').delay(420).animate({'opacity':'1'});
				$('#bom img').delay(850).animate({'opacity':'1'});
				$('#ral img').delay(700).animate({'opacity':'1'});

				//img 나타난 다음에 txt 나타나게하기 
				$('#chanel_circle,#amore_circle,#hite_circle,#cafe_circle,#airbnb_circle,#hyundai_circle,#bom_circle,#ral_circle').delay(1100).animate({'opacity':'1'},600);
				
				}

			}
			
			//////////////////////////////section5 scroll => CONTACT///////////////////////////////////////////////
			else if (sc>=4000 && sc<5000)
			{
				nump = 4; 	
				//fixed_menu 
				$('#side_menu').animate({'right':'0px'});
				//fixed_menu : css설정
				$('#side_menu ul li:eq(4)').addClass('on').siblings().removeClass('on');
				$('#side_menu ul li').children('div').css({'width':'13px','background-color':'rgba(0,0,0,0.3)'});
				$('#side_menu ul li').eq(nump).children('div').css({'width':'30px','background-color':'#000'});
				$('#side_menu ul li p').css({'color':'#000'});
				//fixed_menu : animate설정
				$('#side_menu ul li').children('p').stop().animate({'marginRight':'-1000px','opacity':'0'});
				$('#side_menu ul li').eq(nump).children('p').stop().animate({'marginRight':'20px','opacity':'1'},400);

				page5 = page5 + 1;
				if(page5==1){
		
				//div에 hover했을 때 text-deco와 글자색 변경 
				$('.circle_bd').mouseenter(function(){
					$(this).siblings('h4').css({'color':'#16a6b6','text-decoration':'underline'});
				});
				$('.circle_bd').mouseleave(function(){
					$(this).siblings('h4').css({'color':'#000','text-decoration':'none'});
				});

					//logo 무궁화
					$('#flower_logo div:eq(0)').animate({'width':'730px'},500);
					$('#flower_logo img').delay(500).animate({'top':'-10px'},300,function(){
						$('#flower_logo img').animate({'top':'15px'},300);
					});

					$('#flower_logo div:eq(1)').delay(1100).animate({'width':'730px'},500);

				}


				}//scroll if-else if문 끝
								
			}); //scroll 전체 끝 
			
//////////////////////////scrollTop 끝///////////////////////////////////////////////////////////////////////////////

			//fixed_menu jquery 설정/////
			//fixed_menu클릭하면 해당 스크롤로 이동
			$('#side_menu ul li').click(function(){
				linum=	$(this).index()*1000;
				$('body,html').animate({'scrollTop':linum},200);
			});

			//fixed_menu mouseenter/leave 
			$('#side_menu ul li').mouseenter(function(){
				//$('#side_menu ul li div').css('width','13px'); //모든 div길이가 줄어듬 
				$(this).children('div').css({'width':'30px'}); //enter된 div길이가 늘어남 
				//$('#side_menu ul li p').css({'margin-right':'-1000px','opacity':'0'}); //모든 글자 p가 오른쪽으로 사라짐 
				//$('#side_menu ul li p').css({'margin-right':'-1000px','opacity':'0'});				
				$(this).children('p').stop().css({'margin-right':'20px','opacity':'1'}); //선택된 p가 나타남 
			});

			$('#side_menu ul li').mouseleave(function(){
					$(this).not('.on').children('div').css({'width':'13px'});
					$(this).not('.on').children('p').css({'margin-right':'-1000px','opacity':'0'});
			});

			
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  //section1 jquery ==> MAIN HOME 
	  //yanghyerim이름 랜덤으로 뜨게하기 
	  $('#name_txt li:eq(0)').delay(1200).animate({'opacity':'1'},1000);
	  $('#name_txt li:eq(1)').delay(500).animate({'opacity':'1'},1200);
	  $('#name_txt li:eq(2)').delay(900).animate({'opacity':'1'},1000);
	  $('#name_txt li:eq(3)').delay(400).animate({'opacity':'1'},1300);
	  $('#name_txt li:eq(4)').delay(1300).animate({'opacity':'1'},1500);
	  $('#name_txt li:eq(5)').delay(600).animate({'opacity':'1'},1200);
	  $('#name_txt li:eq(6)').delay(1100).animate({'opacity':'1'},1500);
	  $('#name_txt li:eq(7)').delay(800).animate({'opacity':'1'},1500);
	  $('#name_txt li:eq(8)').delay(700).animate({'opacity':'1'},1200);
	  $('#name_txt li:eq(9)').delay(1000).animate({'opacity':'1'},1200);
      
	  //아래에서 꽃 나타남
	  $('#flower_img img').delay(1800).animate({'right':'-200px','bottom':'0px'},1200);
      
	  //bottom_txt (web design portfolio)나타나게 하기
	  $('#bottom_txt p').delay(2000).animate({'top':'0px'},800);
	  $('#bottom_txt h3').delay(2000).animate({'top':'3px'},800);
	  
	  //top_menu 나타나기 
	  $('#menu').delay(2600).animate({'top':'0'},300);

	  //topmenu 클릭하면 해당 스크롤로 이동
	  $('#menu li').click(function(){
	 	 tnum = $(this).index()*1000;
		 $('body,html').animate({'scrollTop':tnum},500);
	  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//section2 jquery ==> scroll반응에 있음 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//section3 jquery ==> history
	//작은이미지 li border효과 테두리생기게하기
	$('#select_img li').mouseenter(function(){
		$(this).css('border','8px solid #fff');
		$(this).siblings().css('border','none');
	});
	$('#select_img li').mouseleave(function(){
		$(this).css('border','8px solid #fff'); 
		$(this).siblings().css('border','none'); 
    });

	//section3 sns효과, 큰이미지 뜨게하기, 년도 뜨게하기, 해당사진에올려놓으면 거기서멈춤, 
	$('#select_img li:eq(0)').mouseenter(function(){
		$('#sns1').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/1.jpg")','background-size':'100%'});
		$('#section3 p').html('1996');
		clearInterval(section3_auto); //해당 li에서 멈춤
		section3_num = 0; //0번째
		$('#sns_wrap div').siblings().not('#sns1').stop().animate({'bottom':'230px','opacity':'0'},300); //sns1 제외하고 다른건 다 안보이게함
	});
	$('#select_img li:eq(0)').mouseleave(function(){
		$('#sns1').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/1.jpg")','background-size':'100%'});
		$('#section3 p').html('1996');
	});

	$('#select_img li:eq(1)').mouseenter(function(){
		$('#sns2').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/2.jpg")','background-size':'100%'});
		$('#section3 p').html('1999');
		clearInterval(section3_auto);
		section3_num = 1;
		$('#sns_wrap div').siblings().not('#sns2').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(1)').mouseleave(function(){
		$('#sns2').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/2.jpg")','background-size':'100%'});
		$('#section3 p').html('1999');
	});

	 $('#select_img li:eq(2)').mouseenter(function(){
		$('#sns3').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/3.jpg")','background-size':'100%'});
		$('#section3 p').html('2002');
		clearInterval(section3_auto);
		section3_num = 2;
		$('#sns_wrap div').siblings().not('#sns3').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(2)').mouseleave(function(){
		$('#sns3').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/3.jpg")','background-size':'100%'});
		$('#section3 p').html('2002');
	});

	$('#select_img li:eq(3)').mouseenter(function(){
		$('#sns4').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/4.jpg")','background-size':'100%'});
		$('#section3 p').html('2010');
		clearInterval(section3_auto);
		section3_num = 3;
		$('#sns_wrap div').siblings().not('#sns4').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(3)').mouseleave(function(){
		$('#sns4').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/4.jpg")','background-size':'100%'});
		$('#section3 p').html('2010');
	});

	$('#select_img li:eq(4)').mouseenter(function(){
		$('#sns5').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/5.jpg")','background-size':'100%'});
		$('#section3 p').html('2012');
		clearInterval(section3_auto);
		section3_num = 4;
		$('#sns_wrap div').siblings().not('#sns5').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(4)').mouseleave(function(){
		$('#sns5').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/5.jpg")','background-size':'100%'});
		$('#section3 p').html('2012');
	});

	  $('#select_img li:eq(5)').mouseenter(function(){
		$('#sns6').stop().animate({'bottom':'510px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/6.jpg")','background-size':'150%'});
		$('#section3 p').html('2013');
		clearInterval(section3_auto);
		section3_num = 5;
		$('#sns_wrap div').siblings().not('#sns6').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(5)').mouseleave(function(){
		$('#sns6').stop().animate({'bottom':'510px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/6.jpg")','background-size':'150%'});
		$('#section3 p').html('2013');
	});
	
	$('#select_img li:eq(6)').mouseenter(function(){
		$('#sns7').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/7.jpg")','background-size':'100%'});
		$('#section3 p').html('2014 - 2015');
		clearInterval(section3_auto);
		section3_num = 6;
		$('#sns_wrap div').siblings().not('#sns7').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(6)').mouseleave(function(){
		$('#sns7').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/7.jpg")','background-size':'100%'});
		$('#section3 p').html('2014 - 2015');
	});

	$('#select_img li:eq(7)').mouseenter(function(){
		$('#sns8').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/8.jpg")','background-size':'135%'});
		$('#section3 p').html('2015');
		clearInterval(section3_auto);
		section3_num = 7;
		$('#sns_wrap div').siblings().not('#sns8').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	  $('#select_img li:eq(7)').mouseleave(function(){
		$('#sns8').stop().animate({'bottom':'450px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/8.jpg")','background-size':'135%'});
		$('#section3 p').html('2015');
	});

	$('#select_img li:eq(8)').mouseenter(function(){
		$('#sns9').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/9.jpg")','background-size':'130%'});
		$('#section3 p').html('2016 - 2017');
		clearInterval(section3_auto);
		section3_num = 8;
		$('#sns_wrap div').siblings().not('#sns9').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(8)').mouseleave(function(){
		$('#sns9').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/9.jpg")','background-size':'130%'});
		$('#section3 p').html('2016 - 2017');
	});

	$('#select_img li:eq(9)').mouseenter(function(){
		$('#sns10').stop().animate({'bottom':'400px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/10.jpg")','background-size':'100%'});
		$('#section3 p').html('2015');
		clearInterval(section3_auto);
		section3_num = 9;
		$('#sns_wrap div').siblings().not('#sns10').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(9)').mouseleave(function(){
		$('#sns10').stop().animate({'bottom':'400px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/10.jpg")','background-size':'100%'});
		$('#section3 p').html('2015');
	});

	$('#select_img li:eq(10)').mouseenter(function(){
		$('#sns11').stop().animate({'bottom':'530px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/11.jpg")','background-size':'100%'});
		$('#section3 p').html('2016');
		clearInterval(section3_auto);
		section3_num = 10;
		$('#sns_wrap div').siblings().not('#sns11').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(10)').mouseleave(function(){
		$('#sns11').stop().animate({'bottom':'530px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/11.jpg")','background-size':'100%'});
		$('#section3 p').html('2016');
	});

	$('#select_img li:eq(11)').mouseenter(function(){
		$('#sns12').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/12.jpg")','background-size':'110%'});
		$('#section3 p').html('2017');
		clearInterval(section3_auto);
		section3_num = 11;
		$('#sns_wrap div').siblings().not('#sns12').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(11)').mouseleave(function(){
		$('#sns12').stop().animate({'bottom':'500px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/12.jpg")','background-size':'110%'});
		$('#section3 p').html('2017');
	});

	  $('#select_img li:eq(12)').mouseenter(function(){
		$('#sns13').stop().animate({'bottom':'530px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/13.jpg")','background-size':'115%'});
		$('#section3 p').html('2018');
		clearInterval(section3_auto);
		section3_num = -1;	
		$('#sns_wrap div').siblings().not('#sns13').stop().animate({'bottom':'230px','opacity':'0'},300);
	});
	$('#select_img li:eq(12)').mouseleave(function(){
		$('#sns13').stop().animate({'bottom':'530px','opacity':'1'},300);
		$('#big_image').css({'background':'url("images/history/13.jpg")','background-size':'115%'});
		$('#section3 p').html('2018');
	});

	//li mouseleave 했을 때 다시 그 li 다음부터 자동재생됨 
	$('#select_img li').mouseleave(function(){
		section3_auto = setInterval(function(){
			section3_num = section3_num + 1;
			  $('#select_img li').eq(section3_num).css('border','8px solid #fff').siblings().css('border','none');
			  $('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			  $('#section3 p').html('1996');
			
			if(section3_num == 0 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('1996');
				$('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			}

			else if(section3_num == 1 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('1999');
				$('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			}
			else if(section3_num == 2 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2002');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 3 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2010');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 4 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2012');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 5 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2013');
				$('#big_image').css({'background-size':'150%'});
			}
			else if(section3_num == 6 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'510px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2014-2015');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 7 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2015');
				$('#big_image').css({'background-size':'140%'});
			}
			else if(section3_num == 8 ){ 
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2016-2017');
				$('#big_image').css({'background-size':'140%'});
			}
			else if(section3_num == 9 ){ 
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2015');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 10 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'400px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2016');
				$('#big_image').css({'background-size':'100%'});
			}
			else if(section3_num == 11 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'530px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300); 
				$('#section3 p').html('2017');
				$('#big_image').css({'background-size':'110%'});
			}
			else if(section3_num == 12 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('2018');
				$('#big_image').css({'background-size':'115%'});
				section3_num = -1;	
			}	 
		},2000)	
	});

	//section3 첫화면 => 첫번째 사진이 나타나도록 
	$('#select_img li:eq(0)').css('border','8px solid #fff');
	$('#big_image').css({'background':'url("history/1.jpg")','background-size':'100%'});
	$('#sns1').stop().animate({'bottom':'450px','opacity':'1'},300);
	  
	//자동으로 넘어가게하기 (big_image / sns/ border)
	section3_num = 0;
	section3_auto = setInterval(function(){
		section3_num = section3_num + 1;
			$('#select_img li').eq(section3_num).css('border','8px solid #fff').siblings().css('border','none');
			$('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			$('#section3 p').html('1996');
			
			if(section3_num == 0 ){  
				$('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				$('#section3 p').html('1996');
				$('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			}

			 else if(section3_num == 1 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('1999');
				  $('#big_image').css({'background':'url("images/history/'+(section3_num+1)+'.jpg")','background-size':'100%'});
			  }
			  else if(section3_num == 2 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2002');
				  $('#big_image').css({'background-size':'100%'});
			  }
			  else if(section3_num == 3 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2010');
				  $('#big_image').css({'background-size':'100%'});
			  }
			  else if(section3_num == 4 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2012');
				  $('#big_image').css({'background-size':'100%'});
			  }
			  else if(section3_num == 5 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2013');
				  $('#big_image').css({'background-size':'150%'});
			  }
			  else if(section3_num == 6 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'510px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('22014-2015');
				  $('#big_image').css({'background-size':'100%'});
			  }
			  else if(section3_num == 7 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2015');
				  $('#big_image').css({'background-size':'140%'});
				  }
			  else if(section3_num == 8 ){ 
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'450px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2016-2017');
				  $('#big_image').css({'background-size':'140%'});
				  }
			  else if(section3_num == 9 ){ 
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2015');
				  $('#big_image').css({'background-size':'100%'});
			  }
			  else if(section3_num == 10 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'400px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2016');
				  $('#big_image').css({'background-size':'100%'});
				  }
			  else if(section3_num == 11 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'530px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300); 
				  $('#section3 p').html('2017');
				  $('#big_image').css({'background-size':'110%'});
				  }
			  else if(section3_num == 12 ){  
				  $('#sns_wrap div').eq(section3_num).stop().animate({'bottom':'500px','opacity':'1'},300).siblings().stop().animate({'bottom':'230px','opacity':'0'},300);
				  $('#section3 p').html('2018');
				  $('#big_image').css({'background-size':'115%'});
				   section3_num = -1;	
			  }	 
	  },2000)	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				//section4 jquery ==> WORK
				//txt hover하면 동그라미 커짐 
				$('#chanel_circle').mouseenter(function(){
					$('#chanel_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#chanel_circle').mouseleave(function(){
					$('#chanel_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#amore_circle').mouseenter(function(){
					$('#amore_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#amore_circle').mouseleave(function(){
					$('#amore_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#hite_circle').mouseenter(function(){
					$('#hite_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#hite_circle').mouseleave(function(){
					$('#hite_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#cafe_circle').mouseenter(function(){
					$('#cafe_circle').stop().animate({'width':'200px','height':'200px'},300);
					$('#cafe_txt>h2').stop().animate({'opacity':'1'});
				});
				$('#cafe_circle').mouseleave(function(){
					$('#cafe_circle').stop().animate({'width':'120px','height':'120px'},300);
					$('#cafe_txt>h2').stop().animate({'opacity':'0'});
				});

				$('#airbnb_circle').mouseenter(function(){
					$('#airbnb_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#airbnb_circle').mouseleave(function(){
					$('#airbnb_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#hyundai_circle').mouseenter(function(){
					$('#hyundai_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#hyundai_circle').mouseleave(function(){
					$('#hyundai_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#bom_circle').mouseenter(function(){
					$('#bom_circle').stop().animate({'width':'200px','height':'200px'},300);
				});
				$('#bom_circle').mouseleave(function(){
					$('#bom_circle').stop().animate({'width':'120px','height':'120px'},300);
				});

				$('#ral_circle').mouseenter(function(){
					$('#ral_circle').stop().animate({'width':'200px','height':'200px'},300);
					$('#ral_txt>h2').stop().animate({'opacity':'1'});
				});
				$('#ral_circle').mouseleave(function(){
					$('#ral_circle').stop().animate({'width':'120px','height':'120px'},300);
					$('#ral_txt>h2').stop().animate({'opacity':'0'});
				});

				

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//section5 jquery ==> scroll반응에 들어감

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  });

 