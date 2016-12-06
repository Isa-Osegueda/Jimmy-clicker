//variables

var $score = 0;
var $scoreClick = 1;
var $scoreSecond=1;
var $showScoreSecond = $( "#showScoreSecond");
var $diploma = $( "#diploma");
var $clickAnimation = $(".diploma-animation");
var $bonus = $( "#bonus");
var $jimmy = $("#up-jimmy");
var $jimmyCost = 50;
var $jimmyBonus = 100;
var $danilo = $("#up-danilo");
var $daniloCost = 500;
var $daniloBonus = 700;
var $leiva = $("#up-leiva");
var $leivaCost = 7500;
var $leivaBonus = 1;
var $leivaTrap =0;
var $cent = 0;
var $seg = 0;
var $min = 0;
var $hr = 0;
var $habilitado = new Audio ("audios/habilitado.mp3");
var $motoBonus = 2000;


//aumento por click//

function scoreAccount() {
	//suma de puntos
	$score += $scoreClick;
	//animacion, puntos por click 
	$clickAnimation.html("+" + $scoreClick);
	$clickAnimation.fadeIn(100);
	$clickAnimation.fadeOut(100);
t
}

$diploma.mouseover(function(){

	$diploma.animate({height: "368px", wight: "430px"},500);
	$diploma.animate({height: "363px", wight: "425px"}, 500);
});


//evento click para aumentar puntos por click
$diploma.click(function() {
scoreAccount()
console.log($score);
});



//desabilitar upgrates//

$jimmy.prop("disabled", true);
$danilo.prop("disabled", true);
$leiva.prop("disabled", true);

// mejoras jimmy
	//aplicar mejoras jimmy
	function jimmy() {
		$habilitado.play();
		$score -= $jimmyCost;
		$score += $jimmyBonus;
		$scoreClick += 1;
		$($bonus).html("+"+$jimmyBonus);
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$jimmyCost += 103;
		$jimmyBonus += 100;
		//desabilitar otra vez upgrate jimmy
		$jimmy.prop("disabled", true);
		$($jimmy).css( "background-color", "#999" )


	}

	//niveles

	setInterval(function () {
		if ($score >= $jimmyCost) {
			//indicar con color que se puede comprar el upgrade
			$($jimmy).css( "background-color", "#37b466" )
			$jimmy.prop("disabled", false);
		}
			
	},1000)

	$jimmy.click(function() {
		jimmy()
	});

// mejoras danilo
	//aplicar mejoras danilo
	function danilo() {
		$habilitado.play();
		$score -= $daniloCost;
		$score += $daniloBonus;
		$scoreSecond += 1;
		$($bonus).html("+"+$daniloBonus);
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$daniloCost += 400;
		$daniloBonus += 100;
		//desabilitar otra vez upgrate danilo
		$danilo.prop("disabled", true);
		$($danilo).css( "background-color", "#999" )

	}

	//niveles

	setInterval(function () {
		if ($score >= $daniloCost) {
			//indicar con color que se puede comprar el upgrade
			$($danilo).css( "background-color", "#1b6b50" )
			$danilo.prop("disabled", false);
		}
			
	},1000)

	$danilo.click(function() {
		danilo()
	});

//aplicar mejoras leiva
	function leiva() {
		$habilitado.play();
		$score -= $leivaCost;
		$score += $leivaBonus;
		$scoreSecond += 150;
		$leivaTrap +=1
		$($bonus).html("+"+$leivaBonus);
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$leivaCost += 5000;
		//desabilitar otra vez upgrate leiva
		$leiva.prop("disabled", true);
		$($leiva).css( "background-color", "#999" )

	}

	//niveles

	setInterval(function () {
		if ($score >= $leivaCost) {
			//indicar con color que se puede comprar el upgrade
			$($leiva).css( "background-color", "#104350" )
			$leiva.prop("disabled", false);
		}
			
	},1000)

	$leiva.click(function() {
		leiva()
	});




