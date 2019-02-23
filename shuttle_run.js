function calculate_shuttle_run_score(age, gender, time) {
	switch(gender) {
		case 'male':
			if (age <= 19) {
				return get_shuttle_run_masc_19(time);
			} else if (age <= 24) {
				return get_shuttle_run_masc_24(time);
			} else if (age <= 29) {
				return get_shuttle_run_masc_29(time);
			} else if (age <= 34) {
				return get_shuttle_run_masc_34(time);
			} else if (age <= 39) {
				return get_shuttle_run_masc_39(time);
			} else if (age <= 44) {
				return get_shuttle_run_masc_44(time);
			} else if (age <= 49) {
				return get_shuttle_run_masc_49(time);
			} else if (age >= 50) {
				return get_shuttle_run_masc_50(time);
			}
			break;
		case 'female':
			if (age <= 19) {
				return get_shuttle_run_fem_19(time);
			} else if (age <= 24) {
				return get_shuttle_run_fem_24(time);
			} else if (age <= 29) {
				return get_shuttle_run_fem_29(time);
			} else if (age <= 34) {
				return get_shuttle_run_fem_34(time);
			} else if (age <= 39) {
				return get_shuttle_run_fem_39(time);
			} else if (age <= 44) {
				return get_shuttle_run_fem_44(time);
			} else if (age <= 49) {
				return get_shuttle_run_fem_49(time);
			} else if (age >= 50) {
				return get_shuttle_run_fem_50(time);
			}
		break;
	}
}

function get_shuttle_run_masc_19(time) {
	if (time <= 892) {
		return 10;
	} else if (time <= 908) {
		return 9.5;
	} else if (time <= 924) {
		return 9;
	} else if (time <= 940) {
		return 8.5;
	} else if (time <= 956) {
		return 8;
	} else if (time <= 972) {
		return 7.5;
	} else if (time <= 988) {
		return 7;
	} else if (time <= 1003) {
		return 6.5;
	} else if (time <= 1019) {
		return 6;
	} else if (time <= 1035) {
		return 5.5;
	} else if (time <= 1051) {
		return 5;
	} else if (time <= 1067) {
		return 4.5;
	} else if (time <= 1083) {
		return 4;
	} else if (time <= 1099) {
		return 3.5;
	} else if (time <= 1115) {
		return 3;
	} else if (time > 1115) {
		return 0;
	}
}

function get_shuttle_run_masc_24(time) {
	if (time <= 907) {
		return 10;
	} else if (time <= 923) {
		return 9.5;
	} else if (time <= 939) {
		return 9;
	} else if (time <= 955) {
		return 8.5;
	} else if (time <= 971) {
		return 8;
	} else if (time <= 987) {
		return 7.5;
	} else if (time <= 1003) {
		return 7;
	} else if (time <= 1019) {
		return 6.5;
	} else if (time <= 1035) {
		return 6;
	} else if (time <= 1051) {
		return 5.5;
	} else if (time <= 1067) {
		return 5;
	} else if (time <= 1083) {
		return 4.5;
	} else if (time <= 1099) {
		return 4;
	} else if (time <= 1115) {
		return 3.5;
	} else if (time <= 1131) {
		return 3;
	} else if (time > 1131) {
		return 0;
	}
}

function get_shuttle_run_masc_29(time) {
	if (time <= 923) {
		return 10;
	} else if (time <= 939) {
		return 9.5;
	} else if (time <= 955) {
		return 9;
	} else if (time <= 971) {
		return 8.5;
	} else if (time <= 987) {
		return 8;
	} else if (time <= 1003) {
		return 7.5;
	} else if (time <= 1019) {
		return 7;
	} else if (time <= 1035) {
		return 6.5;
	} else if (time <= 1051) {
		return 6;
	} else if (time <= 1067) {
		return 5.5;
	} else if (time <= 1083) {
		return 5;
	} else if (time <= 1099) {
		return 4.5;
	} else if (time <= 1115) {
		return 4;
	} else if (time <= 1131) {
		return 3.5;
	} else if (time <= 1147) {
		return 3;
	} else if (time > 1147) {
		return 0;
	}
}

