// Redo jQuery slideshow but instead of using classes,
// select every element on the page from one parent
// element and using alternative selectors. Try hard not to use
// classes or IDs, except for the initial element.


$(document).ready(function(){
	alert("doc is ready");

$(".parent div:first-child").click(function(){//originally $("header")
	$(this).hide()
});

$(":input").click(function(){ //formerly $("button")
	$(":input").animate({
    opacity: 0.25,
    marginLeft: "+500",
    //height: "toggle"
  }, 5000, function() {
    // Animation complete.
    	$(":input").animate({
    opacity: 1.0,
    marginLeft: "0",
    //height: "toggle"
  }, 5000, function() {
  });
  });
});

$("div p:contains('ipsum')").click(function(){ //was $("p").click(function()
	$("div:first-child").show() // was $("header")
});

$(".parent div:eq(2)").on( "mouseover", function() {//originally $("h3")
  $( this ).css( "color", "red" );
});

$(".parent div:eq(2)").on( "mouseleave", function() {//originally $("h3")
  $( this ).css( "color", "black" );
});

$("div div:has(h5)").mouseover(function(){ //originally h5
	$("h5").animate({
	padding: "+250px"
}, 3000, function() {
	//Animation complete.
	});
});

$("div div:has(h5)").mouseleave(function(){//originally h5
	$("h5").animate({
	padding: "-250px"
}, 3000, function() {
	//Animation complete.
	});
});

$("div ul").click(function() { //formerly $( ".divvy1" )
  $( "div ul > p" ).slideToggle( "slow", function() { //formerly $(".divvy1 p")
    // Animation complete.
  });
});


}); //doc is ready bracket

