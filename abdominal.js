function calculate_abdominal_score(age, gender, amount) {
	switch(gender) {
		case 'male':
			if (age <= 19) {
				return get_abdominal_masc_19(amount);
			} else if (age <= 24) {
				return get_abdominal_masc_24(amount);
			} else if (age <= 29) {
				return get_abdominal_masc_29(amount);
			} else if (age <= 34) {
				return get_abdominal_masc_34(amount);
			} else if (age <= 39) {
				return get_abdominal_masc_39(amount);
			} else if (age <= 44) {
				return get_abdominal_masc_44(amount);
			} else if (age <= 49) {
				return get_abdominal_masc_49(amount);
			} else if (age >= 50) {
				return get_abdominal_masc_50(amount);
			}
			break;
		case 'female':
			if (age <= 19) {
				return get_abdominal_fem_19(amount);
			} else if (age <= 24) {
				return get_abdominal_fem_24(amount);
			} else if (age <= 29) {
				return get_abdominal_fem_29(amount);
			} else if (age <= 34) {
				return get_abdominal_fem_34(amount);
			} else if (age <= 39) {
				return get_abdominal_fem_39(amount);
			} else if (age <= 44) {
				return get_abdominal_fem_44(amount);
			} else if (age <= 49) {
				return get_abdominal_fem_49(amount);
			} else if (age >= 50) {
				return get_abdominal_fem_50(amount);
			}
		break;
	}
}

function get_abdominal_masc_19(amount) {
	if (amount >= 49) {
		return 10;
	} else if (amount >= 46) {
		return 9.5;
	} else if (amount >= 43) {
		return 9;
	} else if (amount >= 40) {
		return 8.5;
	} else if (amount >= 37) {
		return 8;
	} else if (amount >= 35) {
		return 7.5;
	} else if (amount >= 33) {
		return 7;
	} else if (amount >= 31) {
		return 6.5;
	} else if (amount >= 29) {
		return 6;
	} else if (amount >= 27) {
		return 5.5;
	} else if (amount >= 25) {
		return 5;
	} else if (amount >= 23) {
		return 4.5;
	} else if (amount >= 21) {
		return 4;
	} else if (amount >= 19) {
		return 3.5;
	} else if (amount >= 17) {
		return 3;
	} else if (amount < 17) {
		return 0;
	}
}

function get_abdominal_masc_24(amount) {
	if (amount >= 47) {
		return 10;
	} else if (amount >= 44) {
		return 9.5;
	} else if (amount >= 41) {
		return 9;
	} else if (amount >= 38) {
		return 8.5;
	} else if (amount >= 35) {
		return 8;
	} else if (amount >= 32) {
		return 7.5;
	} else if (amount >= 30) {
		return 7;
	} else if (amount >= 28) {
		return 6.5;
	} else if (amount >= 26) {
		return 6;
	} else if (amount >= 24) {
		return 5.5;
	} else if (amount >= 22) {
		return 5;
	} else if (amount >= 20) {
		return 4.5;
	} else if (amount >= 18) {
		return 4;
	} else if (amount == 17) {
		return 3.5;
	} else if (amount >= 15) {
		return 3;
	} else if (amount < 15) {
		return 0;
	}
}

function get_abdominal_masc_29(amount) {
	if (amount >= 44) {
		return 10;
	} else if (amount >= 41) {
		return 9.5;
	} else if (amount >= 38) {
		return 9;
	} else if (amount >= 36) {
		return 8.5;
	} else if (amount >= 34) {
		return 8;
	} else if (amount >= 32) {
		return 7.5;
	} else if (amount >= 29) {
		return 7;
	} else if (amount >= 27) {
		return 6.5;
	} else if (amount >= 25) {
		return 6;
	} else if (amount >= 22) {
		return 5.5;
	} else if (amount >= 20) {
		return 5;
	} else if (amount >= 18) {
		return 4.5;
	} else if (amount >= 16) {
		return 4;
	} else if (amount >= 14) {
		return 3.5;
	} else if (amount >= 12) {
		return 3;
	} else if (amount < 12) {
		return 0;
	}
}

