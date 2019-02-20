function calculate_75m_score(age, gender, time) {
	switch(gender) {
		case 'male':
			if (age >= 19) {
				return get_75m_masc_19(time);
			} else if (age >= 24) {
				return get_75m_masc_24(time);
			} else if (age >= 29) {
				return get_75m_masc_29(time);
			} else if (age >= 34) {
				return get_75m_masc_34(time);
			} else if (age >= 39) {
				return get_75m_masc_39(time);
			} else if (age >= 44) {
				return get_75m_masc_44(time);
			} else if (age >= 49) {
				return get_75m_masc_49(time);
			} else if (age >= 50) {
				return get_75m_masc_50(time);
			}
			break;
		case 'female':
			if (age >= 19) {
				return get_75m_fem_19(time);
			} else if (age >= 24) {
				return get_75m_fem_24(time);
			} else if (age >= 29) {
				return get_75m_fem_29(time);
			} else if (age >= 34) {
				return get_75m_fem_34(time);
			} else if (age >= 39) {
				return get_75m_fem_39(time);
			} else if (age >= 44) {
				return get_75m_fem_44(time);
			} else if (age >= 49) {
				return get_75m_fem_49(time);
			} else if (age >= 50) {
				return get_75m_fem_50(time);
			}
		break;
	}
}

function get_75m_masc_19(time) {
	if (time <= 63) {
		return 10;
	} else if (time <= 66) {
		return 9.5;
	} else if (time <= 69) {
		return 9;
	} else if (time <= 72) {
		return 8.5;
	} else if (time <= 75) {
		return 8;
	} else if (time <= 78) {
		return 7.5;
	} else if (time <= 80) {
		return 7;
	} else if (time <= 83) {
		return 6.5;
	} else if (time <= 86) {
		return 6;
	} else if (time <= 90) {
		return 5.5;
	} else if (time <= 93) {
		return 5;
	} else if (time <= 97) {
		return 4.5;
	} else if (time <= 102) {
		return 4;
	} else if (time <= 106) {
		return 3.5;
	} else if (time <= 111) {
		return 3;
	} else if (time > 111) {
		return 0;
	}
}

function get_75m_masc_24(time) {
	if (time <= 66) {
		return 10;
	} else if (time <= 70) {
		return 9.5;
	} else if (time <= 75) {
		return 9;
	} else if (time <= 79) {
		return 8.5;
	} else if (time <= 83) {
		return 8;
	} else if (time <= 87) {
		return 7.5;
	} else if (time <= 92) {
		return 7;
	} else if (time <= 97) {
		return 6.5;
	} else if (time <= 100) {
		return 6;
	} else if (time <= 104) {
		return 5.5;
	} else if (time <= 108) {
		return 5;
	} else if (time <= 112) {
		return 4.5;
	} else if (time <= 117) {
		return 4;
	} else if (time <= 121) {
		return 3.5;
	} else if (time <= 125) {
		return 3;
	} else if (time > 125) {
		return 0;
	}
}

function get_75m_masc_29(time) {
	if (time <= 70) {
		return 10;
	} else if (time <= 74) {
		return 9.5;
	} else if (time <= 78) {
		return 9;
	} else if (time <= 82) {
		return 8.5;
	} else if (time <= 86) {
		return 8;
	} else if (time <= 90) {
		return 7.5;
	} else if (time <= 94) {
		return 7;
	} else if (time <= 99) {
		return 6.5;
	} else if (time <= 102) {
		return 6;
	} else if (time <= 106) {
		return 5.5;
	} else if (time <= 111) {
		return 5;
	} else if (time <= 117) {
		return 4.5;
	} else if (time <= 123) {
		return 4;
	} else if (time <= 130) {
		return 3.5;
	} else if (time <= 138) {
		return 3;
	} else if (time > 138) {
		return 0;
	}
}

function get_75m_masc_34(time) {
	if (time <= 73) {
		return 10;
	} else if (time <= 77) {
		return 9.5;
	} else if (time <= 82) {
		return 9;
	} else if (time <= 88) {
		return 8.5;
	} else if (time <= 93) {
		return 8;
	} else if (time <= 97) {
		return 7.5;
	} else if (time <= 101) {
		return 7;
	} else if (time <= 106) {
		return 6.5;
	} else if (time <= 109) {
		return 6;
	} else if (time <= 114) {
		return 5.5;
	} else if (time <= 119) {
		return 5;
	} else if (time <= 125) {
		return 4.5;
	} else if (time <= 131) {
		return 4;
	} else if (time <= 137) {
		return 3.5;
	} else if (time <= 143) {
		return 3;
	} else if (time > 143) {
		return 0;
	}
}

