function calculate_swimming_score(age, gender, distance) {
	switch(gender) {
		case 'male':
			if (age >= 19) {
				return get_swimming_masc_19(distance);
			} else if (age >= 24) {
				return get_swimming_masc_24(distance);
			} else if (age >= 29) {
				return get_swimming_masc_29(distance);
			} else if (age >= 34) {
				return get_swimming_masc_34(distance);
			} else if (age >= 39) {
				return get_swimming_masc_39(distance);
			} else if (age >= 44) {
				return get_swimming_masc_44(distance);
			} else if (age >= 49) {
				return get_swimming_masc_49(distance);
			} else if (age >= 50) {
				return get_swimming_masc_50(distance);
			}
			break;
		case 'female':
			if (age >= 19) {
				return get_swimming_fem_19(distance);
			} else if (age >= 24) {
				return get_swimming_fem_24(distance);
			} else if (age >= 29) {
				return get_swimming_fem_29(distance);
			} else if (age >= 34) {
				return get_swimming_fem_34(distance);
			} else if (age >= 39) {
				return get_swimming_fem_39(distance);
			} else if (age >= 44) {
				return get_swimming_fem_44(distance);
			} else if (age >= 49) {
				return get_swimming_fem_49(distance);
			} else if (age >= 50) {
				return get_swimming_fem_50(distance);
			}
		break;
	}
}

function get_swimming_masc_19(distance) {
	if (distance >= 731) {
		return 10;
	} else if (distance >= 694) {
		return 9.5;
	} else if (distance >= 657) {
		return 9;
	} else if (distance >= 621) {
		return 8.5;
	} else if (distance >= 584) {
		return 8;
	} else if (distance >= 548) {
		return 7.5;
	} else if (distance >= 511) {
		return 7;
	} else if (distance >= 475) {
		return 6.5;
	} else if (distance >= 438) {
		return 6;
	} else if (distance >= 402) {
		return 5.5;
	} else if (distance >= 365) {
		return 5;
	} else if (distance >= 328) {
		return 4.5;
	} else if (distance >= 292) {
		return 4;
	} else if (distance >= 255) {
		return 3.5;
	} else if (distance >= 219) {
		return 3;
	} else if (distance < 219) {
		return 0;
	}
}

function get_swimming_masc_24(distance) {
	if (distance >= 639) {
		return 10;
	} else if (distance >= 607) {
		return 9.5;
	} else if (distance >= 575) {
		return 9;
	} else if (distance >= 543) {
		return 8.5;
	} else if (distance >= 511) {
		return 8;
	} else if (distance >= 479) {
		return 7.5;
	} else if (distance >= 447) {
		return 7;
	} else if (distance >= 414) {
		return 6.5;
	} else if (distance >= 382) {
		return 6;
	} else if (distance >= 351) {
		return 5.5;
	} else if (distance >= 319) {
		return 5;
	} else if (distance >= 287) {
		return 4.5;
	} else if (distance >= 255) {
		return 4;
	} else if (distance >= 223) {
		return 3.5;
	} else if (distance >= 191) {
		return 3;
	} else if (distance < 191) {
		return 0;
	}
}

function get_swimming_masc_29(distance) {
	if (distance >= 616) {
		return 10;
	} else if (distance >= 585) {
		return 9.5;
	} else if (distance >= 554) {
		return 9;
	} else if (distance >= 523) {
		return 8.5;
	} else if (distance >= 492) {
		return 8;
	} else if (distance >= 461) {
		return 7.5;
	} else if (distance >= 431) {
		return 7;
	} else if (distance >= 399) {
		return 6.5;
	} else if (distance >= 368) {
		return 6;
	} else if (distance >= 338) {
		return 5.5;
	} else if (distance >= 307) {
		return 5;
	} else if (distance >= 276) {
		return 4.5;
	} else if (distance >= 246) {
		return 4;
	} else if (distance >= 215) {
		return 3.5;
	} else if (distance >= 184) {
		return 3;
	} else if (distance < 184) {
		return 0;
	}
}

