//Creado por saag10, la persona mas guapa que mantiene a raya el tráfico de bolillo y telera


	var Cukie = getCookie("atkl");


//if cookie is not set, show the window with styles
 if(Cukie!="1"){

	displayBlock();
 }


//for the cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}


//Create elements and instance events
function displayBlock(){

	$("document").ready(function(){

		(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "http://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.3"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));


	var laic = "<fb:like href='https://www.facebook.com/hibriorg/?fref=ts' show_faces='false' width='450' style='float:left; margin-left:-17px; margin-top:5px;'></fb:like> <div id='fb-root'></div> ";

	var TotalLaics = "<div class='blanco'><div class='fb-page' data-href='https://www.facebook.com/hibriorg/?fref=ts' data-width='200px' data-hide-cover='false' data-show-facepile='false' data-show-posts='false'><div class='fb-xfbml-parse-ignore'></div></div> </div>";



		var square = document.createElement("div");
		square.id = "capaclick";
		$("body").append(square);

		var contenedor = document.createElement("div");
		contenedor.id = "contenedor";
		$(contenedor).insertAfter("#capaclick");

		var x0_002 = document.createElement("div");
		x0_002.id = "x0_002";
		$(x0_002).insertAfter(contenedor);


		var opaco = document.createElement("div");
		opaco.id = "opaco";
		$(opaco).insertAfter(x0_002);
		$(opaco).html(laic);


		var barrita = document.createElement("div");
		barrita.id = "barrita";
		barrita.innerHTML ="<h3> Gracias por visitarnos</h3>";
		$(barrita).insertAfter(contenedor);

		$("#contenedor").html(TotalLaics);


		FB.Event.subscribe('edge.create', function() { setCookie("atlk","1",1);  $(square).remove(); $(contenedor).remove(); $(x0_002).remove(); $(opaco).remove(); $(barrita).remove(); });
		FB.Event.subscribe('edge.remove', function() {  });
		setTimeout(function(){setCookie("atlk","1",1);  $(square).remove(); $(contenedor).remove(); $(x0_002).remove(); $(opaco).remove(); $(barrita).remove();} , 15000);



	});

}
