//variables

var $score = 0;
var $scoreSecond=1;
var $upJimmy;
var $upDanilo;
var $upLeiva;
var $upSecond = 0;
var $diploma = $( "#diploma");
var $bonus = $( "#bonus");
var $jimmy = $("#up-jimmy").find("div");
var $jimmyCost = 50;
var $jimmyBonus = 500;
var $jimmyBonus2 = "+500";
var $danilo = $("#up-danilo");
var $leiva = $("#up-leiva");

//aumento por click

function scoreAccoun() {
	$score++;
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
		alert("+500 ");

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







