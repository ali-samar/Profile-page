"use strict"
$(document).ready(function(){


	$('body').on('click', '.menu a', function(){
		$('.view').hide();
		var id = $(this).attr("href");
		$(id).show();
		if (id == "#perso") {
			$("#perso p").show();
		};
	});



});


	// $.getJSON("http://vps227573.ovh.net/u-24.json", function(json) {
		/* var result = $('span[elt]'); // Création du tableau
		for (var i = 0; i < result.length; i++) {
			var attribut = $(result[i]).attr('elt');
			var valeur = json[attribut];
			$(result[i]).html(valeur); */
			
	//	$.getJSON("http://vps227573.ovh.net/u-24.json", function(json) {
		/* 	var fullName = "{{first_name}} {{last_name}}";
			var info = Mustache.to_html(fullName, json); // prend les infos grace a mustache dans json et intègre dans html
			$('h1').html(info); */
		// }
	// });

	
		var mytemplate = function(mymustache, cible, json) {
			var template = mymustache;
			var info = Mustache.to_html(template, json);
			cible.html(info);
		}

	$.getJSON("http://vps227573.ovh.net/u-24.json", function(json) {
		var template = $('#tpl').html(); // template c'est le html avec les trous 
		mytemplate(template, $('body'), json);


	});