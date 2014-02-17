//pass the $ function another function and it'll run only after all the elements on the page have been created
$(function(){

	//traditionally we would do $("#names li").click(...)
	//but if we do that, it attaches the event listener after the lis are created,
	//and then when we add new ones (via the form), they won't have the listener,
	//because they weren't around when this code ran.

	//with $("#names").on('click', 'li', ...),
	//we can listen for clicks on lis without attaching one listener for each li.
	//we can simply attach one listener to the parent and listen for the event to bubble up.
	//more on 'event bubbling' here: http://www.mattlunn.me.uk/blog/2012/05/what-does-event-bubbling-mean/
	$("#names").on('click', "li", function(){
		$(this).toggleClass("love");
	})

	$("#add-names").submit(function(e){
		//do this otherwise the browser will try to navigate to the form submit page
		e.preventDefault();

		//grab the text from the input field...
		var name = $("#add-names input").val();
		//put it into a new li...
		var newli = $("<li>").text(name);
		//put the li into the ul
		$("#names").append(newli);
		//clear the input so we can type again.
		$("#add-names input").val("");
	});
})