function get_shuttle_run_masc_34(time) {
	if (time <= 938) {
		return 10;
	} else if (time <= 954) {
		return 9.5;
	} else if (time <= 970) {
		return 9;
	} else if (time <= 986) {
		return 8.5;
	} else if (time <= 1002) {
		return 8;
	} else if (time <= 1018) {
		return 7.5;
	} else if (time <= 1034) {
		return 7;
	} else if (time <= 1050) {
		return 6.5;
	} else if (time <= 1066) {
		return 6;
	} else if (time <= 1082) {
		return 5.5;
	} else if (time <= 1098) {
		return 5;
	} else if (time <= 1114) {
		return 4.5;
	} else if (time <= 1130) {
		return 4;
	} else if (time <= 1146) {
		return 3.5;
	} else if (time <= 1162) {
		return 3;
	} else if (time > 1162) {
		return 0;
	}	
}

function get_shuttle_run_masc_39(time) {
	if (time <= 953) {
		return 10;
	} else if (time <= 969) {
		return 9.5;
	} else if (time <= 985) {
		return 9;
	} else if (time <= 1001) {
		return 8.5;
	} else if (time <= 1017) {
		return 8;
	} else if (time <= 1033) {
		return 7.5;
	} else if (time <= 1049) {
		return 7;
	} else if (time <= 1065) {
		return 6.5;
	} else if (time <= 1081) {
		return 6;
	} else if (time <= 1097) {
		return 5.5;
	} else if (time <= 1113) {
		return 5;
	} else if (time <= 1129) {
		return 4.5;
	} else if (time <= 1145) {
		return 4;
	} else if (time <= 1161) {
		return 3.5;
	} else if (time <= 1177) {
		return 3;
	} else if (time > 1177) {
		return 0;
	}
}

function get_shuttle_run_masc_44(time) {
	if (time <= 968) {
		return 10;
	} else if (time <= 984) {
		return 9.5;
	} else if (time <= 1000) {
		return 9;
	} else if (time <= 1016) {
		return 8.5;
	} else if (time <= 1032) {
		return 8;
	} else if (time <= 1048) {
		return 7.5;
	} else if (time <= 1064) {
		return 7;
	} else if (time <= 1080) {
		return 6.5;
	} else if (time <= 1096) {
		return 6;
	} else if (time <= 1112) {
		return 5.5;
	} else if (time <= 1128) {
		return 5;
	} else if (time <= 1144) {
		return 4.5;
	} else if (time <= 1159) {
		return 4;
	} else if (time <= 1175) {
		return 3.5;
	} else if (time <= 1191) {
		return 3;
	} else if (time > 1191) {
		return 0;
	}
}

function get_shuttle_run_masc_49(time) {
	if (time <= 983) {
		return 10;
	} else if (time <= 999) {
		return 9.5;
	} else if (time <= 1015) {
		return 9;
	} else if (time <= 1031) {
		return 8.5;
	} else if (time <= 1047) {
		return 8;
	} else if (time <= 1063) {
		return 7.5;
	} else if (time <= 1079) {
		return 7;
	} else if (time <= 1095) {
		return 6.5;
	} else if (time <= 1111) {
		return 6;
	} else if (time <= 1127) {
		return 5.5;
	} else if (time <= 1143) {
		return 5;
	} else if (time <= 1159) {
		return 4.5;
	} else if (time <= 1175) {
		return 4;
	} else if (time <= 1191) {
		return 3.5;
	} else if (time <= 1207) {
		return 3;
	} else if (time > 1207) {
		return 0;
	}
}