//eventos//
	//moto
	function motoBonus() {
		$score += 1000;
		$($bonus).html("+"+"1000");
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$(".moto").css( "visibility", "hidden" )
	}

	function moto() {
		$(".moto").css( "visibility", "visible" )
		$(".moto").show(1000);
		$(".moto").fadeOut(7000);
	}
	
	setInterval(function () {
		if ($score >= 1500 && $score <= 1550) {
			moto();
		}
			
	},1000);   

	$(".moto").click(function() {
		motoBonus()
	});

	//bug
	function bugBonus() {
		$score -= 20000;
		$($bonus).html("-"+"20000");
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$(".bug").css( "visibility", "hidden" )
	}

	function bug() {
		$(".bug").css( "visibility", "visible" )
		$(".bug").show(1000);
		$(".bug").fadeOut(7000);
	}
	
	setInterval(function () {
		if ($score >= 2000 && $score <= 3000 && $leivaTrap ===1) {
			bug();
		}
			
	},1000);   

	$(".bug").click(function() {
		bugBonus()
	});

	//beer
	function beerBonus() {
		$score += 300;
		$scoreSecond += 5;
		$($bonus).html("+"+"300");
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$(".beer").css( "visibility", "hidden" )
	}

	function beer() {
		$(".beer").css( "visibility", "visible" )
		$(".beer").show(1000);
		$(".beer").fadeOut(7000);
	}
	
	setInterval(function () {
		if ($score >= 30 && $score <= 40) {
			beer();
		}
			
	},1000);   

	$(".beer").click(function() {
		beerBonus()
	});

	//latigo
	function latigoBonus() {
		$score += 7000;
		$scoreSecond += 3;
		$($bonus).html("+"+"7000");
		
		$("#bonus").fadeIn(1000);
		$("#bonus").fadeOut(1000);
		$(".latigo").css( "visibility", "hidden" )
	}

	function latigo() {
		$(".latigo").css( "visibility", "visible" )
		$(".latigo").show(1000);
		$(".latigo").fadeOut(7000);
	}
	
	setInterval(function () {
		if ($scoreSecond === 10) {
			latigo();
		}
			
	},1000);   

	$(".latigo").click(function() {
		latigoBonus()
	});
         
 
    //aparece la moto     

		



// tiempo jugado//

function cron () {
	if ($cent < 99) {
		$cent++;
		if ($cent < 10) { $cent = "0"+$cent }
		$("#cent").html(":"+$cent);	
	}
	if ($cent == 99) {
		$cent = -1;
	}
	if ($cent == 0) {
		$seg ++;
		if ($seg < 10) { $seg = "0"+$seg }
		$("#seg").html( ":"+$seg);
	}
	if ($seg == 59) {
		$seg = -1;
	}
	if ( ($cent == 0)&&($seg == 0) ) {
		$min++;
		if ($min < 10) { $min = "0"+$min }
		$("#min").html(":"+$min);
	}
	if ($min == 59) {
		$min = -1;
	}
	if ( ($cent == 0)&&($seg == 0)&&($min == 0) ) {
		$hr ++;
		if ($hr < 10) { $hr = "0"+$hr }
		$("#hr").html($hr);
	}
}


// actualizar valores cada segundo//

setInterval(function () {
	//aumento por segundos
	$score+=$scoreSecond;
	$("#score").html("Experience:" + " " +$score);
	//mostrar cuanto aumenta el score por segundo//
	$showScoreSecond.html("points per second" + " " + $scoreSecond);
	//instrucciones jimmy
	$(".j-up-0").html("↑Jimmy → Exp " +$jimmyCost);
	$(".j-up-1").html("↑up click +" +$scoreSecond);
	$(".j-up-2").html("Exp +" + " " +$jimmyBonus);
	//instrucciones danilo
	$(".d-up-0").html("↑Danilo → Exp " +$daniloCost);
	$(".d-up-1").html("↑Sec Points +" +$scoreSecond);
	$(".d-up-2").html("Exp +" + " " +$daniloBonus);
	//instrucciones jimmy
	$(".l-up-0").html("↑Leiva → Exp " +$leivaCost);
	$(".l-up-1").html("Bonus: DEPENDS");
	//iniciar contador de tiempo jugado
	cron()
	//eventos


},1000)	