function get_75m_masc_39(time) {
	if (time <= 76) {
		return 10;
	} else if (time <= 81) {
		return 9.5;
	} else if (time <= 85) {
		return 9;
	} else if (time <= 90) {
		return 8.5;
	} else if (time <= 94) {
		return 8;
	} else if (time <= 98) {
		return 7.5;
	} else if (time <= 102) {
		return 7;
	} else if (time <= 108) {
		return 6.5;
	} else if (time <= 111) {
		return 6;
	} else if (time <= 117) {
		return 5.5;
	} else if (time <= 123) {
		return 5;
	} else if (time <= 130) {
		return 4.5;
	} else if (time <= 138) {
		return 4;
	} else if (time <= 146) {
		return 3.5;
	} else if (time <= 156) {
		return 3;
	} else if (time > 156) {
		return 0;
	}
}

function get_75m_masc_44(time) {
	if (time <= 79) {
		return 10;
	} else if (time <= 89) {
		return 9.5;
	} else if (time <= 99) {
		return 9;
	} else if (time <= 109) {
		return 8.5;
	} else if (time <= 119) {
		return 8;
	} else if (time <= 129) {
		return 7.5;
	} else if (time <= 138) {
		return 7;
	} else if (time <= 146) {
		return 6.5;
	} else if (time <= 151) {
		return 6;
	} else if (time <= 159) {
		return 5.5;
	} else if (time <= 169) {
		return 5;
	} else if (time <= 179) {
		return 4.5;
	} else if (time <= 195) {
		return 4;
	} else if (time <= 207) {
		return 3.5;
	} else if (time <= 220) {
		return 3;
	} else if (time > 220) {
		return 0;
	}
}

function get_75m_masc_49(time) {
	if (time <= 82) {
		return 10;
	} else if (time <= 92) {
		return 9.5;
	} else if (time <= 102) {
		return 9;
	} else if (time <= 112) {
		return 8.5;
	} else if (time <= 122) {
		return 8;
	} else if (time <= 132) {
		return 7.5;
	} else if (time <= 142) {
		return 7;
	} else if (time <= 151) {
		return 6.5;
	} else if (time <= 156) {
		return 6;
	} else if (time <= 167) {
		return 5.5;
	} else if (time <= 180) {
		return 5;
	} else if (time <= 196) {
		return 4.5;
	} else if (time <= 205) {
		return 4;
	} else if (time <= 214) {
		return 3.5;
	} else if (time <= 224) {
		return 3;
	} else if (time > 224) {
		return 0;
	}
}

function get_75m_masc_50(time) {
	if (time <= 86) {
		return 10;
	} else if (time <= 98) {
		return 9.5;
	} else if (time <= 110) {
		return 9;
	} else if (time <= 122) {
		return 8.5;
	} else if (time <= 133) {
		return 8;
	} else if (time <= 144) {
		return 7.5;
	} else if (time <= 156) {
		return 7;
	} else if (time <= 167) {
		return 6.5;
	} else if (time <= 180) {
		return 6;
	} else if (time <= 197) {
		return 5.5;
	} else if (time <= 213) {
		return 5;
	} else if (time <= 234) {
		return 4.5;
	} else if (time <= 247) {
		return 4;
	} else if (time <= 261) {
		return 3.5;
	} else if (time <= 277) {
		return 3;
	} else if (time > 277) {
		return 0
	}
}

function get_75m_fem_19(time) {
	if (time <= 71) {
		return 10;
	} else if (time <= 75) {
		return 9.5;
	} else if (time <= 79) {
		return 9;
	} else if (time <= 83) {
		return 8.5;
	} else if (time <= 86) {
		return 8;
	} else if (time <= 89) {
		return 7.5;
	} else if (time <= 93) {
		return 7;
	} else if (time <= 97) {
		return 6.5;
	} else if (time <= 102) {
		return 6;
	} else if (time <= 106) {
		return 5.5;
	} else if (time <= 111) {
		return 5;
	} else if (time <= 117) {
		return 4.5;
	} else if (time <= 123) {
		return 4;
	} else if (time <= 130) {
		return 3.5;
	} else if (time <= 138) {
		return 3;
	} else if (time > 138) {
		return 0;
	}
}

function get_75m_fem_24(time) {
	if (time <= 77) {
		return 10;
	} else if (time <= 81) {
		return 9.5;
	} else if (time <= 85) {
		return 9;
	} else if (time <= 89) {
		return 8.5;
	} else if (time <= 93) {
		return 8;
	} else if (time <= 98) {
		return 7.5;
	} else if (time <= 102) {
		return 7;
	} else if (time <= 106) {
		return 6.5;
	} else if (time <= 111) {
		return 6;
	} else if (time <= 115) {
		return 5.5;
	} else if (time <= 121) {
		return 5;
	} else if (time <= 126) {
		return 4.5;
	} else if (time <= 133) {
		return 4;
	} else if (time <= 141) {
		return 3.5;
	} else if (time <= 150) {
		return 3;
	} else if (time > 150) {
		return 0;
	}
}

