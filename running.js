function calculate_running_score(age, gender, time) {
	switch(gender) {
		case 'male':
			if (age <= 19) {
				return get_running_masc_19(time);
			} else if (age <= 24) {
				return get_running_masc_24(time);
			} else if (age <= 29) {
				return get_running_masc_29(time);
			} else if (age <= 34) {
				return get_running_masc_34(time);
			} else if (age <= 39) {
				return get_running_masc_39(time);
			} else if (age <= 44) {
				return get_running_masc_44(time);
			} else if (age <= 49) {
				return get_running_masc_49(time);
			} else if (age >= 50) {
				return get_running_masc_50(time);
			}
			break;
		case 'female':
			if (age <= 19) {
				return get_running_fem_19(time);
			} else if (age <= 24) {
				return get_running_fem_24(time);
			} else if (age <= 29) {
				return get_running_fem_29(time);
			} else if (age <= 34) {
				return get_running_fem_34(time);
			} else if (age <= 39) {
				return get_running_fem_39(time);
			} else if (age <= 44) {
				return get_running_fem_44(time);
			} else if (age <= 49) {
				return get_running_fem_49(time);
			} else if (age >= 50) {
				return get_running_fem_50(time);
			}
		break;
	}
}

function get_running_masc_19(time) {
	if (time <= 574) {
		return 10;
	} else if (time <= 591) {
		return 9.5;
	} else if (time <= 608) {
		return 9;
	} else if (time <= 626) {
		return 8.5;
	} else if (time <= 644) {
		return 8;
	} else if (time <= 662) {
		return 7.5;
	} else if (time <= 680) {
		return 7;
	} else if (time <= 698) {
		return 6.5;
	} else if (time <= 724) {
		return 6;
	} else if (time <= 740) {
		return 5.5;
	} else if (time <= 756) {
		return 5;
	} else if (time <= 774) {
		return 4.5;
	} else if (time <= 790) {
		return 4;
	} else if (time <= 806) {
		return 3.5;
	} else if (time <= 824) {
		return 3;
	} else if (time > 824) {
		return 0;
	}
}

function get_running_masc_24(time) {
	if (time <= 586) {
		return 10;
	} else if (time <= 615) {
		return 9.5;
	} else if (time <= 644) {
		return 9;
	} else if (time <= 673) {
		return 8.5;
	} else if (time <= 702) {
		return 8;
	} else if (time <= 731) {
		return 7.5;
	} else if (time <= 760) {
		return 7;
	} else if (time <= 789) {
		return 6.5;
	} else if (time <= 819) {
		return 6;
	} else if (time <= 849) {
		return 5.5;
	} else if (time <= 879) {
		return 5;
	} else if (time <= 909) {
		return 4.5;
	} else if (time <= 939) {
		return 4;
	} else if (time <= 969) {
		return 3.5;
	} else if (time <= 999) {
		return 3;
	} else if (time > 999) {
		return 0;
	}
}

function get_running_masc_29(time) {
	if (time <= 599) {
		return 10;
	} else if (time <= 629) {
		return 9.5;
	} else if (time <= 659) {
		return 9;
	} else if (time <= 689) {
		return 8.5;
	} else if (time <= 718) {
		return 8;
	} else if (time <= 747) {
		return 7.5;
	} else if (time <= 775) {
		return 7;
	} else if (time <= 803) {
		return 6.5;
	} else if (time <= 833) {
		return 6;
	} else if (time <= 861) {
		return 5.5;
	} else if (time <= 889) {
		return 5;
	} else if (time <= 917) {
		return 4.5;
	} else if (time <= 945) {
		return 4;
	} else if (time <= 963) {
		return 3.5;
	} else if (time <= 991) {
		return 3;
	} else if (time > 991) {
		return 0;
	}
}

function get_running_masc_34(time) {
	if (time <= 611) {
		return 10;
	} else if (time <= 640) {
		return 9.5;
	} else if (time <= 669) {
		return 9;
	} else if (time <= 698) {
		return 8.5;
	} else if (time <= 726) {
		return 8;
	} else if (time <= 754) {
		return 7.5;
	} else if (time <= 782) {
		return 7;
	} else if (time <= 810) {
		return 6.5;
	} else if (time <= 839) {
		return 6;
	} else if (time <= 868) {
		return 5.5;
	} else if (time <= 897) {
		return 5;
	} else if (time <= 926) {
		return 4.5;
	} else if (time <= 955) {
		return 4;
	} else if (time <= 984) {
		return 3.5;
	} else if (time <= 1013) {
		return 3;
	} else if (time > 1013) {
		return 0;
	}
}

