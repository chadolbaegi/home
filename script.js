$(document).ready(function() {   
    $("#previmgcontain").click(function (e) { 
        if ($("#previmg").hasClass("morning")) {
	$('#previmg').attr("src","afternoon.png");
        $("#previmg").addClass("afternoon");
        $("#previmg").removeClass("morning");
        e.stopPropagation();
	}
	else if ($("#previmg").hasClass("afternoon")) {
	$('#previmg').attr("src","night.png");
        $("#previmg").addClass("night");
        $("#previmg").removeClass("afternoon");
	}
	else if ($("#previmg").hasClass("night")) {
	$('#previmg').attr("src","morning.png");
        $("#previmg").addClass("morning");
        $("#previmg").removeClass("night");
	}
    }); 
});

  var image = new Array ();
  image[0] = "hakase.png";
  image[1] = "mado.png";
  image[2] = "akari.png";
  image[4] = "kyoyui.png";
  image[5] = "17.png";
  image[6] = "15.png";
  image[7] = "ika.png";
  image[8] = "saya.gif";

  var size = image.length
  var x = Math.floor(size*Math.random())

  $('.mascot').attr('src',image[x]);