function get_abdominal_masc_34(amount) {
	if (amount >= 42) {
		return 10;
	} else if (amount >= 39) {
		return 9.5;
	} else if (amount >= 37) {
		return 9;
	} else if (amount >= 34) {
		return 8.5;
	} else if (amount >= 32) {
		return 8;
	} else if (amount >= 29) {
		return 7.5;
	} else if (amount >= 26) {
		return 7;
	} else if (amount >= 23) {
		return 6.5;
	} else if (amount >= 21) {
		return 6;
	} else if (amount >= 19) {
		return 5.5;
	} else if (amount == 18) {
		return 5;
	} else if (amount == 17) {
		return 4.5;
	} else if (amount >= 15) {
		return 4;
	} else if (amount >= 13) {
		return 3.5;
	} else if (amount >= 11) {
		return 3;
	} else if (amount < 11) {
		return 0;
	}
}

function get_abdominal_masc_39(amount) {
	if (amount >= 39) {
		return 10;
	} else if (amount >= 36) {
		return 9.5;
	} else if (amount >= 33) {
		return 9;
	} else if (amount >= 31) {
		return 8.5;
	} else if (amount >= 29) {
		return 8;
	} else if (amount >= 27) {
		return 7.5;
	} else if (amount >= 24) {
		return 7;
	} else if (amount >= 22) {
		return 6.5;
	} else if (amount >= 20) {
		return 6;
	} else if (amount >= 18) {
		return 5.5;
	} else if (amount == 17) {
		return 5;
	} else if (amount == 16) {
		return 4.5;
	} else if (amount >= 14) {
		return 4;
	} else if (amount >= 12) {
		return 3.5;
	} else if (amount >= 10) {
		return 3;
	} else if (amount < 10) {
		return 0;
	}
}

function get_abdominal_masc_44(amount) {
	if (amount >= 37) {
		return 10;
	} else if (amount >= 34) {
		return 9.5;
	} else if (amount >= 32) {
		return 9;
	} else if (amount >= 30) {
		return 8.5;
	} else if (amount >= 28) {
		return 8;
	} else if (amount >= 26) {
		return 7.5;
	} else if (amount >= 23) {
		return 7;
	} else if (amount >= 21) {
		return 6.5;
	} else if (amount >= 19) {
		return 6;
	} else if (amount >= 17) {
		return 5.5;
	} else if (amount >= 15) {
		return 5;
	} else if (amount == 14) {
		return 4.5;
	} else if (amount == 13) {
		return 4;
	} else if (amount >= 11) {
		return 3.5;
	} else if (amount >= 9) {
		return 3;
	} else if (amount < 9) {
		return 0;
	}
}

function get_abdominal_masc_49(amount) {
	if (amount >= 34) {
		return 10;
	} else if (amount >= 32) {
		return 9.5;
	} else if (amount >= 30) {
		return 9;
	} else if (amount >= 28) {
		return 8.5;
	} else if (amount >= 26) {
		return 8;
	} else if (amount >= 24) {
		return 7.5;
	} else if (amount >= 22) {
		return 7;
	} else if (amount >= 20) {
		return 6.5;
	} else if (amount >= 18) {
		return 6;
	} else if (amount >= 16) {
		return 5.5;
	} else if (amount >= 14) {
		return 5;
	} else if (amount == 13) {
		return 4.5;
	} else if (amount == 12) {
		return 4;
	} else if (amount >= 10) {
		return 3.5;
	} else if (amount >= 8) {
		return 3;
	} else if (amount < 8) {
		return 0;
	}
}

