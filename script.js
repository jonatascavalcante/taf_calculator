$(document).ready(function() {
	var $genders = $('input[name="gender"]');
	var $aerobic = $('input[name="aerobic"]');

	$("#femalebars").hide();
	$("#swimming").hide();

	$genders.change(function() {
  			var $checked = $genders.filter(function() {
    			return $(this).prop('checked');
  			});
  		if($checked.val() === 'female') {
  			$("#femalebars").show();
  			$("#malebars").hide();
  		} else if ($checked.val() === 'male'){
  			$("#femalebars").hide();
  			$("#malebars").show();
  		}
	});

	$aerobic.change(function() {
  			var $checked = $aerobic.filter(function() {
    			return $(this).prop('checked');
  			});
  		if($checked.val() === 'running') {
  			$("#running").show();
  			$("#swimming").hide();
  		} else if ($checked.val() === 'swimming'){
  			$("#running").hide();
  			$("#swimming").show();
  		}
	});
});