function get_shuttle_run_masc_50(time) {
	if (time <= 996) {
		return 10;
	} else if (time <= 1012) {
		return 9.5;
	} else if (time <= 1028) {
		return 9;
	} else if (time <= 1044) {
		return 8.5;
	} else if (time <= 1060) {
		return 8;
	} else if (time <= 1076) {
		return 7.5;
	} else if (time <= 1092) {
		return 7;
	} else if (time <= 1108) {
		return 6.5;
	} else if (time <= 1124) {
		return 6;
	} else if (time <= 1140) {
		return 5.5;
	} else if (time <= 1156) {
		return 5;
	} else if (time <= 1172) {
		return 4.5;
	} else if (time <= 1188) {
		return 4;
	} else if (time <= 1204) {
		return 3.5;
	} else if (time <= 1220) {
		return 3;
	} else if (time > 1220) {
		return 0;
	}
}


function get_shuttle_run_fem_19(time) {
	if (time <= 1012) {
		return 10;
	} else if (time <= 1028) {
		return 9.5;
	} else if (time <= 1044) {
		return 9;
	} else if (time <= 1060) {
		return 8.5;
	} else if (time <= 1076) {
		return 8;
	} else if (time <= 1092) {
		return 7.5;
	} else if (time <= 1108) {
		return 7;
	} else if (time <= 1124) {
		return 6.5;
	} else if (time <= 1140) {
		return 6;
	} else if (time <= 1156) {
		return 5.5;
	} else if (time <= 1172) {
		return 5;
	} else if (time <= 1188) {
		return 4.5;
	} else if (time <= 1204) {
		return 4;
	} else if (time <= 1220) {
		return 3.5;
	} else if (time <= 1236) {
		return 3;
	} else if (time > 1236) {
		return 0;
	}
}

function get_shuttle_run_fem_24(time) {
	if (time <= 1022) {
		return 10;
	} else if (time <= 1038) {
		return 9.5;
	} else if (time <= 1054) {
		return 9;
	} else if (time <= 1070) {
		return 8.5;
	} else if (time <= 1086) {
		return 8;
	} else if (time <= 1102) {
		return 7.5;
	} else if (time <= 1118) {
		return 7;
	} else if (time <= 1134) {
		return 6.5;
	} else if (time <= 1150) {
		return 6;
	} else if (time <= 1166) {
		return 5.5;
	} else if (time <= 1182) {
		return 5;
	} else if (time <= 1198) {
		return 4.5;
	} else if (time <= 1214) {
		return 4;
	} else if (time <= 1230) {
		return 3.5;
	} else if (time <= 1246) {
		return 3;
	} else if (time > 1246) {
		return 0;
	}
}

function get_shuttle_run_fem_29(time) {
	if (time <= 1048) {
		return 10;
	} else if (time <= 1064) {
		return 9.5;
	} else if (time <= 1080) {
		return 9;
	} else if (time <= 1096) {
		return 8.5;
	} else if (time <= 1112) {
		return 8;
	} else if (time <= 1128) {
		return 7.5;
	} else if (time <= 1144) {
		return 7;
	} else if (time <= 1160) {
		return 6.5;
	} else if (time <= 1176) {
		return 6;
	} else if (time <= 1192) {
		return 5.5;
	} else if (time <= 1208) {
		return 5;
	} else if (time <= 1224) {
		return 4.5;
	} else if (time <= 1240) {
		return 4;
	} else if (time <= 1256) {
		return 3.5;
	} else if (time <= 1272) {
		return 3;
	} else if (time > 1272) {
		return 0;
	}
}

function get_shuttle_run_fem_34(time) {
	if (time <= 1074) {
		return 10;
	} else if (time <= 1090) {
		return 9.5;
	} else if (time <= 1106) {
		return 9;
	} else if (time <= 1122) {
		return 8.5;
	} else if (time <= 1138) {
		return 8;
	} else if (time <= 1154) {
		return 7.5;
	} else if (time <= 1170) {
		return 7;
	} else if (time <= 1186) {
		return 6.5;
	} else if (time <= 1202) {
		return 6;
	} else if (time <= 1218) {
		return 5.5;
	} else if (time <= 1234) {
		return 5;
	} else if (time <= 1250) {
		return 4.5;
	} else if (time <= 1266) {
		return 4;
	} else if (time <= 1282) {
		return 3.5;
	} else if (time <= 1298) {
		return 3;
	} else if (time > 1298) {
		return 0;
	}
}

