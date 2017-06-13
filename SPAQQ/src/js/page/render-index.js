/**
 * Created by matrix on 2017/5/26.
 */   
   var $ = require('../lib/jquery-3.1.1.js');
   var Swiper = require('../lib/swiper.min.js');
   
         var indexPage={
    	 indexInit:function(){
    		this.indexLocal();
    		this.indexSwiper();
    		this.indexTab();
    	},
    	
//  	点击切换url
    	indexLocal:function(){ 
    		$("#slider .swiper-slide a").on("click",function(){
			var index=$(this).index(),
			para=$(this).data("anchor"),
			url=location.href+'#'+para;
			location.hash='#'+para;
	          });
    	    },
    	    
//  	    Swiper插件
    	indexSwiper:function(){
    		var swiper = new Swiper('.QQ-nav .swiper-container', {
		slidesPerView: 5,
		paginationClickable: true,
		spaceBetween: 10,
		freeMode: true
	        });
    	},
    	
    	//Tab切换
    	indexTab:function(){
    		$('.swiper-slide').on('click',function(){
		var index =$(this).index();
        $(this).children().addClass("active").end().siblings().children().removeClass('active');
        $(".num").hide().eq(index).show();

               })
    	},
       }
    
    indexPage.indexLocal();
    indexPage.indexSwiper();         
    indexPage.indexTab();
  