function get_abdominal_masc_50(amount) {
	if (amount >= 33) {
		return 10;
	} else if (amount >= 31) {
		return 9.5;
	} else if (amount >= 28) {
		return 9;
	} else if (amount >= 26) {
		return 8.5;
	} else if (amount >= 24) {
		return 8;
	} else if (amount >= 22) {
		return 7.5;
	} else if (amount >= 20) {
		return 7;
	} else if (amount >= 18) {
		return 6.5;
	} else if (amount >= 16) {
		return 6;
	} else if (amount == 15) {
		return 5.5;
	} else if (amount >= 13) {
		return 5;
	} else if (amount == 12) {
		return 4.5;
	} else if (amount >= 10) {
		return 4;
	} else if (amount == 9) {
		return 3.5;
	} else if (amount >= 7) {
		return 3;
	} else if (amount < 7) {
		return 0;
	}
}

function get_abdominal_fem_19(amount) {
	if (amount >= 44) {
		return 10;
	} else if (amount >= 41) {
		return 9.5;
	} else if (amount >= 39) {
		return 9;
	} else if (amount >= 37) {
		return 8.5;
	} else if (amount >= 35) {
		return 8;
	} else if (amount >= 33) {
		return 7.5;
	} else if (amount >= 31) {
		return 7;
	} else if (amount >= 29) {
		return 6.5;
	} else if (amount >= 27) {
		return 6;
	} else if (amount == 26) {
		return 5.5;
	} else if (amount >= 24) {
		return 5;
	} else if (amount >= 22) {
		return 4.5;
	} else if (amount >= 20) {
		return 4;
	} else if (amount >= 18) {
		return 3.5;
	} else if (amount >= 16) {
		return 3;
	} else if (amount < 16) {
		return 0;
	}
}

function get_abdominal_fem_24(amount) {
	if (amount >= 41) {
		return 10;
	} else if (amount >= 38) {
		return 9.5;
	} else if (amount >= 35) {
		return 9;
	} else if (amount >= 33) {
		return 8.5;
	} else if (amount >= 31) {
		return 8;
	} else if (amount >= 29) {
		return 7.5;
	} else if (amount >= 27) {
		return 7;
	} else if (amount >= 25) {
		return 6.5;
	} else if (amount >= 22) {
		return 6;
	} else if (amount >= 19) {
		return 5.5;
	} else if (amount == 18) {
		return 5;
	} else if (amount == 17) {
		return 4.5;
	} else if (amount >= 15) {
		return 4;
	} else if (amount >= 13) {
		return 3.5;
	} else if (amount >= 11) {
		return 3;
	} else if (amount < 11) {
		return 0;
	}
}

function get_abdominal_fem_29(amount) {
	if (amount >= 39) {
		return 10;
	} else if (amount >= 36) {
		return 9.5;
	} else if (amount >= 34) {
		return 9;
	} else if (amount >= 32) {
		return 8.5;
	} else if (amount >= 30) {
		return 8;
	} else if (amount >= 28) {
		return 7.5;
	} else if (amount >= 26) {
		return 7;
	} else if (amount >= 24) {
		return 6.5;
	} else if (amount >= 21) {
		return 6;
	} else if (amount >= 18) {
		return 5.5;
	} else if (amount == 17) {
		return 5;
	} else if (amount == 16) {
		return 4.5;
	} else if (amount >= 14) {
		return 4;
	} else if (amount >= 12) {
		return 3.5;
	} else if (amount >= 10) {
		return 3;
	} else if (amount < 10) {
		return 0;
	}
}

function get_abdominal_fem_34(amount) {
	if (amount >= 36) {
		return 10;
	} else if (amount >= 33) {
		return 9.5;
	} else if (amount >= 31) {
		return 9;
	} else if (amount >= 29) {
		return 8.5;
	} else if (amount >= 27) {
		return 8;
	} else if (amount >= 25) {
		return 7.5;
	} else if (amount >= 23) {
		return 7;
	} else if (amount >= 20) {
		return 6.5;
	} else if (amount >= 17) {
		return 6;
	} else if (amount == 16) {
		return 5.5;
	} else if (amount == 15) {
		return 5;
	} else if (amount == 14) {
		return 4.5;
	} else if (amount >= 12) {
		return 4;
	} else if (amount >= 10) {
		return 3.5;
	} else if (amount == 9) {
		return 3;
	} else if (amount < 9) {
		return 0;
	}
}

