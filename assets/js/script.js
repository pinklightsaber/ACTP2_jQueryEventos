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
 		
 	});

	$("#image").change(function(){
		var img = $(this).val();
		console.log(img);
		$(".create__image").children().attr('src', 'assets/images/squared/'+img);
	})

	$("#author").change(function(){
		var author = $(this).val();
		console.log(author);
		$(".create__profile").children().attr('src', 'assets/images/profiles/'+author);
	})

	$(".create__submit").on('click',function(event){
		event.preventDefault();
		var followers 	= $("#followers").val();
		var like 		= $("#likes").val();
		var following 	= $("#following").val();
	})


	



 	
 	



      
  });