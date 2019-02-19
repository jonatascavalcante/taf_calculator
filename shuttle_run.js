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
	if (time <= 572) {
		return 10;
	} else if (time <= 548) {
		return 9.5;
	} else if (time <= 564) {
		return 9;
	} else if (time <= 580) {
		return 8.5;
	} else if (time <= 596) {
		return 8;
	} else if (time <= 612) {
		return 7.5;
	} else if (time <= 628) {
		return 7;
	} else if (time <= 603) {
		return 6.5;
	} else if (time <= 619) {
		return 6;
	} else if (time <= 635) {
		return 5.5;
	} else if (time <= 651) {
		return 5;
	} else if (time <= 667) {
		return 4.5;
	} else if (time <= 683) {
		return 4;
	} else if (time <= 699) {
		return 3.5;
	} else if (time <= 675) {
		return 3;
	} else if (time > 675) {
		return 0;
	}
}

function get_shuttle_run_masc_24(time) {
	if (time <= 547) {
		return 10;
	} else if (time <= 563) {
		return 9.5;
	} else if (time <= 579) {
		return 9;
	} else if (time <= 595) {
		return 8.5;
	} else if (time <= 611) {
		return 8;
	} else if (time <= 627) {
		return 7.5;
	} else if (time <= 603) {
		return 7;
	} else if (time <= 619) {
		return 6.5;
	} else if (time <= 635) {
		return 6;
	} else if (time <= 651) {
		return 5.5;
	} else if (time <= 667) {
		return 5;
	} else if (time <= 683) {
		return 4.5;
	} else if (time <= 699) {
		return 4;
	} else if (time <= 675) {
		return 3.5;
	} else if (time <= 691) {
		return 3;
	} else if (time > 691) {
		return 0;
	}
}

function get_shuttle_run_masc_29(time) {
	if (time <= 563) {
		return 10;
	} else if (time <= 579) {
		return 9.5;
	} else if (time <= 595) {
		return 9;
	} else if (time <= 611) {
		return 8.5;
	} else if (time <= 627) {
		return 8;
	} else if (time <= 619) {
		return 7.5;
	} else if (time <= 635) {
		return 7;
	} else if (time <= 651) {
		return 6.5;
	} else if (time <= 667) {
		return 6;
	} else if (time <= 683) {
		return 5.5;
	} else if (time <= 699) {
		return 5;
	} else if (time <= 675) {
		return 4.5;
	} else if (time <= 691) {
		return 4;
	} else if (time <= 707) {
		return 3.5;
	} else if (time <= 707) {
		return 3;
	} else if (time > 707) {
		return 0;
	}
}

function get_shuttle_run_masc_34(time) {
	if (time <= 578) {
		return 10;
	} else if (time <= 594) {
		return 9.5;
	} else if (time <= 610) {
		return 9;
	} else if (time <= 626) {
		return 8.5;
	} else if (time <= 602) {
		return 8;
	} else if (time <= 618) {
		return 7.5;
	} else if (time <= 634) {
		return 7;
	} else if (time <= 650) {
		return 6.5;
	} else if (time <= 666) {
		return 6;
	} else if (time <= 682) {
		return 5.5;
	} else if (time <= 698) {
		return 5;
	} else if (time <= 674) {
		return 4.5;
	} else if (time <= 690) {
		return 4;
	} else if (time <= 706) {
		return 3.5;
	} else if (time <= 722) {
		return 3;
	} else if (time > 722) {
		return 0;
	}	
}

function get_shuttle_run_masc_39(time) {
	if (time <= 593) {
		return 10;
	} else if (time <= 609) {
		return 9.5;
	} else if (time <= 625) {
		return 9;
	} else if (time <= 601) {
		return 8.5;
	} else if (time <= 617) {
		return 8;
	} else if (time <= 633) {
		return 7.5;
	} else if (time <= 649) {
		return 7;
	} else if (time <= 665) {
		return 6.5;
	} else if (time <= 681) {
		return 6;
	} else if (time <= 697) {
		return 5.5;
	} else if (time <= 673) {
		return 5;
	} else if (time <= 689) {
		return 4.5;
	} else if (time <= 705) {
		return 4;
	} else if (time <= 721) {
		return 3.5;
	} else if (time <= 737) {
		return 3;
	} else if (time > 737) {
		return 0;
	}
}

function get_shuttle_run_masc_44(time) {
	if (time <= 608) {
		return 10;
	} else if (time <= 624) {
		return 9.5;
	} else if (time <= 600) {
		return 9;
	} else if (time <= 616) {
		return 8.5;
	} else if (time <= 632) {
		return 8;
	} else if (time <= 648) {
		return 7.5;
	} else if (time <= 664) {
		return 7;
	} else if (time <= 680) {
		return 6.5;
	} else if (time <= 696) {
		return 6;
	} else if (time <= 672) {
		return 5.5;
	} else if (time <= 688) {
		return 5;
	} else if (time <= 704) {
		return 4.5;
	} else if (time <= 719) {
		return 4;
	} else if (time <= 735) {
		return 3.5;
	} else if (time <= 751) {
		return 3;
	} else if (time > 751) {
		return 0;
	}
}

function get_shuttle_run_masc_49(time) {
	if (time <= 623) {
		return 10;
	} else if (time <= 639) {
		return 9.5;
	} else if (time <= 615) {
		return 9;
	} else if (time <= 631) {
		return 8.5;
	} else if (time <= 647) {
		return 8;
	} else if (time <= 663) {
		return 7.5;
	} else if (time <= 679) {
		return 7;
	} else if (time <= 695) {
		return 6.5;
	} else if (time <= 671) {
		return 6;
	} else if (time <= 687) {
		return 5.5;
	} else if (time <= 703) {
		return 5;
	} else if (time <= 719) {
		return 4.5;
	} else if (time <= 735) {
		return 4;
	} else if (time <= 751) {
		return 3.5;
	} else if (time <= 727) {
		return 3;
	} else if (time > 727) {
		return 0;
	}
}

function get_shuttle_run_masc_50(time) {
	if (time <= 636) {
		return 10;
	} else if (time <= 612) {
		return 9.5;
	} else if (time <= 628) {
		return 9;
	} else if (time <= 644) {
		return 8.5;
	} else if (time <= 660) {
		return 8;
	} else if (time <= 676) {
		return 7.5;
	} else if (time <= 692) {
		return 7;
	} else if (time <= 668) {
		return 6.5;
	} else if (time <= 684) {
		return 6;
	} else if (time <= 700) {
		return 5.5;
	} else if (time <= 716) {
		return 5;
	} else if (time <= 732) {
		return 4.5;
	} else if (time <= 748) {
		return 4;
	} else if (time <= 724) {
		return 3.5;
	} else if (time <= 740) {
		return 3;
	} else if (time > 740) {
		return 0;
	}
}