function get_75m_fem_29(time) {
	if (time <= 83) {
		return 10;
	} else if (time <= 87) {
		return 9.5;
	} else if (time <= 91) {
		return 9;
	} else if (time <= 94) {
		return 8.5;
	} else if (time <= 98) {
		return 8;
	} else if (time <= 101) {
		return 7.5;
	} else if (time <= 104) {
		return 7;
	} else if (time <= 108) {
		return 6.5;
	} else if (time <= 111) {
		return 6;
	} else if (time <= 117) {
		return 5.5;
	} else if (time <= 123) {
		return 5;
	} else if (time <= 130) {
		return 4.5;
	} else if (time <= 138) {
		return 4;
	} else if (time <= 146) {
		return 3.5;
	} else if (time <= 156) {
		return 3;
	} else if (time > 156) {
		return 0;
	}
}

function get_75m_fem_34(time) {
	if (time <= 89) {
		return 10;
	} else if (time <= 98) {
		return 9.5;
	} else if (time <= 107) {
		return 9;
	} else if (time <= 115) {
		return 8.5;
	} else if (time <= 123) {
		return 8;
	} else if (time <= 131) {
		return 7.5;
	} else if (time <= 138) {
		return 7;
	} else if (time <= 146) {
		return 6.5;
	} else if (time <= 151) {
		return 6;
	} else if (time <= 160) {
		return 5.5;
	} else if (time <= 172) {
		return 5;
	} else if (time <= 185) {
		return 4.5;
	} else if (time <= 200) {
		return 4;
	} else if (time <= 210) {
		return 3.5;
	} else if (time <= 220) {
		return 3;
	} else if (time > 220) {
		return 0;
	}
}

function get_75m_fem_39(time) {
	if (time <= 94) {
		return 10;
	} else if (time <= 102) {
		return 9.5;
	} else if (time <= 111) {
		return 9;
	} else if (time <= 119) {
		return 8.5;
	} else if (time <= 127) {
		return 8;
	} else if (time <= 135) {
		return 7.5;
	} else if (time <= 143) {
		return 7;
	} else if (time <= 151) {
		return 6.5;
	} else if (time <= 156) {
		return 6;
	} else if (time <= 167) {
		return 5.5;
	} else if (time <= 180) {
		return 5;
	} else if (time <= 196) {
		return 4.5;
	} else if (time <= 205) {
		return 4;
	} else if (time <= 214) {
		return 3.5;
	} else if (time <= 224) {
		return 3;
	} else if (time > 224) {
		return 0;
	}
}

function get_75m_fem_44(time) {
	if (time <= 100) {
		return 10;
	} else if (time <= 110) {
		return 9.5;
	} else if (time <= 120) {
		return 9;
	} else if (time <= 130) {
		return 8.5;
	} else if (time <= 140) {
		return 8;
	} else if (time <= 150) {
		return 7.5;
	} else if (time <= 159) {
		return 7;
	} else if (time <= 167) {
		return 6.5;
	} else if (time <= 174) {
		return 6;
	} else if (time <= 190) {
		return 5.5;
	} else if (time <= 204) {
		return 5;
	} else if (time <= 230) {
		return 4.5;
	} else if (time <= 240) {
		return 4;
	} else if (time <= 252) {
		return 3.5;
	} else if (time <= 270) {
		return 3;
	} else if (time > 270) {
		return 0;
	}
}

function get_75m_fem_49(time) {
	if (time <= 106) {
		return 10;
	} else if (time <= 116) {
		return 9.5;
	} else if (time <= 126) {
		return 9;
	} else if (time <= 136) {
		return 8.5;
	} else if (time <= 145) {
		return 8;
	} else if (time <= 154) {
		return 7.5;
	} else if (time <= 164) {
		return 7;
	} else if (time <= 172) {
		return 6.5;
	} else if (time <= 180) {
		return 6;
	} else if (time <= 197) {
		return 5.5;
	} else if (time <= 213) {
		return 5;
	} else if (time <= 234) {
		return 4.5;
	} else if (time <= 247) {
		return 4;
	} else if (time <= 261) {
		return 3.5;
	} else if (time <= 277) {
		return 3;
	} else if (time > 277) {
		return 0;
	}
}

function get_75m_fem_50(time) {
	if (time <= 111) {
		return 10;
	} else if (time <= 124) {
		return 9.5;
	} else if (time <= 137) {
		return 9;
	} else if (time <= 150) {
		return 8.5;
	} else if (time <= 163) {
		return 8;
	} else if (time <= 178) {
		return 7.5;
	} else if (time <= 190) {
		return 7;
	} else if (time <= 199) {
		return 6.5;
	} else if (time <= 216) {
		return 6;
	} else if (time <= 236) {
		return 5.5;
	} else if (time <= 253) {
		return 5;
	} else if (time <= 274) {
		return 4.5;
	} else if (time <= 287) {
		return 4;
	} else if (time <= 301) {
		return 3.5;
	} else if (time <= 317) {
		return 3;
	} else if (time > 317) {
		return 0;
	}
}