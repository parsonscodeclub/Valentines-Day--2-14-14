$(function(){

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

	$("#names").on('click', "li", function(){
		$(this).toggleClass("love");
	})
})