function get_shuttle_run_fem_39(time) {
	if (time <= 1099) {
		return 10;
	} else if (time <= 1105) {
		return 9.5;
	} else if (time <= 1131) {
		return 9;
	} else if (time <= 1147) {
		return 8.5;
	} else if (time <= 1163) {
		return 8;
	} else if (time <= 1179) {
		return 7.5;
	} else if (time <= 1195) {
		return 7;
	} else if (time <= 1211) {
		return 6.5;
	} else if (time <= 1227) {
		return 6;
	} else if (time <= 1243) {
		return 5.5;
	} else if (time <= 1259) {
		return 5;
	} else if (time <= 1275) {
		return 4.5;
	} else if (time <= 1291) {
		return 4;
	} else if (time <= 1307) {
		return 3.5;
	} else if (time <= 1323) {
		return 3;
	} else if (time > 1323) {
		return 0;
	}
}

function get_shuttle_run_fem_44(time) {
	if (time <= 1125) {
		return 10;
	} else if (time <= 1141) {
		return 9.5;
	} else if (time <= 1157) {
		return 9;
	} else if (time <= 1173) {
		return 8.5;
	} else if (time <= 1189) {
		return 8;
	} else if (time <= 1205) {
		return 7.5;
	} else if (time <= 1221) {
		return 7;
	} else if (time <= 1237) {
		return 6.5;
	} else if (time <= 1253) {
		return 6;
	} else if (time <= 1269) {
		return 5.5;
	} else if (time <= 1285) {
		return 5;
	} else if (time <= 1301) {
		return 4.5;
	} else if (time <= 1317) {
		return 4;
	} else if (time <= 1333) {
		return 3.5;
	} else if (time <= 1349) {
		return 3;
	} else if (time > 1349) {
		return 0;
	}
}

function get_shuttle_run_fem_49(time) {
	if (time <= 1150) {
		return 10;
	} else if (time <= 1166) {
		return 9.5;
	} else if (time <= 1182) {
		return 9;
	} else if (time <= 1198) {
		return 8.5;
	} else if (time <= 1214) {
		return 8;
	} else if (time <= 1230) {
		return 7.5;
	} else if (time <= 1246) {
		return 7;
	} else if (time <= 1262) {
		return 6.5;
	} else if (time <= 1278) {
		return 6;
	} else if (time <= 1294) {
		return 5.5;
	} else if (time <= 1310) {
		return 5;
	} else if (time <= 1326) {
		return 4.5;
	} else if (time <= 1342) {
		return 4;
	} else if (time <= 1358) {
		return 3.5;
	} else if (time <= 1374) {
		return 3;
	} else if (time > 1374) {
		return 0;
	}
}

function get_shuttle_run_fem_50(time) {
	if (time <= 1176) {
		return 10;
	} else if (time <= 1192) {
		return 9.5;
	} else if (time <= 1208) {
		return 9;
	} else if (time <= 1224) {
		return 8.5;
	} else if (time <= 1240) {
		return 8;
	} else if (time <= 1256) {
		return 7.5;
	} else if (time <= 1272) {
		return 7;
	} else if (time <= 1288) {
		return 6.5;
	} else if (time <= 1304) {
		return 6;
	} else if (time <= 1320) {
		return 5.5;
	} else if (time <= 1336) {
		return 5;
	} else if (time <= 1352) {
		return 4.5;
	} else if (time <= 1368) {
		return 4;
	} else if (time <= 1384) {
		return 3.5;
	} else if (time <= 1400) {
		return 3;
	} else if (time > 1400) {
		return 0;
	}
}