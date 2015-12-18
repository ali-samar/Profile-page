"use strict"
$(document).ready(function(){


	$('body').on('click', '.menu a', function(event){
		event.preventDefault();
		var id = $(this).attr("href");
		if (id == "#perso") {
			$('#overlay').show();
		}
		else {
			$('.view').hide();
			$(id).show();
		}
	});

	$('body').on('click', '.btn', function(event){
		event.preventDefault();
		$('#overlay').hide();
	});
});


var mytemplate = function(mymustache, cible, json) {
	var template = mymustache;
	var info = Mustache.to_html(template, json);
	cible.html(info);
}

$.getJSON("https://s.idsympa.com/u-24.json", function(json) {
	var template = $('#tpl').html(); // template c'est le html avec les trous 
	mytemplate(template, $('body'), json);


});