function get_running_masc_39(time) {
	if (time <= 624) {
		return 10;
	} else if (time <= 653) {
		return 9.5;
	} else if (time <= 682) {
		return 9;
	} else if (time <= 711) {
		return 8.5;
	} else if (time <= 740) {
		return 8;
	} else if (time <= 768) {
		return 7.5;
	} else if (time <= 796) {
		return 7;
	} else if (time <= 824) {
		return 6.5;
	} else if (time <= 853) {
		return 6;
	} else if (time <= 882) {
		return 5.5;
	} else if (time <= 900) {
		return 5;
	} else if (time <= 929) {
		return 4.5;
	} else if (time <= 957) {
		return 4;
	} else if (time <= 986) {
		return 3.5;
	} else if (time <= 1015) {
		return 3;
	} else if (time > 1015) {
		return 0;
	}
}

function get_running_masc_44(time) {
	if (time <= 637) {
		return 10;
	} else if (time <= 668) {
		return 9.5;
	} else if (time <= 699) {
		return 9;
	} else if (time <= 730) {
		return 8.5;
	} else if (time <= 761) {
		return 8;
	} else if (time <= 792) {
		return 7.5;
	} else if (time <= 821) {
		return 7;
	} else if (time <= 851) {
		return 6.5;
	} else if (time <= 882) {
		return 6;
	} else if (time <= 913) {
		return 5.5;
	} else if (time <= 944) {
		return 5;
	} else if (time <= 975) {
		return 4.5;
	} else if (time <= 1006) {
		return 4;
	} else if (time <= 1037) {
		return 3.5;
	} else if (time <= 1068) {
		return 3;
	} else if (time > 1068) {
		return 0;
	}
}

function get_running_masc_49(time) {
	if (time <= 649) {
		return 10;
	} else if (time <= 681) {
		return 9.5;
	} else if (time <= 713) {
		return 9;
	} else if (time <= 745) {
		return 8.5;
	} else if (time <= 776) {
		return 8;
	} else if (time <= 807) {
		return 7.5;
	} else if (time <= 837) {
		return 7;
	} else if (time <= 866) {
		return 6.5;
	} else if (time <= 898) {
		return 6;
	} else if (time <= 930) {
		return 5.5;
	} else if (time <= 961) {
		return 5;
	} else if (time <= 992) {
		return 4.5;
	} else if (time <= 1024) {
		return 4;
	} else if (time <= 1056) {
		return 3.5;
	} else if (time <= 1088) {
		return 3;
	} else if (time > 1088) {
		return 0;
	}
}

function get_running_masc_50(time) {
	if (time <= 662) {
		return 10;
	} else if (time <= 700) {
		return 9.5;
	} else if (time <= 738) {
		return 9;
	} else if (time <= 776) {
		return 8.5;
	} else if (time <= 814) {
		return 8;
	} else if (time <= 851) {
		return 7.5;
	} else if (time <= 888) {
		return 7;
	} else if (time <= 924) {
		return 6.5;
	} else if (time <= 962) {
		return 6;
	} else if (time <= 1000) {
		return 5.5;
	} else if (time <= 1038) {
		return 5;
	} else if (time <= 1076) {
		return 4.5;
	} else if (time <= 1114) {
		return 4;
	} else if (time <= 1142) {
		return 3.5;
	} else if (time <= 1180) {
		return 3;
	} else if (time > 1180) {
		return 0;
	}
}

function get_running_fem_19(time) {
	if (time <= 706) {
		return 10;
	} else if (time <= 746) {
		return 9.5;
	} else if (time <= 786) {
		return 9;
	} else if (time <= 828) {
		return 8.5;
	} else if (time <= 869) {
		return 8;
	} else if (time <= 910) {
		return 7.5;
	} else if (time <= 951) {
		return 7;
	} else if (time <= 993) {
		return 6.5;
	} else if (time <= 1034) {
		return 6;
	} else if (time <= 1075) {
		return 5.5;
	} else if (time <= 1117) {
		return 5;
	} else if (time <= 1158) {
		return 4.5;
	} else if (time <= 1199) {
		return 4;
	} else if (time <= 1240) {
		return 3.5;
	} else if (time <= 1282) {
		return 3;
	} else if (time > 1282) {
		return 0;
	}
}

function get_running_fem_24(time) {
	if (time <= 724) {
		return 10;
	} else if (time <= 765) {
		return 9.5;
	} else if (time <= 807) {
		return 9;
	} else if (time <= 848) {
		return 8.5;
	} else if (time <= 890) {
		return 8;
	} else if (time <= 931) {
		return 7.5;
	} else if (time <= 972) {
		return 7;
	} else if (time <= 1012) {
		return 6.5;
	} else if (time <= 1053) {
		return 6;
	} else if (time <= 1094) {
		return 5.5;
	} else if (time <= 1135) {
		return 5;
	} else if (time <= 1176) {
		return 4.5;
	} else if (time <= 1217) {
		return 4;
	} else if (time <= 1258) {
		return 3.5;
	} else if (time <= 1300) {
		return 3;
	} else if (time > 1300) {
		return 0;
	}
}