function get_swimming_masc_34(distance) {
	if (distance >= 593) {
		return 10;
	} else if (distance >= 563) {
		return 9.5;
	} else if (distance >= 533) {
		return 9;
	} else if (distance >= 504) {
		return 8.5;
	} else if (distance >= 474) {
		return 8;
	} else if (distance >= 444) {
		return 7.5;
	} else if (distance >= 415) {
		return 7;
	} else if (distance >= 385) {
		return 6.5;
	} else if (distance >= 355) {
		return 6;
	} else if (distance >= 326) {
		return 5.5;
	} else if (distance >= 296) {
		return 5;
	} else if (distance >= 266) {
		return 4.5;
	} else if (distance >= 237) {
		return 4;
	} else if (distance >= 207) {
		return 3.5;
	} else if (distance >= 177) {
		return 3;
	} else if (distance < 177) {
		return 0;
	}
}

function get_swimming_masc_39(distance) {
	if (distance >= 570) {
		return 10;
	} else if (distance >= 541) {
		return 9.5;
	} else if (distance >= 513) {
		return 9;
	} else if (distance >= 484) {
		return 8.5;
	} else if (distance >= 456) {
		return 8;
	} else if (distance >= 427) {
		return 7.5;
	} else if (distance >= 399) {
		return 7;
	} else if (distance >= 370) {
		return 6.5;
	} else if (distance >= 341) {
		return 6;
	} else if (distance >= 313) {
		return 5.5;
	} else if (distance >= 285) {
		return 5;
	} else if (distance >= 256) {
		return 4.5;
	} else if (distance >= 228) {
		return 4;
	} else if (distance >= 199) {
		return 3.5;
	} else if (distance >= 170) {
		return 3;
	} else if (distance < 170) {
		return 0;
	}
}

function get_swimming_masc_44(distance) {
	if (distance >= 548) {
		return 10;
	} else if (distance >= 520) {
		return 9.5;
	} else if (distance >= 493) {
		return 9;
	} else if (distance >= 465) {
		return 8.5;
	} else if (distance >= 438) {
		return 8;
	} else if (distance >= 411) {
		return 7.5;
	} else if (distance >= 383) {
		return 7;
	} else if (distance >= 356) {
		return 6.5;
	} else if (distance >= 328) {
		return 6;
	} else if (distance >= 301) {
		return 5.5;
	} else if (distance >= 274) {
		return 5;
	} else if (distance >= 246) {
		return 4.5;
	} else if (distance >= 219) {
		return 4;
	} else if (distance >= 191) {
		return 3.5;
	} else if (distance >= 164) {
		return 3;
	} else if (distance < 164) {
		return 0;
	}
}

function get_swimming_masc_49(distance) {
	if (distance >= 525) {
		return 10;
	} else if (distance >= 498) {
		return 9.5;
	} else if (distance >= 472) {
		return 9;
	} else if (distance >= 445) {
		return 8.5;
	} else if (distance >= 419) {
		return 8;
	} else if (distance >= 393) {
		return 7.5;
	} else if (distance >= 367) {
		return 7;
	} else if (distance >= 341) {
		return 6.5;
	} else if (distance >= 314) {
		return 6;
	} else if (distance >= 288) {
		return 5.5;
	} else if (distance >= 262) {
		return 5;
	} else if (distance >= 235) {
		return 4.5;
	} else if (distance >= 209) {
		return 4;
	} else if (distance >= 183) {
		return 3.5;
	} else if (distance >= 157) {
		return 3;
	} else if (distance < 157) {
		return 0;
	}
}

