var d = new Date();
var thehour = d.getHours(); 

if(thehour < 12 ) {
	$('#greeting').prepend('<span>おはよう</span>');
	$('#greeting').css('color', '#f5dd9d');
	$('.dailyk a').css('color', '#f5dd9d');
}
else if (thehour < 17 ) {
	$('#greeting').prepend('<span>こんにちは</span>');
	$('#greeting').css('color', '#f3819a');
	$('.dailyk a').css('color', '#f3819a');
}
else if (thehour <= 24) {
	$('#greeting').prepend('<span>こんばんは</span>');
	$('#greeting').css('color', '#83cace');
	$('.dailyk a').css('color', '#83cace');
};

var today = d.getDate();
var weekday = new Array('日常日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', 'どう曜日');
$('.date').text(weekday[d.getDay()]);

$(document).ready(function(){
   $('#4ch').click(function(){
     $('.boards').show("slow");
     $('#4ch').hide("slow");
   });
 });
$(document).ready(function(){
   $('.boards').click(function(){
     $('#4ch').show("slow");
     $('.boards').hide("slow");
   });
 });

/*var image = new Array ();
  image[0] = "";
  image[1] = "";
  image[2] = "";
  image[3] = "";
  image[4] = "";
  image[5] = "";

var image = ["file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/misc/Beach%20girl.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/misc/Girl%20body.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB/105991c7d0cfbcb2e65baf3c6472fb85.png", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%81%B2%E3%81%A0%E3%81%BE%E3%82%8A%E3%82%B9%E3%82%B1%E3%83%83%E3%83%81/1401892954742.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%81%B2%E3%81%A0%E3%81%BE%E3%82%8A%E3%82%B9%E3%82%B1%E3%83%83%E3%83%81/1401892827613.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%82%86%E3%82%86%E5%BC%8F/1399208428609.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%83%AD%E3%83%AA/02%20%282%29.png", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%83%AD%E3%83%AA/44113957_big_p0.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E4%B8%80%E8%88%AC/%E3%83%AD%E3%83%AA/1402924880396.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/misc/1382379080957.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/RWBY/1398254143063.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/RWBY/1402297422112.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/RWBY/tumblr_n1tbtvNaqd1tsnc1bo1_1280.gif", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%82%A2%E3%83%8A%E3%81%A8%E9%9B%AA%E3%81%AE%E5%A5%B3%E7%8E%8B/1392941510455.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%82%A2%E3%83%8A%E3%81%A8%E9%9B%AA%E3%81%AE%E5%A5%B3%E7%8E%8B/LifvMWV.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB/1382377510747.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%8F%E3%82%8D%E3%81%8C%E3%81%AD%E3%81%91%E3%82%93/hoshikawa_ginza_ch15_bonus.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%95%E3%81%8F%E3%82%89%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF/7f542e62.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%BE%E3%81%A9%E3%81%8B/1398526465447.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%BE%E3%81%A9%E3%81%8B/1398662719041.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%BE%E3%81%A9%E3%81%8B/1399100672684.png", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%81%BE%E3%81%A9%E3%81%8B/1400545839061.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%82%86%E3%82%8B%E3%82%86%E3%82%8A/1399367299635.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%83%A9%E3%83%96%E3%83%A9%E3%82%A4%E3%83%96/1401649235012.jpg", "file:///C:/Users/niconiconii/Pictures/anime/%E7%99%BE%E5%90%88/%E3%83%A9%E3%83%96%E3%83%A9%E3%82%A4%E3%83%96/1399158238975.jpg", "file:///C:/Users/niconiconii/Pictures/wp/%E3%83%AD%E3%83%AA/1391369468236.png"];

  var size = image.length
  var x = Math.floor(size*Math.random())


$('body').css('background', 'url(' + image[x] +')');
