$(document).ready(function() {

	$(".nav-item").on("click", function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".multi-collapse.collapse").removeClass('show');
	});

	$(".container-fluid, .nav-item, .nav-submenu li").on("click", function(){
		$('.side-menu').removeClass("show-menu");
	});

	$(".nav-collapse").on("click", function(){
		$(this).addClass('active').siblings().removeClass('active');

		$('.icon-chevron').toggleClass("rotate");
	});

	$(".navbar-toggler").on("click", function(){
		$('.side-menu').toggleClass("show-menu");
	});

	$(".nav-submenu li").on("click", function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.icon-chevron').removeClass("rotate");
	});

	$("a[href='#home']").on("click", function(){
		$("#home").show();
		$("#gerenciar, #enviar-arquivo").hide();
	});

	$("a[href='#gerenciar']").on("click", function(){
		$("#home, #enviar-arquivo").hide();
		$("#gerenciar").show();
	});

	$("a[href='#enviar-arquivo']").on("click", function(){
		$("#enviar-arquivo").show();
		$("#home, #gerenciar").hide();
	});
	
});





