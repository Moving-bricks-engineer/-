$(function(){

	var bannerImgs = $('.banner-img').children();
	var bannerBtnBox = $('.banner-btn');
	var bannerRightList = $('.banner-right').children();
	var curBanner = 0;
	var timer = null;


	bannerImgs.eq(curBanner).addClass('active');
	for(var i=0; i<bannerImgs.length; i++){
		var span = document.createElement('span');
		bannerBtnBox.append(span);
	}
	bannerBtnBox.children().eq(curBanner).addClass('active')

	bannerBtnBox.on('click', 'span', function(){
		curBanner = $(this).index();
		bannerChange()	
	})

	bannerRightList.on('mouseenter', function(){

		curBanner = $(this).index();
		bannerChange()
	})

	timer = setInterval(function(){
		curBanner++;
		if(curBanner==bannerImgs.length){
			curBanner = 0;
		}
		bannerChange()
	}, 3000)

	function bannerChange(){
		bannerRightList.removeClass('active')
		bannerRightList.eq(curBanner).addClass('active')

		bannerBtnBox.children().removeClass('active')
		bannerBtnBox.children().eq(curBanner).addClass('active')
		bannerImgs.removeClass('active')
		bannerImgs.eq(curBanner).addClass('active');
	}
})





