function get_abdominal_fem_39(amount) {
	if (amount >= 34) {
		return 10;
	} else if (amount >= 31) {
		return 9.5;
	} else if (amount >= 29) {
		return 9;
	} else if (amount >= 27) {
		return 8.5;
	} else if (amount >= 25) {
		return 8;
	} else if (amount >= 23) {
		return 7.5;
	} else if (amount >= 21) {
		return 7;
	} else if (amount >= 19) {
		return 6.5;
	} else if (amount >= 16) {
		return 6;
	} else if (amount == 15) {
		return 5.5;
	} else if (amount == 14) {
		return 5;
	} else if (amount >= 12) {
		return 4.5;
	} else if (amount >= 10) {
		return 4;
	} else if (amount == 9) {
		return 3.5;
	} else if (amount == 8) {
		return 3;
	} else if (amount < 8) {
		return 0;
	}
}

function get_abdominal_fem_44(amount) {
	if (amount >= 31) {
		return 10;
	} else if (amount >= 29) {
		return 9.5;
	} else if (amount >= 27) {
		return 9;
	} else if (amount >= 25) {
		return 8.5;
	} else if (amount >= 23) {
		return 8;
	} else if (amount >= 21) {
		return 7.5;
	} else if (amount >= 19) {
		return 7;
	} else if (amount >= 17) {
		return 6.5;
	} else if (amount >= 15) {
		return 6;
	} else if (amount == 14) {
		return 5.5;
	} else if (amount == 13) {
		return 5;
	} else if (amount >= 11) {
		return 4.5;
	} else if (amount >= 9) {
		return 4;
	} else if (amount == 8) {
		return 3.5;
	} else if (amount == 7) {
		return 3;
	} else if (amount < 7) {
		return 0;
	}
}

function get_abdominal_fem_49(amount) {
	if (amount >= 29) {
		return 10;
	} else if (amount >= 27) {
		return 9.5;
	} else if (amount >= 25) {
		return 9;
	} else if (amount >= 23) {
		return 8.5;
	} else if (amount >= 21) {
		return 8;
	} else if (amount >= 19) {
		return 7.5;
	} else if (amount >= 17) {
		return 7;
	} else if (amount == 16) {
		return 6.5;
	} else if (amount >= 14) {
		return 6;
	} else if (amount == 13) {
		return 5.5;
	} else if (amount == 12) {
		return 5;
	} else if (amount >= 10) {
		return 4.5;
	} else if (amount >= 8) {
		return 4;
	} else if (amount == 7) {
		return 3.5;
	} else if (amount == 6) {
		return 3;
	} else if (amount < 6) {
		return 0;
	}
}

function get_abdominal_fem_50(amount) {
	if (amount >= 28) {
		return 10;
	} else if (amount >= 26) {
		return 9.5;
	} else if (amount >= 24) {
		return 9;
	} else if (amount >= 22) {
		return 8.5;
	} else if (amount >= 20) {
		return 8;
	} else if (amount >= 18) {
		return 7.5;
	} else if (amount >= 16) {
		return 7;
	} else if (amount >= 14) {
		return 6.5;
	} else if (amount >= 12) {
		return 6;
	} else if (amount == 11) {
		return 5.5;
	} else if (amount == 10) {
		return 5;
	} else if (amount == 9) {
		return 4.5;
	} else if (amount == 8) {
		return 4;
	} else if (amount == 7) {
		return 3.5;
	} else if (amount == 6) {
		return 3;
	} else if (amount < 6) {
		return 0;
	}
}