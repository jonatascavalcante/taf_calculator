$(document).ready(function() {
	//Loads the inputs groups that dynamically changes the form
	var $genders = $('input[name="gender"]');
	var $aerobic = $('input[name="aerobic"]');
	var isFemale = false;
	var isSwimming = false;

	//Initially loads the form for the male gender and running set 
	$("#femalebars").hide();
	$("#swimming").hide();

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
		 if ($("#age").val() && $("#absQtd").val()) {
		 	if(isSwimming && !isFemale && $("#barsQtd").val() && $("#swimmingDistance").val()) {
		 		$("#taf_form").submit();
		 	}
		 	if(isSwimming && isFemale && $("#swimmingDistance").val()) {
		 		$("#taf_form").submit();
		 	}
		 	if(!isSwimming && !isFemale && $("#barsQtd").val()) {
		 		$("#taf_form").submit();
		 	}
		 	if(!isSwimming && isFemale) {
		 		$("#taf_form").submit();
		 	}
		 	window.alert("Preencha todos os campos para realizar o cálculo!");
		 } else {
		 	window.alert("Preencha todos os campos para realizar o cálculo!");
		 }
	});
});
