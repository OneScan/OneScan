/************************************************************
 * DomainVaidator.js                                        *
 *                                                          *
 * Dev: Jayed Rafi											*
 *															*
 * Properties:												*
 * This program tries to find identical URL is given server *
 * by sendinh a request (AJAX) to the provided server.		*
 * *********************************************************/
$(document).ready(function(){
	$("#validator").click(function(){
		var url = new URL("https://onescan.github.io/sc/");//Server location
		url += $("#extension").val(); //Extenstion from user input
		url += "/index.html";
		
		if(url != ""){
			$.ajax({
				url: url,
				type: 'HEAD',
				error: function(){
				$("#console").text("Domain availabe !!!");//Location not found means availabe
				},
				success: function(){
					$("console").text("Sorry. This domain is already taken. Try again.");//Location found means taken
				}
			});
		}
		else{
			$("#console").text("Input not valid !");//Invalid
		}
	});
});
