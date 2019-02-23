function calculate_dynamic_bars_score(age, amount) {
	if (age <= 19) {
		return get_dynamic_bars_19(amount);
	} else if (age <= 24) {
		return get_dynamic_bars_24(amount);
	} else if (age <= 29) {
		return get_dynamic_bars_29(amount);
	} else if (age <= 34) {
		return get_dynamic_bars_34(amount);
	} else if (age <= 39) {
		return get_dynamic_bars_39(amount);
	} else if (age <= 44) {
		return get_dynamic_bars_44(amount);
	} else if (age <= 49) {
		return get_dynamic_bars_49(amount);
	} else if (age >= 50) {
		return get_dynamic_bars_50(amount);
	}
}

function get_dynamic_bars_19(amount) {
	if (amount >= 14) {
		return 10;
	} else if (amount == 13) {
		return 9.5;
	} else if (amount == 12) {
		return 9;
	} else if (amount == 11) {
		return 8.5;
	} else if (amount == 10) {
		return 8;
	} else if (amount == 9) {
		return 7.5;
	} else if (amount == 8) {
		return 7;
	} else if (amount == 7) {
		return 6.5;
	} else if (amount == 6) {
		return 6;
	} else if (amount == 5) {
		return 5.5;
	} else if (amount == 4) {
		return 5;
	} else if (amount == 3) {
		return 4.5;
	} else if (amount == 2) {
		return 4;
	} else if (amount == 1) {
		return 3.5;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_24(amount) {
	if (amount >= 13) {
		return 10;
	} else if (amount == 12) {
		return 9.5;
	} else if (amount == 11) {
		return 9;
	} else if (amount == 10) {
		return 8.5;
	} else if (amount == 9) {
		return 8;
	} else if (amount == 8) {
		return 7.5;
	} else if (amount == 7) {
		return 7;
	} else if (amount == 6) {
		return 6.5;
	} else if (amount == 5) {
		return 6;
	} else if (amount == 4) {
		return 5.5;
	} else if (amount == 3) {
		return 5;
	} else if (amount == 2) {
		return 4.5;
	} else if (amount == 1) {
		return 4;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_29(amount) {
	if (amount >= 12) {
		return 10;
	} else if (amount == 11) {
		return 9.5;
	} else if (amount == 10) {
		return 9;
	} else if (amount == 9) {
		return 8.5;
	} else if (amount == 8) {
		return 8;
	} else if (amount == 7) {
		return 7.5;
	} else if (amount == 6) {
		return 7;
	} else if (amount == 5) {
		return 6.5;
	} else if (amount == 4) {
		return 6;
	} else if (amount == 3) {
		return 5.5;
	} else if (amount == 2) {
		return 5;
	} else if (amount == 1) {
		return 4.5;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_34(amount) {
	if (amount >= 11) {
		return 10;
	} else if (amount == 10) {
		return 9.5;
	} else if (amount == 9) {
		return 9;
	} else if (amount == 8) {
		return 8.5;
	} else if (amount == 7) {
		return 8;
	} else if (amount == 6) {
		return 7.5;
	} else if (amount == 5) {
		return 7;
	} else if (amount == 4) {
		return 6.5;
	} else if (amount == 3) {
		return 6;
	} else if (amount == 2) {
		return 5.5;
	} else if (amount == 1) {
		return 5;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_39(amount) {
	if (amount >= 10) {
		return 10;
	} else if (amount == 9) {
		return 9.5;
	} else if (amount == 8) {
		return 9;
	} else if (amount == 7) {
		return 8.5;
	} else if (amount == 6) {
		return 8;
	} else if (amount == 5) {
		return 7.5;
	} else if (amount == 4) {
		return 7;
	} else if (amount == 3) {
		return 6.5;
	} else if (amount == 2) {
		return 6;
	} else if (amount == 1) {
		return 5.5;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_44(amount) {
	if (amount >= 9) {
		return 10;
	} else if (amount == 8) {
		return 9.5;
	} else if (amount == 7) {
		return 9;
	} else if (amount == 6) {
		return 8.5;
	} else if (amount == 5) {
		return 8;
	} else if (amount == 4) {
		return 7.5;
	} else if (amount == 3) {
		return 7;
	} else if (amount == 2) {
		return 6.5;
	} else if (amount == 1) {
		return 6;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_49(amount) {
	if (amount >= 8) {
		return 10;
	} else if (amount == 7) {
		return 9.5;
	} else if (amount == 6) {
		return 9;
	} else if (amount == 5) {
		return 8.5;
	} else if (amount == 4) {
		return 8;
	} else if (amount == 3) {
		return 7.5;
	} else if (amount == 2) {
		return 7;
	} else if (amount == 1) {
		return 6.5;
	} else if (amount < 1) {
		return 0;
	}
}

function get_dynamic_bars_50(amount) {
	if (amount >= 7) {
		return 10;
	} else if (amount == 6) {
		return 9.5;
	} else if (amount == 5) {
		return 9;
	} else if (amount == 4) {
		return 8.5;
	} else if (amount == 3) {
		return 8;
	} else if (amount == 2) {
		return 7.5;
	} else if (amount == 1) {
		return 7;
	} else if (amount < 1) {
		return 0;
	}
}