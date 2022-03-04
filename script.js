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
	$("#footer").hide();

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

	$("#btnCalcular").click(function() {
		if ($("#age").val()) {
			if ($("#absQtd").val() || $("#swimmingTime").val() || $("#shuttlerunTime").val()) {
				$("#taf_form").submit();
		 		return;
			} else if (isSwimming && $("#swimmingDistance").val()) {
				$("#taf_form").submit();
		 		return;
			} else if (!isSwimming && $("#runningTime").val()) {
				$("#taf_form").submit();
		 		return;
			} else if (isFemale && $("#barsTime").val()) {
				$("#taf_form").submit();
		 		return;
			} else if (!isFemale && $("#barsQtd").val()) {
				$("#taf_form").submit();
		 		return;
			} else {
				window.alert("É necessário preencher pelo menos um campo para realizar o cálculo!");
			}
		} else {
			window.alert("É necessário informar a idade para realizar o cálculo!");
		}
	})

	//Treates the TAF form submission
	$("#taf_form").submit(function(event) {
		event.preventDefault();
		$("#taf_form").hide();
		$("#taf_result").show();

		var age = $("#age").val();
		var gender = 'male';
		var aerobic, bars, tafScore;
		var barsNote = 0, aerobicNote = 0, absNote = 0, swimNote = 0, shuttleRunNote = 0;
		var absQtd = $("#absQtd").val();
		var swimmingTime = $("#swimmingTime").val();
		var shuttlerunTime = $("#shuttlerunTime").val();
		var exercises = 5;

		if (isFemale) {
			gender = 'female';
			$("#bars_test").html("Barra Estática");
			bars = $("#barsTime").val();
			if (bars) {
				barsNote = calculate_static_bars_score(age, bars);
				$("#bars").show();
				$("#bars_note").html(barsNote);
			} else {
				exercises--;
				$("#bars").hide();
			}	
		} else {
			$("#bars_test").html("Barra Dinâmica");
			bars = $("#barsQtd").val();
			if (bars) {
				barsNote = calculate_dynamic_bars_score(age, bars);
				$("#bars").show();
				$("#bars_note").html(barsNote);
			} else {
				exercises--;
				$("#bars").hide();
			}
		}

		if (isSwimming) {
			$("#aerobic_test").html("Natação 12 minutos");
			aerobic = $("#swimmingDistance").val();
			if (aerobic) {
				aerobicNote = calculate_swimming_score(age, gender, aerobic);
				$("#aerobic").show();
				$("#aerobic_note").html(aerobicNote);
			} else {
				exercises--;
				$("#aerobic").hide();
			}
		} else {
			$("#aerobic_test").html("Corrida 2.400m");
			aerobic = $("#runningTime").val();
			if (aerobic) {
				aerobicNote = calculate_running_score(age, gender, convertMinuteTime(aerobic));
				$("#aerobic").show();
				$("#aerobic_note").html(aerobicNote);
			} else {
				exercises--;
				$("#aerobic").hide();
			}
		}

		if (shuttlerunTime && shuttlerunTime.length < 3) {
			shuttlerunTime += ':00';
		}
		
		$("#aerobic_exec").html(aerobic);
		$("#abs_exec").html(absQtd);
		$("#bars_exec").html(bars);
		$("#swim_exec").html(swimmingTime);
		$("#shuttle_run_exec").html(shuttlerunTime);
		
		if (absQtd) {
			absNote = calculate_abdominal_score(age, gender, absQtd);
			$("#abs").show();
			$("#abs_note").html(absNote);
		} else {
			exercises--;
			$("#abs").hide();
		}

		if (swimmingTime) {
			swimNote = calculate_75m_score(age, gender, convertMinuteTime(swimmingTime));
			$("#swim").show();
			$("#swim_note").html(swimNote);
		} else {
			exercises--;
			$("#swim").hide();
		}

		if (shuttlerunTime) {
			shuttleRunNote = calculate_shuttle_run_score(age, gender, convertMillesimalTime(shuttlerunTime));
			$("#shuttle").show();
			$("#shuttle_run_note").html(shuttleRunNote);
		} else {
			exercises--;
			$("#shuttle").hide();
		}
		
		tafScore = aerobicNote + barsNote + absNote + swimNote + shuttleRunNote;
		var result = tafScore/exercises;
		$("#taf_score").html("Nota Final no TAF: " + (result.toFixed(2)));
		$("#footer").show();
	});	

	$("#runningTime").keyup(function(e) {
		var runningTime = $(this).val();
		var input;
		if (runningTime.length === 4 && (runningTime[0] == '9' || runningTime[0] == '8') && e.keyCode !== 8) {
			input = runningTime.split('’')[0] + runningTime.split('’')[1];
			$(this).val(input[0] + '’' + input[1] + input[2] + '"');
		}
	});

	$("#shuttlerunTime").keyup(function() {
		var shuttlerunTime = $(this).val();
		var input;
		if (shuttlerunTime.length === 4 && (shuttlerunTime[0] == '9' || shuttlerunTime[0] == '8')) {
			input = shuttlerunTime.split('"')[0] + shuttlerunTime.split('"')[1];
			$(this).val(input[0] + '"' + input[1] + input[2]);
		}
	});

	$("#btnAlterarDados").click(function() {
		$("#taf_form").show();
		$("#taf_result").hide();
		$("#footer").hide();

	});

	$("#btnNovoCalculo").click(function() {
		document.location.reload(true);
	});

});

function convertMinuteTime(time)
{
	var firstPart, secondPart, convertedTime;
	firstPart = parseInt(time.split('’')[0]);
	secondPart = parseInt((time.split('’')[1]).replace('"', ''));
	convertedTime = firstPart * 60 + secondPart;
	return convertedTime;
}

function convertMillesimalTime(time)
{
	var firstPart, secondPart, convertedTime;
	firstPart = parseInt(time.split('"')[0]);
	secondPart = parseInt(time.split('"')[1]);
	convertedTime = firstPart * 100 + secondPart;
	return convertedTime;
}

