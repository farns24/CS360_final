$(document).ready(function (){

    $(".topBar").mouseenter(function(){
        $(this).fadeTo('fast',1);
        $(this).css("color","#FFFF9D");
	$(this).animate({'zoom':1.2},400);
	});
    $(".topBar").mouseleave(function(){
        $(this).fadeTo('fast',.85);
        $(this).css("color",5);
	$(this).animate({'zoom':1},400);
	});
    
    $(".sideMenuItem").mouseenter(function(){
        $(this).css("left",-5);
	});
    
    $(".sideMenuItem").mouseleave(function(){
        $(this).css("left","0");
	});

    $(".creationGridItem").hover(function(){
        $(this).animate({'zoom':1.2},400);
	},function(){
        $(this).animate({'zoom':1},400);
	});
      
    $( ".accordion" ).accordion(); 

});