function get_swimming_masc_50(distance) {
	if (distance >= 502) {
		return 10;
	} else if (distance >= 476) {
		return 9.5;
	} else if (distance >= 451) {
		return 9;
	} else if (distance >= 426) {
		return 8.5;
	} else if (distance >= 401) {
		return 8;
	} else if (distance >= 376) {
		return 7.5;
	} else if (distance >= 351) {
		return 7;
	} else if (distance >= 326) {
		return 6.5;
	} else if (distance >= 301) {
		return 6;
	} else if (distance >= 276) {
		return 5.5;
	} else if (distance >= 251) {
		return 5;
	} else if (distance >= 225) {
		return 4.5;
	} else if (distance >= 200) {
		return 4;
	} else if (distance >= 175) {
		return 3.5;
	} else if (distance >= 150) {
		return 3;
	} else if (distance < 150) {
		return 0;
	}
}

function get_swimming_fem_19(distance) {
	if (distance >= 639) {
		return 10;
	} else if (distance >= 607) {
		return 9.5;
	} else if (distance >= 575) {
		return 9;
	} else if (distance >= 543) {
		return 8.5;
	} else if (distance >= 511) {
		return 8;
	} else if (distance >= 479) {
		return 7.5;
	} else if (distance >= 447) {
		return 7;
	} else if (distance >= 414) {
		return 6.5;
	} else if (distance >= 382) {
		return 6;
	} else if (distance >= 351) {
		return 5.5;
	} else if (distance >= 319) {
		return 5;
	} else if (distance >= 287) {
		return 4.5;
	} else if (distance >= 255) {
		return 4;
	} else if (distance >= 223) {
		return 3.5;
	} else if (distance >= 191) {
		return 3;
	} else if (distance < 191) {
		return 0;
	}
}

function get_swimming_fem_24(distance) {
	if (distance >= 548) {
		return 10;
	} else if (distance >= 520) {
		return 9.5;
	} else if (distance >= 493) {
		return 9;
	} else if (distance >= 465) {
		return 8.5;
	} else if (distance >= 438) {
		return 8;
	} else if (distance >= 411) {
		return 7.5;
	} else if (distance >= 383) {
		return 7;
	} else if (distance >= 356) {
		return 6.5;
	} else if (distance >= 328) {
		return 6;
	} else if (distance >= 301) {
		return 5.5;
	} else if (distance >= 274) {
		return 5;
	} else if (distance >= 246) {
		return 4.5;
	} else if (distance >= 219) {
		return 4;
	} else if (distance >= 191) {
		return 3.5;
	} else if (distance >= 164) {
		return 3;
	} else if (distance < 164) {
		return 0;
	}
}

function get_swimming_fem_29(distance) {
	if (distance >= 525) {
		return 10;
	} else if (distance >= 498) {
		return 9.5;
	} else if (distance >= 472) {
		return 9;
	} else if (distance >= 445) {
		return 8.5;
	} else if (distance >= 419) {
		return 8;
	} else if (distance >= 393) {
		return 7.5;
	} else if (distance >= 367) {
		return 7;
	} else if (distance >= 341) {
		return 6.5;
	} else if (distance >= 314) {
		return 6;
	} else if (distance >= 288) {
		return 5.5;
	} else if (distance >= 262) {
		return 5;
	} else if (distance >= 235) {
		return 4.5;
	} else if (distance >= 209) {
		return 4;
	} else if (distance >= 183) {
		return 3.5;
	} else if (distance >= 157) {
		return 3;
	} else if (distance < 157) {
		return 0;
	}
}

function get_swimming_fem_34(distance) {
	if (distance >= 502) {
		return 10;
	} else if (distance >= 476) {
		return 9.5;
	} else if (distance >= 451) {
		return 9;
	} else if (distance >= 426) {
		return 8.5;
	} else if (distance >= 401) {
		return 8;
	} else if (distance >= 376) {
		return 7.5;
	} else if (distance >= 351) {
		return 7;
	} else if (distance >= 326) {
		return 6.5;
	} else if (distance >= 301) {
		return 6;
	} else if (distance >= 276) {
		return 5.5;
	} else if (distance >= 251) {
		return 5;
	} else if (distance >= 225) {
		return 4.5;
	} else if (distance >= 200) {
		return 4;
	} else if (distance >= 175) {
		return 3.5;
	} else if (distance >= 150) {
		return 3;
	} else if (distance < 150) {
		return 0;
	}
}

