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