$(document).ready(function() {
	//Loads the inputs groups that dynamically changes the form
	var $genders = $('input[name="gender"]');
	var $aerobic = $('input[name="aerobic"]');
	var isFemale = false;
	var isSwimming = false;

	//Initially loads the form for the male gender and running set 
	$("#femalebars").hide();
	$("#swimming").hide();
	$("#taf_result").hide();

	//Changes the bars test based on the gender input change
	$genders.change(function() {
  			var $checked = $genders.filter(function() {
    			return $(this).prop('checked');
  			});
  		if ($checked.val() === 'female') {
  			$("#femalebars").show();
  			$("#malebars").hide();
  			isFemale = true;
  		} else if ($checked.val() === 'male'){
  			$("#femalebars").hide();
  			$("#malebars").show();
  			isFemale = false;
  		}
	});

	//Changes the aerobic test based on the aerobic input change
	$aerobic.change(function() {
  			var $checked = $aerobic.filter(function() {
    			return $(this).prop('checked');
  			});
  		if ($checked.val() === 'running') {
  			$("#running").show();
  			$("#swimming").hide();
  			isSwimming = false;
  		} else if ($checked.val() === 'swimming'){
  			$("#running").hide();
  			$("#swimming").show();
  			isSwimming = true;
  		}
	});

	//Treates the calculate button
	$("#btnCalcular").click(function() {
		 if ($("#age").val() && $("#absQtd").val() && $("#shuttlerunTime").val()) {
		 	if (isSwimming && !isFemale && $("#barsQtd").val() && $("#swimmingDistance").val()) {
		 		$("#taf_form").submit();
		 		return;
		 	}
		 	if (isSwimming && isFemale && $("#swimmingDistance").val()) {
		 		$("#taf_form").submit();
		 		return;
		 	}
		 	if (!isSwimming && !isFemale && $("#barsQtd").val()) {
		 		$("#taf_form").submit();
		 		return;
		 	}
		 	if (!isSwimming && isFemale) {
		 		$("#taf_form").submit();
		 		return;
		 	}
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 } else {
		 	window.alert("É necessário preencher todos os campos para realizar o cálculo");
		 }
	});

	//Treates the TAF form submission
	$("#taf_form").submit(function(event) {
		event.preventDefault();
		$("#taf_form").hide();
		$("#taf_result").show();

		var age = $("#age").val();
		var gender = 'male';
		var aerobic, bars, tafScore;
		var barsNote, aerobicNote, absNote, swimNote, shuttleRunNote;
		var absQtd = $("#absQtd").val();
		var swimmingTime = $("#swimmingTime").val();
		var shuttlerunTime = $("#shuttlerunTime").val();

		if(isFemale) {
			gender = 'female';
			$("#bars_test").html("Barra Estática");
			bars = $("#barsTime").val();
			barsNote = calculate_static_bars_score(age, convertTime(bars, 60));
			$("#bars_note").html(barsNote);

		} else {
			$("#bars_test").html("Barra Dinâmica");
			bars = $("#barsQtd").val();
			barsNote = calculate_dynamic_bars_score(age, bars)
			$("#bars_note").html(barsNote);
		}

		if(isSwimming) {
			$("#aerobic_test").html("Natação 12 minutos");
			aerobic = $("#swimmingDistance").val();
			aerobicNote = calculate_swimming_score(age, gender, aerobic)
			$("#aerobic_note").html(aerobicNote);
		} else {
			$("#aerobic_test").html("Corrida 2.400m");
			aerobic = $("#runningTime").val();
			aerobicNote = calculate_running_score(age, gender, convertTime(aerobic, 60))
			$("#aerobic_note").html(aerobicNote);
		}
		
		$("#aerobic_exec").html(aerobic);
		$("#abs_exec").html(absQtd);
		$("#bars_exec").html(bars);
		$("#swim_exec").html(swimmingTime);
		$("#shuttle_run_exec").html(shuttlerunTime);
		
		absNote = calculate_abdominal_score(age, gender, absQtd);
		$("#abs_note").html(absNote);
		swimNote = calculate_75m_score(age, gender, convertTime(swimmingTime, 60))
		$("#swim_note").html(swimNote);
		shuttleRunNote = calculate_shuttle_run_score(age, gender, convertTime(shuttlerunTime, 100))
		$("#shuttle_run_note").html(shuttleRunNote);

		tafScore = aerobicNote + barsNote + absNote + swimNote + shuttleRunNote;
		$("#taf_score").html("Nota Final no TAF: " + (tafScore/5));
	});	

	$("#shuttlerunTime").keyup(function( key ) {
		var shuttlerunTime = $(this).val();
		if (shuttlerunTime.length == 1) {
			if (key.which == 56 || key.which == 57) {
				var newValue = '0' + shuttlerunTime;
				$(this).val(newValue);
				$(this).focus();
				$("#shuttlerunTime")[0].setSelectionRange(2,2);
			}
		}
	});

	$("#btnNovoCalculo").click(function() {
		location.reload();
	});
});

function convertTime(time, cons) 
{
	var firstPart, secondPart, convertedTime;
	firstPart = parseInt(time.split(':')[0]);
	secondPart = parseInt(time.split(':')[1]);
	convertedTime = firstPart * cons + secondPart;
	return convertedTime;
}

