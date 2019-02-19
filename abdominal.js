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
	if (amount >= 479) {
		return 10;
	} else if (amount >= 454) {
		return 9.5;
	} else if (amount >= 430) {
		return 9;
	} else if (amount >= 406) {
		return 8.5;
	} else if (amount >= 382) {
		return 8;
	} else if (amount >= 359) {
		return 7.5;
	} else if (amount >= 335) {
		return 7;
	} else if (amount >= 311) {
		return 6.5;
	} else if (amount >= 287) {
		return 6;
	} else if (amount >= 263) {
		return 5.5;
	} else if (amount >= 239) {
		return 5;
	} else if (amount >= 215) {
		return 4.5;
	} else if (amount >= 191) {
		return 4;
	} else if (amount >= 167) {
		return 3.5;
	} else if (amount >= 143) {
		return 3;
	} else if (amount < 143) {
		return 0;
	}
}

function get_abdominal_fem_44(amount) {
	if (amount >= 456) {
		return 10;
	} else if (amount >= 433) {
		return 9.5;
	} else if (amount >= 410) {
		return 9;
	} else if (amount >= 387) {
		return 8.5;
	} else if (amount >= 364) {
		return 8;
	} else if (amount >= 342) {
		return 7.5;
	} else if (amount >= 319) {
		return 7;
	} else if (amount >= 296) {
		return 6.5;
	} else if (amount >= 273) {
		return 6;
	} else if (amount >= 250) {
		return 5.5;
	} else if (amount >= 228) {
		return 5;
	} else if (amount >= 205) {
		return 4.5;
	} else if (amount >= 182) {
		return 4;
	} else if (amount >= 159) {
		return 3.5;
	} else if (amount >= 136) {
		return 3;
	} else if (amount < 136) {
		return 0;
	}
}

function get_abdominal_fem_49(amount) {
	if (amount >= 433) {
		return 10;
	} else if (amount >= 411) {
		return 9.5;
	} else if (amount >= 389) {
		return 9;
	} else if (amount >= 368) {
		return 8.5;
	} else if (amount >= 346) {
		return 8;
	} else if (amount >= 325) {
		return 7.5;
	} else if (amount >= 303) {
		return 7;
	} else if (amount >= 281) {
		return 6.5;
	} else if (amount >= 259) {
		return 6;
	} else if (amount >= 238) {
		return 5.5;
	} else if (amount >= 216) {
		return 5;
	} else if (amount >= 194) {
		return 4.5;
	} else if (amount >= 173) {
		return 4;
	} else if (amount >= 151) {
		return 3.5;
	} else if (amount >= 129) {
		return 3;
	} else if (amount < 129) {
		return 0;
	}
}

function get_abdominal_fem_50(amount) {
	if (amount >= 411) {
		return 10;
	} else if (amount >= 390) {
		return 9.5;
	} else if (amount >= 369) {
		return 9;
	} else if (amount >= 349) {
		return 8.5;
	} else if (amount >= 328) {
		return 8;
	} else if (amount >= 308) {
		return 7.5;
	} else if (amount >= 287) {
		return 7;
	} else if (amount >= 267) {
		return 6.5;
	} else if (amount >= 246) {
		return 6;
	} else if (amount >= 226) {
		return 5.5;
	} else if (amount >= 205) {
		return 5;
	} else if (amount >= 184) {
		return 4.5;
	} else if (amount >= 164) {
		return 4;
	} else if (amount >= 143) {
		return 3.5;
	} else if (amount >= 123) {
		return 3;
	} else if (amount < 123) {
		return 0;
	}
}