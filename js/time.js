var d = new Date();
var thehour = d.getHours();
var greeting;
var greetcolor;

if(thehour < 12 ) {
	greeting = `おはよう`;
	greetcolor = `#f5dd9d`;
}
else if (thehour < 17 ) {
	greeting = `こんにちは`;
	greetcolor = `#f3819a`;
}
else if (thehour <= 24) {
	greeting = `こんばんは`;
	greetcolor = `#83cace`;
};

var today = d.getDate();
var weekday = new Array('日常日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', 'どう曜日');
var jpweekday = weekday[d.getDay()];

$(document).ready(function(){
	$("#search input").focus();
	$('#greeting').html(`<span class="greet" style="color:${greetcolor}">${greeting}</span>、 ごしゅじんさま。今日は <span class="date" style="color:${greetcolor}">${jpweekday}</span>です。`);
});