function get_swimming_fem_39(distance) {
	if (distance >= 479) {
		return 10;
	} else if (distance >= 454) {
		return 9.5;
	} else if (distance >= 430) {
		return 9;
	} else if (distance >= 406) {
		return 8.5;
	} else if (distance >= 382) {
		return 8;
	} else if (distance >= 359) {
		return 7.5;
	} else if (distance >= 335) {
		return 7;
	} else if (distance >= 311) {
		return 6.5;
	} else if (distance >= 287) {
		return 6;
	} else if (distance >= 263) {
		return 5.5;
	} else if (distance >= 239) {
		return 5;
	} else if (distance >= 215) {
		return 4.5;
	} else if (distance >= 191) {
		return 4;
	} else if (distance >= 167) {
		return 3.5;
	} else if (distance >= 143) {
		return 3;
	} else if (distance < 143) {
		return 0;
	}
}

function get_swimming_fem_44(distance) {
	if (distance >= 456) {
		return 10;
	} else if (distance >= 433) {
		return 9.5;
	} else if (distance >= 410) {
		return 9;
	} else if (distance >= 387) {
		return 8.5;
	} else if (distance >= 364) {
		return 8;
	} else if (distance >= 342) {
		return 7.5;
	} else if (distance >= 319) {
		return 7;
	} else if (distance >= 296) {
		return 6.5;
	} else if (distance >= 273) {
		return 6;
	} else if (distance >= 250) {
		return 5.5;
	} else if (distance >= 228) {
		return 5;
	} else if (distance >= 205) {
		return 4.5;
	} else if (distance >= 182) {
		return 4;
	} else if (distance >= 159) {
		return 3.5;
	} else if (distance >= 136) {
		return 3;
	} else if (distance < 136) {
		return 0;
	}
}

function get_swimming_fem_49(distance) {
	if (distance >= 433) {
		return 10;
	} else if (distance >= 411) {
		return 9.5;
	} else if (distance >= 389) {
		return 9;
	} else if (distance >= 368) {
		return 8.5;
	} else if (distance >= 346) {
		return 8;
	} else if (distance >= 325) {
		return 7.5;
	} else if (distance >= 303) {
		return 7;
	} else if (distance >= 281) {
		return 6.5;
	} else if (distance >= 259) {
		return 6;
	} else if (distance >= 238) {
		return 5.5;
	} else if (distance >= 216) {
		return 5;
	} else if (distance >= 194) {
		return 4.5;
	} else if (distance >= 173) {
		return 4;
	} else if (distance >= 151) {
		return 3.5;
	} else if (distance >= 129) {
		return 3;
	} else if (distance < 129) {
		return 0;
	}
}

function get_swimming_fem_50(distance) {
	if (distance >= 411) {
		return 10;
	} else if (distance >= 390) {
		return 9.5;
	} else if (distance >= 369) {
		return 9;
	} else if (distance >= 349) {
		return 8.5;
	} else if (distance >= 328) {
		return 8;
	} else if (distance >= 308) {
		return 7.5;
	} else if (distance >= 287) {
		return 7;
	} else if (distance >= 267) {
		return 6.5;
	} else if (distance >= 246) {
		return 6;
	} else if (distance >= 226) {
		return 5.5;
	} else if (distance >= 205) {
		return 5;
	} else if (distance >= 184) {
		return 4.5;
	} else if (distance >= 164) {
		return 4;
	} else if (distance >= 143) {
		return 3.5;
	} else if (distance >= 123) {
		return 3;
	} else if (distance < 123) {
		return 0;
	}
}
