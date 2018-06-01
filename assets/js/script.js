 $(function() {

 	var img;
 	var author;

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
		img = $(this).val();
		console.log(img);
		$(".create__image").children().attr('src', 'assets/images/squared/'+img);
	})

	$("#author").change(function(){
		author = $(this).val();
		console.log(author);
		$(".create__profile").children().attr('src', 'assets/images/profiles/'+author);
	})

	$(".create__submit").on('click',function(event){
		event.preventDefault();
		var followers 	= $("#followers").val();
		var like 		= $("#likes").val();
		var following 	= $("#following").val();
		console.log(img);

		$('ul > li:eq(0)')
		.find('.card__img').attr('src', 'assets/images/squared/' + img );
		$('ul > li:eq(0)')
		.find('.card__profile').attr('src', 'assets/images/profiles/' + author);
		$('ul > li:eq(0)')
		.find('.social__number').eq(0).html(followers);
		$('ul > li:eq(0)')
		.find('.social__number').eq(1).html(likes);
		$('ul > li:eq(0)')
		.find('.social__number').eq(2).html(following);
		
	})


	



 	
 	



      
  });