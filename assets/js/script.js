 $(function() {

 	$('.card').on('click', function(){
 		$(this).toggleClass("card--open");
 	});
 	
 	$('.card__like').on('click', function(event){
 		$(this).toggleClass("card__like--red");
 		event.stopPropagation();
 		event.preventDefault();
 	});

 	$('.card__follow-btn').on('click', function(event){
 		$(this).toggleClass("card__follow-btn--following");
 		event.stopPropagation();
 		event.preventDefault();
 		
 	})
      
  });