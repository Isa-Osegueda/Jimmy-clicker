//variables

var $score = 0;
var $scoreClick = 1;
var $scoreSecond=1;
var $diploma = $( "#diploma");
var $bonus = $( "#bonus");
var $jimmy = $("#up-jimmy").find("div");
var $jimmyCost = 50;
var $jimmyBonus = 500;
var $danilo = $("#up-danilo");
var $leiva = $("#up-leiva");

//aumento por click

function scoreAccoun() {
	$score += $scoreClick;
}

$diploma.click(function() {
scoreAccoun()
console.log($score);
});

//desabilitar

$jimmy.disabled = true;

// mejoras jimmy
	//aplicar mejoras jimmy
	function jimmy() {
		$score -= $jimmyCost;
		$score += $jimmyBonus;
		$scoreClick = 2;
		$($bonus).html("+"+$jimmyBonus);
		$("#bonus").fadeToggle(1500);

		$jimmy.disabled = true;

	}

	//niveles

	setInterval(function () {
		if ($score => 50) {
		$jimmy.disabled = false;
	}
		
	},1000)
	$jimmy.click(function() {
	jimmy()


	});

//aumento por segundos

setInterval(function () {
	$score+=$scoreSecond;
	$("#score").html($score);
},1000)	