function get_running_fem_29(time) {
	if (time <= 742) {
		return 10;
	} else if (time <= 785) {
		return 9.5;
	} else if (time <= 828) {
		return 9;
	} else if (time <= 870) {
		return 8.5;
	} else if (time <= 911) {
		return 8;
	} else if (time <= 953) {
		return 7.5;
	} else if (time <= 994) {
		return 7;
	} else if (time <= 1036) {
		return 6.5;
	} else if (time <= 1077) {
		return 6;
	} else if (time <= 1118) {
		return 5.5;
	} else if (time <= 1159) {
		return 5;
	} else if (time <= 1200) {
		return 4.5;
	} else if (time <= 1241) {
		return 4;
	} else if (time <= 1283) {
		return 3.5;
	} else if (time <= 1325) {
		return 3;
	} else if (time > 1325) {
		return 0;
	}
}

function get_running_fem_34(time) {
	if (time <= 760) {
		return 10;
	} else if (time <= 802) {
		return 9.5;
	} else if (time <= 843) {
		return 9;
	} else if (time <= 885) {
		return 8.5;
	} else if (time <= 926) {
		return 8;
	} else if (time <= 968) {
		return 7.5;
	} else if (time <= 1010) {
		return 7;
	} else if (time <= 1053) {
		return 6.5;
	} else if (time <= 1095) {
		return 6;
	} else if (time <= 1137) {
		return 5.5;
	} else if (time <= 1180) {
		return 5;
	} else if (time <= 1221) {
		return 4.5;
	} else if (time <= 1263) {
		return 4;
	} else if (time <= 1305) {
		return 3.5;
	} else if (time <= 1346) {
		return 3;
	} else if (time > 1346) {
		return 0;
	}
}

function get_running_fem_39(time) {
	if (time <= 778) {
		return 10;
	} else if (time <= 820) {
		return 9.5;
	} else if (time <= 862) {
		return 9;
	} else if (time <= 905) {
		return 8.5;
	} else if (time <= 947) {
		return 8;
	} else if (time <= 988) {
		return 7.5;
	} else if (time <= 1030) {
		return 7;
	} else if (time <= 1072) {
		return 6.5;
	} else if (time <= 1114) {
		return 6;
	} else if (time <= 1155) {
		return 5.5;
	} else if (time <= 1197) {
		return 5;
	} else if (time <= 1240) {
		return 4.5;
	} else if (time <= 1281) {
		return 4;
	} else if (time <= 1322) {
		return 3.5;
	} else if (time <= 1364) {
		return 3;
	} else if (time > 1364) {
		return 0;
	}
}

function get_running_fem_44(time) {
	if (time <= 796) {
		return 10;
	} else if (time <= 842) {
		return 9.5;
	} else if (time <= 887) {
		return 9;
	} else if (time <= 933) {
		return 8.5;
	} else if (time <= 977) {
		return 8;
	} else if (time <= 1022) {
		return 7.5;
	} else if (time <= 1068) {
		return 7;
	} else if (time <= 1114) {
		return 6.5;
	} else if (time <= 1160) {
		return 6;
	} else if (time <= 1206) {
		return 5.5;
	} else if (time <= 1250) {
		return 5;
	} else if (time <= 1296) {
		return 4.5;
	} else if (time <= 1342) {
		return 4;
	} else if (time <= 1388) {
		return 3.5;
	} else if (time <= 1434) {
		return 3;
	} else if (time > 1434) {
		return 0;
	}
}

function get_running_fem_49(time) {
	if (time <= 814) {
		return 10;
	} else if (time <= 860) {
		return 9.5;
	} else if (time <= 906) {
		return 9;
	} else if (time <= 951) {
		return 8.5;
	} else if (time <= 997) {
		return 8;
	} else if (time <= 1043) {
		return 7.5;
	} else if (time <= 1087) {
		return 7;
	} else if (time <= 1131) {
		return 6.5;
	} else if (time <= 1177) {
		return 6;
	} else if (time <= 1223) {
		return 5.5;
	} else if (time <= 1269) {
		return 5;
	} else if (time <= 1315) {
		return 4.5;
	} else if (time <= 1360) {
		return 4;
	} else if (time <= 1406) {
		return 3.5;
	} else if (time <= 1452) {
		return 3;
	} else if (time > 1452) {
		return 0;
	}
}

function get_running_fem_50(time) {
	if (time <= 832) {
		return 10;
	} else if (time <= 883) {
		return 9.5;
	} else if (time <= 934) {
		return 9;
	} else if (time <= 985) {
		return 8.5;
	} else if (time <= 1036) {
		return 8;
	} else if (time <= 1088) {
		return 7.5;
	} else if (time <= 1141) {
		return 7;
	} else if (time <= 1194) {
		return 6.5;
	} else if (time <= 1250) {
		return 6;
	} else if (time <= 1301) {
		return 5.5;
	} else if (time <= 1353) {
		return 5;
	} else if (time <= 1404) {
		return 4.5;
	} else if (time <= 1455) {
		return 4;
	} else if (time <= 1510) {
		return 3.5;
	} else if (time <= 1566) {
		return 3;
	} else if (time > 1566) {
		return 0;
	}
}
