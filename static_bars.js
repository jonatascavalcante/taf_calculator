function calculate_static_bars_score(age, time) {
	if (age <= 19) {
		return get_static_bars_19(time);
	} else if (age <= 24) {
		return get_static_bars_24(time);
	} else if (age <= 29) {
		return get_static_bars_29(time);
	} else if (age <= 34) {
		return get_static_bars_34(time);
	} else if (age <= 39) {
		return get_static_bars_39(time);
	} else if (age <= 44) {
		return get_static_bars_44(time);
	} else if (age <= 49) {
		return get_static_bars_49(time);
	} else if (age >= 50) {
		return get_static_bars_50(time);
	}
}

function get_static_bars_19(time) {
	if (time >= 37) {
		return 10;
	} else if (time <= 34) {
		return 9.5;
	} else if (time <= 32) {
		return 9;
	} else if (time <= 29) {
		return 8.5;
	} else if (time <= 27) {
		return 8;
	} else if (time <= 25) {
		return 7.5;
	} else if (time <= 23) {
		return 7;
	} else if (time <= 21) {
		return 6.5;
	} else if (time <= 18) {
		return 6;
	} else if (time <= 16) {
		return 5.5;
	} else if (time <= 14) {
		return 5;
	} else if (time <= 12) {
		return 4.5;
	} else if (time <= 10) {
		return 4;
	} else if (time <= 8) {
		return 3.5;
	} else if (time <= 6) {
		return 3;
	} else if (time < 6) {
		return 0;
	}
}

function get_static_bars_24(time) {
	if (time >= 34) {
		return 10;
	} else if (time <= 31) {
		return 9.5;
	} else if (time <= 28) {
		return 9;
	} else if (time <= 25) {
		return 8.5;
	} else if (time <= 23) {
		return 8;
	} else if (time <= 21) {
		return 7.5;
	} else if (time <= 19) {
		return 7;
	} else if (time <= 17) {
		return 6.5;
	} else if (time <= 15) {
		return 6;
	} else if (time <= 13) {
		return 5.5;
	} else if (time <= 11) {
		return 5;
	} else if (time <= 9) {
		return 4.5;
	} else if (time <= 7) {
		return 4;
	} else if (time <= 5) {
		return 3.5;
	} else if (time <= 3) {
		return 3;
	} else if (time < 3) {
		return 0;
	}
}

function get_static_bars_29(time) {
	if (time >= 31) {
		return 10;
	} else if (time <= 28) {
		return 9.5;
	} else if (time <= 25) {
		return 9;
	} else if (time <= 22) {
		return 8.5;
	} else if (time <= 20) {
		return 8;
	} else if (time <= 18) {
		return 7.5;
	} else if (time <= 16) {
		return 7;
	} else if (time <= 14) {
		return 6.5;
	} else if (time <= 12) {
		return 6;
	} else if (time <= 10) {
		return 5.5;
	} else if (time <= 8) {
		return 5;
	} else if (time <= 6) {
		return 4.5;
	} else if (time <= 4) {
		return 4;
	} else if (time <= 2) {
		return 3.5;
	} else if (time <= 1) {
		return 3;
	} else if (time < 1) {
		return 0;
	}
}

function get_static_bars_34(time) {
	if (time >= 28) {
		return 10;
	} else if (time <= 25) {
		return 9.5;
	} else if (time <= 22) {
		return 9;
	} else if (time <= 19) {
		return 8.5;
	} else if (time <= 17) {
		return 8;
	} else if (time <= 15) {
		return 7.5;
	} else if (time <= 13) {
		return 7;
	} else if (time <= 11) {
		return 6.5;
	} else if (time <= 9) {
		return 6;
	} else if (time <= 7) {
		return 5.5;
	} else if (time <= 5) {
		return 5;
	} else if (time == 4) {
		return 4.5;
	} else if (time == 3) {
		return 4;
	} else if (time == 2) {
		return 3.5;
	} else if (time == 1) {
		return 3;
	} else if (time < 1) {
		return 0;
	}
}

function get_static_bars_39(time) {
	if (time >= 25) {
		return 10;
	} else if (time <= 22) {
		return 9.5;
	} else if (time <= 19) {
		return 9;
	} else if (time <= 16) {
		return 8.5;
	} else if (time <= 14) {
		return 8;
	} else if (time <= 12) {
		return 7.5;
	} else if (time <= 10) {
		return 7;
	} else if (time <= 8) {
		return 6.5;
	} else if (time <= 6) {
		return 6;
	} else if (time == 5) {
		return 5.5;
	} else if (time == 4) {
		return 5;
	} else if (time == 3) {
		return 4.5;
	} else if (time == 2) {
		return 4;
	} else if (time == 1) {
		return 3.5;
	} else if (time < 1) {
		return 0;
	}
}

function get_static_bars_44(time) {
	if (time >= 22) {
		return 10;
	} else if (time <= 19) {
		return 9.5;
	} else if (time <= 16) {
		return 9;
	} else if (time <= 13) {
		return 8.5;
	} else if (time <= 11) {
		return 8;
	} else if (time <= 9) {
		return 7.5;
	} else if (time <= 7) {
		return 7;
	} else if (time == 6) {
		return 6.5;
	} else if (time == 5) {
		return 6;
	} else if (time == 4) {
		return 5.5;
	} else if (time == 3) {
		return 5;
	} else if (time == 2) {
		return 4.5;
	} else if (time == 1) {
		return 4;
	} else if (time < 1) {
		return 0;
	}
}

function get_static_bars_49(time) {
	if (time >= 19) {
		return 10;
	} else if (time <= 16) {
		return 9.5;
	} else if (time <= 13) {
		return 9;
	} else if (time <= 10) {
		return 8.5;
	} else if (time <= 8) {
		return 8;
	} else if (time == 7) {
		return 7.5;
	} else if (time == 6) {
		return 7;
	} else if (time == 5) {
		return 6.5;
	} else if (time == 4) {
		return 6;
	} else if (time == 3) {
		return 5.5;
	} else if (time == 2) {
		return 5;
	} else if (time == 1) {
		return 4.5;
	} else if (time < 1) {
		return 0;
	}
}

function get_static_bars_50(time) {
	if (time >= 16) {
		return 10;
	} else if (time <= 13) {
		return 9.5;
	} else if (time <= 10) {
		return 9;
	} else if (time <= 8) {
		return 8.5;
	} else if (time == 7) {
		return 8;
	} else if (time == 6) {
		return 7.5;
	} else if (time == 5) {
		return 7;
	} else if (time == 4) {
		return 6.5;
	} else if (time == 3) {
		return 6;
	} else if (time == 2) {
		return 5.5;
	} else if (time == 1) {
		return 5;
	} else if (time < 1) {
		return 0;
	}
}